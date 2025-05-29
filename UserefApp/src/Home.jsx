import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function Home(){
	let inputref = useRef(null)
	let [state,setState] = useState(false)
	function focusInput(){
		setState(true)
		inputref.current.focus()
		inputref.current.style.padding="10px";
		inputref.current.style.backgroundColor="black";
		inputref.current.style.color="white";

	}

	return(
		<>
		<h1>Welcome to Home Page</h1>
		<input type="text"  ref={inputref} placeholder="click on button" />
		<br/>
		<button onClick={focusInput}>Click me to focus the input</button>
		{state && <p>Focused!!!11</p>}
		</>
	)
}



