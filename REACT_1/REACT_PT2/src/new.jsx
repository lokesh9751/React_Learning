import React, { useState } from 'react'

function Hello() {
    let [counter,setCounter] = useState(5)

    const addval = () =>
    {
        if(counter < 20)
        {
            counter += 1
            setCounter(counter)
        }
        else
        {
            window.alert("Cant go above 20")
        }
    }

    const decval = () =>
    {
        if(counter > 0)
        {
            setCounter(counter - 1)
        }
        else{
            // counter--
            window.alert("cant go below zero");
        }
        
    }
    
  return (
    <>
        <h1>Lokesh Harbola Counter</h1>
        <h4>Counter : {counter}</h4>
        <button onClick={addval}>INCREASE</button>
        <br/>
        <button onClick={decval}>DECREASE</button>
    </>
  )
}

export default Hello