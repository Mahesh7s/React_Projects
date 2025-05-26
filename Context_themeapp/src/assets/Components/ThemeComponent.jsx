import React, { useContext } from "react";
import Theme, { Themecontext } from "../Contexts/themecontext";

function ThemeComponent(){
	let theme = useContext(Themecontext)
    
	return(
		<ThemeComponent>
			<App/>
		</ThemeComponent>
	)

}