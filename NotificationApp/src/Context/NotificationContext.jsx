import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const NotificationContext = createContext()
export default function Notification({children}){
	
let [notifications,setNotifications] = useState([]);
const [intervalId, setIntervalId] = useState(null);
let nid=1
function markRead(){
	setNotifications((prev)=>prev.map((n)=>({...n,read:true})));
}
function addNotification(){
	let newitem = {
		id:nid++,
		message:"You have a Message from Mahesh Moka",
		read:false
	}
	setNotifications((prev)=>[...prev,newitem])
        alert(newitem.message);
}

const stopNotifications = () => {
    clearInterval(intervalId);
  };
      
 useEffect(()=>{
	let id =setInterval(addNotification,5000);
	setIntervalId(id);
	return ()=>clearInterval(id);
 },[])

 return(
	<>
	<NotificationContext.Provider value={{markRead,notifications,addNotification,stopNotifications}}>{children}</NotificationContext.Provider>
	</>
 )





}