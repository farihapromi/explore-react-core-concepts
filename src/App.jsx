import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
    <Person></Person>
    <Developer name="Shuvo" salary="60000"></Developer>
    <Device name="Laptop" price="12"></Device>
    <Device name="Mobile" price="10"></Device>

    <Device name="Watch" price="7"></Device>

   

      
    </>
  )
}
function Device(props){
  return(
    <div>
      <h3>This device is : {props.name}</h3>
      <h3>Price is :{props.price}</h3>
    </div>
  )
}
function Person(){
  const person1={
    name:"anabia",
    age:3
  }
  return(
    <div>
      <h3>Name is: {person1.name}</h3>
      <h3>Age is : {person1.age}</h3>

    </div>
  )
}
function Developer({name,salary}){
  //destrucring

  const developStyle={
    margin:"20px",
    padding:"10px",
    border:"4px solid purple",
    borderRadius:"20px"
  }
  return(
    <div style={developStyle}>
     
      <h3>{name}</h3>
      <h3>{salary}</h3>
    </div>
  )
}

export default App
