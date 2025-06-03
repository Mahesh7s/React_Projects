import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { addTask,updateStatus,deleteTask } from "./action";
import {useSelector,useDispatch} from "react-redux"


export default function TodoLsit(){

	let todos = useSelector((state)=>state.todos)
	let dispatch = useDispatch()

	let [task,setTask] = useState({title:"",status:""});
	
	function handleChange(e){
		let {name,value} = e.target;
		 setTask({...task,[name]:name==="status"? value==="true":value})
		
	}
         function handleAddTask(){
			if(task.title.trim()===""){
				return alert("Enter a valid Task Title:");
			}
			console.log("Submitting task:", task); 
			let newTask={
				...task,id:crypto.randomUUID()
			} 
			dispatch(addTask(newTask))
			setTask({title:"",status:""})
		 }



	return(
		<>
		<h1>Sample To do List App Using Redux</h1>
		<h3>Add a List Item</h3>
		<input type="text" placeholder="Enter the Title of the Task" name="title" value={task.title} onChange={handleChange}  />
		<select name="status" value={task.status} onChange={handleChange}>
			<option value="">--</option>
			<option value="true">Completed</option>
			<option value="false">Pending</option>
		</select>
		<button onClick={handleAddTask}>Add Task</button>
<br/>

<hr />
             <h3>My Tasks:</h3>
		<ul>
  {todos.map((task, index) => (
    <li key={index}>
      <span>{task.title} - {task.id}{task.status ? "Completed" : "Pending"} 
		<button onClick={()=>{dispatch(updateStatus(task.id))}}>{task.status?"Mark as Pending":"Mark as Complete"}</button>
	   <button onClick={()=>{dispatch(deleteTask(task.id))}}>Delete Task</button></span>
    </li>
  ))}
</ul>


		</>
	)

}