import React from 'react'
import Hover_button from './components/Hover_button'
import Blue_Hover_button from './components/Blue_Hover_button'
import { GoArrowUpRight } from "react-icons/go";
function Header() {
  return (
    // flex = display flex , flex-row = flex-direction row
    <div className='flex flex-row justify-between items-center mt-5 mb-5'>
        <h2 className='text-black text-2xl font-semibold'>Horizon Courts</h2>
        <div className='flex self-center gap-15'>
            <Hover_button btn_name="About" />
            <Hover_button btn_name="Services"/>
            <Hover_button btn_name="Coaches"/>
            <Hover_button btn_name="Events"/>
            <Hover_button btn_name="Contacts"/>
        </div>
        <Blue_Hover_button blue_button_name="Book now" icon=<GoArrowUpRight />/>
    </div>
  )
}

export default Header