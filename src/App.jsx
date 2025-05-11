import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
    <Developer></Developer>
      
    </>
  )
}
function Developer(){
  const developStyle={
    margin:"20px",
    padding:"10px",
    border:"4px solid purple",
    borderRadius:"20px"
  }
  return(
    <div style={developStyle}>
      <h3>This is a Developer</h3>
    </div>
  )
}

export default App
