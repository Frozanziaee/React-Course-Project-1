import { useState } from 'react'
import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import './style.css'

function App() {
  const [darkMode, setDarkMode]= useState(true)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode )
  }  
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode}/>
    </div>
  )
}

export default App
