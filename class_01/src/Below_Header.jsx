import React from 'react'
import image from './assets/i.jpg'
import Blue_Hover_button from './components/Blue_Hover_button'
import image2 from './assets/circu_1.jpg'
import image3 from './assets/circu_2.jpg'
import image4 from './assets/circu_3.jpg'
import Circular_image from './components/Circular_image'
import { GoArrowUpRight } from "react-icons/go";
function Below_Header() {
  return (
    //className=' w-full h-130 bg-center bg-cover brightness-80 bg-[url(./assets/i.jpg)]'
    <div className='relative mb-5'>
        <img className='pointer-events-none w-full brightness-50 h-130 object-cover rounded-[15px]' src={image}/>
        <div className='absolute top-20 w-full flex flex-col items-center gap-3'> 
            <h1 className='text-white text-5xl'>Unleash Your Inner Champion Today.</h1>
            <h1 className='text-white text-5xl'>All In One Place.</h1>
            <p className='text-white text-center w-130'>Join the ultimate tennis experience - where passion meets performances and every swing brings you closer to victory.</p>
            <Blue_Hover_button blue_button_name="Start your own journey" />
        </div>
        <div className='flex absolute bottom-0 text-white left-5 mb-5'>
            <div className='flex gap-2'>
                <p className='text-sm'>Train with real professionals.<br/>Get the real results.</p>
                <div className='flex items-center bg-slate-300 p-1.25 pr-2 pl-2 rounded-[20px] '>
                <Circular_image images={image2}/>
                <Circular_image images={image3}/>
                <Circular_image images={image4}/>
                </div>
            </div>
        </div>
        <div className='flex absolute bottom-0 text-white right-0 mr-5 mb-5 gap-4'>
            <p className='underline flex items-center cursor-pointer' >Instagram<GoArrowUpRight /></p>
            <p className='underline flex items-center cursor-pointer'>Facebook<GoArrowUpRight /></p>
            <p className='underline flex items-center cursor-pointer'>Tik Tok<GoArrowUpRight /></p>
        </div>
    </div>
  )
}

export default Below_Header