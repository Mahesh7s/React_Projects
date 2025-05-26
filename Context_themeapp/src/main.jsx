import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './assets/Contexts/themecontext.jsx'
import ThemeCom from './assets/Contexts/ThemeCom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeCom/>
  </StrictMode>,
)
