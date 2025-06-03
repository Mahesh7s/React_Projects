
export const addTask=(newTask)=>{
	return {type:"ADD_TASK",payload:newTask}
}
export const updateStatus=(id)=>{
	return {type:"UPDATE_STATUS",payload:id}
}
export const deleteTask= (id)=>{
	return {type:"DELETE_TASK",payload:id}
}