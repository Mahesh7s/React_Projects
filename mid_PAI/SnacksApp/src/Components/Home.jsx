import React, { useState } from "react";

export default function Home(){

	let [Allsnacks,setAllsnacks]=useState([]);
	let [snack,setSnacks]=useState({
		id:"",
		title:"",category:"",price:"",
		rating:"",
		createdAt:"",
	})
	function handleChange(e){

		const{name,value}=e.target;
		setSnacks({...snack,[name]:value,createdAt:Date.now()})
        
	}


	async function formSubmit(e){
		e.preventDefault();
		setAllsnacks([...Allsnacks,snack])
		//console.log(Allsnacks)

		let res = await fetch("https://snacks-45e95-default-rtdb.asia-southeast1.firebasedatabase.app/snacks.json",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(snack)
		})

		let dataa = await res.json()
		let data = Object.values(dataa)
		console.log(data)

		console.log(data[0])

		//console.log(snack)

	

	}
	return(
		<>
		<h1>Welcome to Home Page</h1>
          <form onSubmit={formSubmit}>
        <input type="text"  name="id" placeholder="Enter the snack Id:" value={snack.id} onChange={handleChange}/><br/>
		<input type="text"  name="title" placeholder="Title of the Snack" value={snack.title} onChange={handleChange}/><br/>

		<select name="category" value={snack.category} onChange={handleChange}>
			<option value="">Select Snack category</option>
			<option value="sweets">Sweets</option>
			<option value="hot">Hot</option>
			<option value="drinks">Drinks</option>
			<option value="bakery">Bakery</option>
		</select><br/>
		<input type="text"  name="price"  placeholder="Enter Price:" value={snack.price} onChange={handleChange} /><br />
		<input type="text"  name="rating" value={snack.rating} placeholder="Enter Rting" onChange={handleChange}  /><br/>
		<button type="submit">Add Task</button>

{console.log(Date.now())}



		  </form>




		</>
	)
}