import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Home'
import Navbar from './assets/Components/Navbar'
import About from './assets/Components/About'


function App() {
  

  return (
    <>
    <h1>Weather APP Dashboard</h1>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
