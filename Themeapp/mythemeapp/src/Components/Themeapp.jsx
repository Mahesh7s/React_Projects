import React from "react";
import { useEffect } from "react";

function ThemeApp(){

	

	let [theme,setTheme] = React.useState(localStorage.getItem("themed") || "")
   useEffect(()=>localStorage.setItem("themed",theme),[theme])
     
	return(
		<>
		<select name="theme" value={theme} onChange={(e)=>setTheme(e.target.value)}>
			<option value=""></option>
			<option value="light">Light Mode</option>
			<option value="dark">Dark Mode</option>
			
			
		</select>

		<ThemedBox themes={theme} />

		</>
		
	)

}

function ThemedBox({themes}){
	let styles ={
		div:{
			width:"150px",
			height:"150px",
			border:"2px solid",
			margin:"10px",
			backgroundColor:themes==="light"?"White":"black",
			color:themes==="light"?"black":"white",
			padding:"10px",
			overflow:"hidden"
		}
	}

	return(
		<>
		<div style={{display:"flex"}}>
		<div style={styles.div}>
               <h3>Lorem ipsum dolor sit amet.</h3>  
		</div>
		<div style={styles.div}>
			<p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eligendi? Aspernatur nobis cum quasi, nisi atque voluptates iste labore dolorum.</b></p>
		</div>
		<div style={styles.div}>
			<ul>
				<li>Item1</li>
				<li>Item2</li>
			</ul>
		</div>
		</div>
		     
		</>
	)

}

export {ThemeApp,ThemedBox}