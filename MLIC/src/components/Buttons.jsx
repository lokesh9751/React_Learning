import React, { use, useState } from 'react'

function Buttons(props) {

    const [focus,setfocus] = useState(false)
  return (
    <div>
        {/* <a className='scale-100 transition-all p-3 select-none cursor-pointer font-semibold focus:bg-white focus:p-3 focus:rounded-3xl focus:text-black hover:scale-125' href='#'>{props.name}</a> */}
        <a onClick={() => {setfocus(!focus);props.onClick()}} className={`scale-100 transition-all p-3 select-none cursor-pointer font-semibold ${focus ? "focus:bg-white focus:p-3 focus:rounded-3xl focus:text-black active:scale-125" : "focus:bg-white focus:p-3 focus:rounded-3xl focus:text-black"}`} href={props.referlink}>{props.name}</a>
    </div>
  )
}

export default Buttons