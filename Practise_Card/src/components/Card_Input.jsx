import React, { useState } from 'react'

function Card_Input({Name,setName}) {
    function submitHandler(e) {
        e.preventDefault()
        console.log("hi");
    }


  return (
    <div className='m-5'>   
        <div className='text-white flex items-center h-max'>

            <form onSubmit={(e)=>{submitHandler(e)}}>
                <label htmlFor='Name'>Name-</label>
                <input value={Name} onChange={(e)=>{setName(e.target.value)}} className='border p-2 mr-10' id='Name' placeholder='Enter Name'/>
                <label className='' htmlFor='Occupation'>Occupation-</label>
                <input className='border p-2 mr-10' id='Occupation' placeholder='Enter Occupation'/>
                <label className='' htmlFor='Email'>Email-</label>
                <input className='border p-2 mr-10' id='Email' placeholder='Enter Email'/>
                <button type='submit' className='border rounded-md px-8 py-4 active:scale-95  '>SUBMIT</button>
            </form>

        </div>

        <div className='text-white flex mt-5 items-center'>
            <label htmlFor='Goal'>Goal-</label>
            <input className='border p-2 mr-10' id='Goal' placeholder='Enter Goal'/>
            <label className='' htmlFor='Links'>Links-</label>
            <input className='border p-2 mr-10' id='Links' placeholder='Enter Links'/>
        </div>
    </div>

  )
}
export default Card_Input