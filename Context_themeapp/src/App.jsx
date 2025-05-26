import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themecontext } from './assets/Contexts/themecontext'
import Parent from './assets/Contexts/parent'

function App() {
 
  let {theme,toggleTheme} = useContext(Themecontext)
  console.log(theme)

  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
     <Parent/>
    </>
  )
}

export default App
