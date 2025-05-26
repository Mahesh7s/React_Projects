import React, { useContext } from "react";
import Theme, { Themecontext } from "./themecontext";
import Child from "./Child";

export default function Parent(){
	let {theme, toggleTheme} = useContext(Themecontext)
	return(
		<>
		<h1>{theme}</h1>
		<div style={{ padding:"10px",margin:"10px",color:theme==="light"?"white":"brown",backgroundColor:theme==="light"?"blue":"black",}}>
			<h3>
				parent Component
				<Child/>
				
			</h3>
		</div>
        <Child/>
		</>
		
	)
}