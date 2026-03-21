import React,{useState} from 'react'
function Card({Name}) {
  return (
    <div className='bg-white rounded-2xl w-70 h-fit p-5 m-10'>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-2xl'>{Name}</h1>
            <h1 className='font-semibold'>GRAPHIC DESIGNER</h1>
            <h1>Jyantingraphics@gmail.com</h1>
        </div>
        <div className='mt-10 mb-10 flex flex-col gap-5'>
            <div>
                <h1 className='font-bold text-xl'>The Goal</h1>
                <h1>From concept to creation, I bring your ideas to life. Bold designs, & a visual experience.  </h1>
            </div>
            <div>
                <h1 className='font-bold text-xl'>Contact</h1>
                <h1>Scan QR to scan my Links</h1>
            </div>
        </div>
    </div>
  )
}

export default Card