import React from "react";

function ToggleButton({text}){

	let [toggle,setToggle]=React.useState(true)

	return(
		<>   
		<h3>Toggle Button Example</h3>
		<button onClick={()=>setToggle(!toggle)}>{toggle?"ON":"OFF"}</button>
		<p style={{ color: !toggle ? "green" : "red" }}>{text}</p>
		</>
	)
}export default ToggleButton