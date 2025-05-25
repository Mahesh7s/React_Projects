import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Toggle Button</h1>
      <h6>This is for second question in the assignment</h6>
      <ToggleButton text="This is Toggle Text"/>
     </div>
    </>
  )
}

export default App
