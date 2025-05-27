import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Home(){

     let navigate= useNavigate()
     let [alldata,setAlldata]=useState([])
	 let [data,setData] = useState([])
	 let [loading,setLoading] = useState(false)
	 let [filter,setFilter] = useState("")
	 let [sort,setSort]= useState("")

 useEffect(()=>{
          fetchData()
 },[])

 function changeFilter(e){
	let fil = e.target.value;
	setFilter(fil)
	if (fil === "") {
    // Show all products if no filter selected
    setData(alldata)}
	else{
	let filtered = alldata.filter(item=>item.category===fil)
    
	 setData(filtered)
}

	
 }
 function sortFun(e){
	let sortvalue=e.target.value;
	setSort(sortvalue);
	if(sortvalue==="low"){
		let da = data.sort((a,b)=>a.price-b.price)
		setData(da)
	}else{
		let da = data.sort((a,b)=>b.price-a.price)
		setData(da)
	}

 }
 

	 async function fetchData(){
		setLoading(true);
		try{
			let res = await fetch("https://dummyjson.com/products")
			let daata = await res.json();
			setData(daata.products)
			console.log(daata.products)
			setAlldata(daata.products)
			setLoading(false);

		}
		catch(err){
			console.log(err.message)
		}
	 }

	return(
		<>
		<h2>Welcome to the home Page</h2>
		<label>Choose a filter:<select  style={{margin:"10px",padding:"10px"}} value={filter} onChange={changeFilter}>
			<option value="">Choose a filter</option>
			<option value="beauty">Beauty</option>
			<option value="fragrances">Fragrances</option>
			<option value="furniture">Furniture</option>
			<option value="groceries">Groceries</option>
			</select></label>

			<br/>
			<select name="sort" value={sort} onChange={sortFun}>
				<option value="">Sort By:</option>
				<option value="low">Price: Low to High</option>
				<option value="high">Price: High to Low</option>

			</select>
		{loading && <h2>Loading.....</h2>}
		{data && <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
			{
				data.map((item)=>(
					<div key={item.id} style={{border:"2px solid",margin:"10px",borderRadius:"5px",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
						<h4>{item.title}</h4>
						<h4>{item.category}</h4>
						<img src={item.images[0]} width="200px"/>
						<h4>Price:${item.price}</h4>
						<button onClick={()=>navigate(`/product/${item.id}`)}>View More</button>
						</div>
				))
			}
			
			
			</div>}

		</>
	)
}