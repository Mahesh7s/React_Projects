import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/Authentication";

export default function Navbar(){
	let{login,slogin} = useContext(AuthContext)
	return(
		<button onClick={slogin}>{login?"Logout":"Login"}</button>
	)
}