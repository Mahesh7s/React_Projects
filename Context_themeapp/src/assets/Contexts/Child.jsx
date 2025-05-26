import React, { useContext } from "react";
import Theme,{ Themecontext } from "./themecontext";

export default function Child(){
	let {theme} = useContext(Themecontext)
	return(
		<>
		<div style={{backgroundColor:theme==="light"?"red":"orange",color:theme==="light"?"black":"white"}}>
			Child Component
		</div>
		</>
	)
}