import React,{useState} from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Buttons from './components/Buttons';
import Sign_in from './Sign_in';
import Sign_Up from './Sign_Up';
function All() {
  const [Sign, setSign] = useState(null)

  function getSignInPage(){
    if(Sign === null)
    {
      setSign(<Sign_in/>)
    }
    else{
      setSign(null)
    }
  }

  function getSignUpPage(){
    if(Sign === null)
    {
      setSign(<Sign_Up/>)
    }
    else{
      setSign(null)
    }
  }

  
  return (
    <div className='z-1 relative h-screen pt-10'>
      <video className='-z-1 absolute top-0 left-0 w-full brightness-50 blur-[5px] h-screen object-cover' autoPlay muted loop>
        <source src="/video/BG_SUYOU.mp4"/>
      </video>
      <div className='mr-10 ml-10 flex justify-between'>
          <div className='flex items-center gap-10'>
            <Buttons name="Home" referlink="#"/>
            <Buttons name="About" referlink="#"/>
            <Buttons name="Contact" referlink="#"/>
          </div>
          <div className='flex items-center gap-10'>
            <a className='font-semibold flex items-center gap-1'>English<span><MdKeyboardArrowDown /></span></a>
            <Buttons name="Sign in" onClick={getSignInPage} referlink="#"/>
            <Buttons name="Register" onClick={getSignUpPage} referlink="#"/>
          </div>
      </div>
      {Sign}
    </div>

  )
}

export default All