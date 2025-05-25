import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Displayuser from './Components/Displayuser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Displayuser/>
    </>
  )
}

export default App
