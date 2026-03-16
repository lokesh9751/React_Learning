import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Blue_Hover_button(props,className) {
  return (
    <button className='flex  items-center bg-blue-950 text-white rounded-[20px] pl-3 pr-3 pt-0.5 pb-0.5 cursor-pointer scale-100 hover:scale-105 transition'>
    {props.blue_button_name}  
    {props.icon}
    </button>
  )
}

export default Blue_Hover_button