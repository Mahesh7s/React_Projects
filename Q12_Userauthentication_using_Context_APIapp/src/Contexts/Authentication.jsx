import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()
function Authentication({children}){
	let [login,setLogin] = useState(false);
	function slogin(){
		setLogin(!login)
	}
	

	return(
		<AuthContext.Provider value={{login,slogin}}>
			{children}
		</AuthContext.Provider>
	)
}
export default Authentication;