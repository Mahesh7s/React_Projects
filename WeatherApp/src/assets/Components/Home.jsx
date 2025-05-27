import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Home(){

	let [city,setCity]= useState("")

  let myApikey = "d28da8a3a94bad9ac0f7c263028ee4a9"
async function fetchdata(){
	let res = await fetchdata(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApikey}`)
	let data = await res.json()
	console.log(data)
}

useEffect(()=>{fetchdata()},[city])



	function findCity(e){
           setCity(e.target.value)
	}

	return(
		<>
		<h1>Search for a city to get weather</h1>
		<input type="text"  placeholder="search for a city.." value={city} onChange={findCity}/>
<p>{city}</p>
		</>
	)
}