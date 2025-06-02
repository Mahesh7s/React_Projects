import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { increment,decrement } from "./action";

export default function Counter(){
	let count = useSelector((state)=>state.count)
	let dispatch = useDispatch();

	return(
		<>
		<h2>Counter APP using Redux</h2>
		<h1>Count:{count}</h1>
		<button onClick={()=>dispatch(increment())} >Incre</button>
		<button onClick={()=>dispatch(decrement())}disabled={count==1}>Decre</button>

		<br/>
      <p style={{ marginTop: "20px" }}>
        <strong>Redux State:</strong><br />
        <code>{JSON.stringify(count)}</code>
      </p>
		</>
	)
}