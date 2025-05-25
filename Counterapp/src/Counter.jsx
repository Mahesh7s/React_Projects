import React from "react";

function Counter({number}){
	let[count,setCount]=React.useState(Number(number));

return(
	<>
	<h3>The Counter:{count}</h3>
	<button onClick={()=>setCount(count+1)}>Increment</button>
	<button style={{}} 
  disabled={count === 0} 
  onClick={() => setCount(count - 1)}>Decrement</button>
	</>
)

}


export default Counter