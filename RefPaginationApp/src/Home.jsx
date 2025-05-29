import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";


export default function Home(){

	let [alltasks,setTasks] = useState([])
	let [loading,setLoading] = useState(false)
	let [currpage,setPage] = useState(1)
	let pageRef = useRef(null)


	let items_Per_Page=10;
	
	let lastIndex= items_Per_Page*currpage;
	let startIndex= lastIndex-items_Per_Page;
	let pageData = alltasks.slice(startIndex,lastIndex);
	async function fetchData(){
		   setLoading(true)
           let res =  await axios.get("https://jsonplaceholder.typicode.com/todos");
		   setTasks(res.data)
		   console.log(res.data)
		   setLoading(false)
	}


	useEffect(()=>{
            fetchData()
	},[])
	useEffect(()=>{
             pageRef.current.style.backgroundColor="orange";
	},[currpage])

	return(
		<>
		<h1>
			Welcome to the Todo list
		</h1>
		{loading && <h3>Loading.....</h3>}
		 <button onClick={()=>setPage(prev=>prev-1)} disabled={currpage==1}>Prev</button>
		 <span ref={pageRef}>{currpage}</span>
		 <button onClick={()=>setPage(prev=>prev+1)}>Next</button>
		{alltasks && <div>
			{
				pageData.map((task)=>(
					<>
					<div key={task.id} style={{border:"2px solid",margin:"10px",}}>
						<p><b style={{textAlign:"center"}}>{task.id}</b></p>
						<h2>Title: {task.title}</h2>
						<p>Status: {task.completed?"Completed":"Pending"}</p>
					</div>
					</>
				))
			}
			 
			</div>}
         <button onClick={()=>setPage(prev=>prev-1)} disabled={currpage==1}>Prev</button>
		 
		 <button onClick={()=>setPage(prev=>prev+1)} disabled={pageData.length==0}>Next</button>
		</>
	)
}