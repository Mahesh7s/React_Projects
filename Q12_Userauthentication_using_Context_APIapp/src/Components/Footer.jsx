import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/Authentication";

export default function Footer(){
	let{login} = useContext(AuthContext)

	return(
		<>
		{login && <p>Welcome to the user</p>}
		{!login && <p>Please Login</p>}
		</>
	)
}