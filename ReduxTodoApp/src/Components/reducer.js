let initialState ={todos:[]}
export default function TodoReducer(state=initialState,action){
	switch (action.type){
		case "ADD_TASK":
			return {...state,todos:[...state.todos,{title:action.payload.title,id:action.payload.id,status:action.payload.status},],}
		case "UPDATE_STATUS":
			return {...state,todos:state.todos.map((task,index)=>task.id===action.payload?{...task,status:!task.status}:task) }
			case "DELETE_TASK":
				return {...state,todos:state.todos.filter((task,index)=>task.id!==action.payload)}
		default:
			return state;
	}
}