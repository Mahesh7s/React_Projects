import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import ProductDetails from './Components/ProductDetails'
import About from './Components/About'
import {Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
     </Routes>
    </>
  )
}

export default App
