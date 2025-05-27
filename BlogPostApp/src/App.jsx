import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Unknown from './Unknown'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Postdetails from './Components/Postdetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      <Navbar/>
           <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/posts/:id' element={<Postdetails/>}/>
            <Route path='/myhome' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Unknown/>}/>


           </Routes>
    </>
  )
}

export default App
