import React from 'react'
import Child from './Child'
import { useState } from 'react';

function Parent() {

  const[state, setState]=useState("");
  const[data,setData]=useState("");
  const sendDataToChild=()=>{setData(state)}
  return (
    <div
      style={{
        border: '2px solid black',
        width: '300px',
        margin: '100px',
        height: '200px',
        padding: '20px',
      }}
    >
      <input type="text" onChange={(e)=>{setState(e.target.value)
      }}   />

      <button onClick={sendDataToChild}>send Data to child</button>
      <Child data ={data}/>
    </div>
  )
}

export default Parent
