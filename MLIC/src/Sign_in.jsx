import React,{useState} from 'react'

function Sign_in() {

  return (
    <div className='w-full absolute top-40 left-0 z-1 flex justify-center'>
      <div className='bg-[#99a1af6a] backdrop-blur-xs p-10 size-fit rounded-2xl'>
        <h1 className='text-3xl font-bold select-none'>Welcome Back User</h1>
        <br/>
        <form className='flex flex-col'>
          {/* EMAIL KE LIYE INPUT */}
          <label className='text-1xl font-bold' htmlFor='email'>Email</label>
          {/* <br/> */}
          <input required className='focus:outline-none focus:scale-105 transition-all w-full border-2 border-white border-solid p-3 rounded-xl mb-2' id='email' placeholder='Enter Email'/>
          {/* <br/> */}
          {/* PASSWORD KE LIYE INPUT */}
          <label className='text-1xl font-bold' htmlFor='password'>Password</label>
          {/* <br/> */}
          <input required className='focus:outline-none focus:scale-105 transition-all w-full border-2 border-white border-solid p-3 rounded-xl mb-5' id='password' placeholder='Enter password'/>
          {/* Submit button */}
          <button className='hover:scale-110 active:scale-90 transition-all font-semibold border-2 py-2 px-4 rounded-2xl'>Log-In</button>
        </form>
      </div>
    </div>
  )
}

export default Sign_in