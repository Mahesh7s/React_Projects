import React, {useEffect,useState} from "react";

function Quote(){
	let [data,setData] = useState({content:"HAppy",author:"Mahesh",id:"7"})
    let [loading,setLoading] =useState(false)
	let [error,setError] = useState("")
	useEffect(()=>{
		 let inter =setInterval(()=>fetchdata(),30000)
	
	return ()=>clearInterval(inter)},[])

	async function fetchdata(){
         setLoading(true)
		 try{
		let res = await fetch("https://api.quotable.io/random")
		let dataa =await res.json()
		let { _id, content, author } = dataa;
        setData({ id: _id, content, author });
		
		 }
		 catch(err){
			setError(err.message)
		 }
		 finally{
			setLoading(false)
		 }
		 
	}
	return(
		<>
		    <button onClick={fetchdata} disabled={loading}>
        {loading ? "Loading..." : "Get New Quote"}
      </button>
			{error && <p style={{color:"red"}}>{error}</p>}
			<h4>Quote:<i> ""{data.content}""</i></h4> 
			<small> -{data.author}</small>
		</>
	)

}


export default Quote