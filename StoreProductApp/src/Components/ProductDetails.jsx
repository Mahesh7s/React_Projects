import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"

export default function ProductDetails(){

	let{id}= useParams();
    let [product,setProduct] = useState([]);
	let [loading,setLoading]= useState(false);
	async function fetchProduct(){
		setLoading(true);
		let res = await fetch(`https://dummyjson.com/products/${id}`)
		let dataa = await res.json();
		console.log(dataa)
		setProduct(dataa)
	}
	useEffect(()=>{fetchProduct()},[])


	return(
		<>{product &&  <div style={{border:"2px solid",borderRadius:"20px"}}>
			<img src={product.images }  width="30%"/>
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<b>Availability:  {product.availabilityStatus}</b>
			<h4>Price: ${product.price}</h4>

		</div>
		  }
		
		</>
	)
}