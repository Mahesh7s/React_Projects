import { useEffect } from "react";

export default function Dashboard(){

let base = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"


useEffect(()=>fetchData(),[])

async function fetchData(){
let res = await fetch(base);
		let data = await res.json();
		let main = await fetch(data.url)
		console.log(await main.json())
}



	return(
		<>
		<h1>Welcome to Dashboard Page</h1>
		</>
	)
}