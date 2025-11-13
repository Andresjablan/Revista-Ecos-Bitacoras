import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "./context/ThemeContext";  
import App from './App'
import './index.css'

import AOS from 'aos'
import 'aos/dist/aos.css'


AOS.init()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>      {/*ENVUELVE LA APP */}
      <App />
    </ThemeProvider>
  </BrowserRouter>
)