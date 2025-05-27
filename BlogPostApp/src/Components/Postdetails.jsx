import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";





export default function Postdetails(){
let {id} = useParams()
let navigate = useNavigate();
let [data,setdata]=useState([])
let [loading,setLoading] = useState(false)

	async function fetchData(){
		setLoading(true)
		let res = await fetch(`https://dummyjson.com/posts/${id}`);
		let dataa = await res.json()
		console.log(dataa)
            setdata(dataa)
			setLoading(false)
	}
	useEffect(()=>{
		fetchData()
	},[id])
	function goback(){
		navigate('/myhome')
	}

	return(
		<>{console.log(data)
		}
		{loading && <h3>Loading.....</h3>}<br/>
		<button onClick={goback}>Go back</button>
		{data && <div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
			<b>
    Genre:{data.tags}<br/>
	Reactions:{data.reactions?data.reactions.likes:"Nothing"}<br/>
	Views:{data.views}
	</b>
			
			
			</div>}
		</>
	)

}

