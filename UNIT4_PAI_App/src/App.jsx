import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Navbar from './pages/Navbar'

function App() {
 

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/details/:id" element={<Details/>}/>
     </Routes>
    </>
  )
}

export default App
