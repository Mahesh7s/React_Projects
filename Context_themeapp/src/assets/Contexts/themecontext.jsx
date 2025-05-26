import React, { createContext, useState } from "react";

export const Themecontext = createContext()

 export default function Theme({children}){
	let [theme,setTheme] = useState("light")
	const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));


	return(
		<Themecontext.Provider value={{theme,toggleTheme}}>
			{children}
		</Themecontext.Provider>
	)
}