import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){

	let [posts, setPosts] = useState([]);
  let [allPosts, setAllPosts] = useState([]);
	let [loading,setLoading] = useState(false)
	let navigate = useNavigate()
	let [title,setTitle] = useState("")

	async function fetchData(){
         setLoading(true)
		let res = await fetch("https://dummyjson.com/posts");
		let data = await res.json()
		setPosts(data.posts)
		 setAllPosts(data.posts);
		console.log(data.posts)
		setLoading(false)
	}
	useEffect(()=>{
                fetchData()
	},[])

	function viewBlog(id){
     navigate(`/posts/${id}`)     
}
function searchTitle(e){
    const value = e.target.value;
    setTitle(value);
    const filtered = allPosts.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filtered);
  }


	return(
		<>
		<h1>Home Page</h1>
        <h2><i>All Blogs...</i></h2>

		<input type="text" placeholder="Search by title..." value={title} onChange={searchTitle} />

		{loading && <h3>Loading........</h3>}
		{posts.length==0 && <p>No data Available</p>}
		{posts && <div > {
			posts.map((prev)=>(
				<div key={prev.id} style={{border:"2px solid",margin:"10px",borderRadius:"10px"}}>
					<h3 onClick={() => viewBlog(prev.id)}>{prev.title}</h3>
					<p style={{textAlign:"center"}}>{prev.body}</p>
					<p>Blog Id:{prev.userId}</p>
					</div>
			))}
			</div>}
		</>
		
	)
}