import React from "react";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Contexts/Authentication";

export default function Main(){
	let {login} = useContext(AuthContext)

	return(
		<> 
		{login && <h1>Login Succesfull!</h1>}
		{!login && <h3>Please login to continue.!!!</h3>}
		
		<Footer/>
		</>
	)
}