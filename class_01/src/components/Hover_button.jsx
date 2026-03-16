import React from 'react'

function Hover_button(props) {
  return (
    <button className='cursor-pointer scale-100 border-transparent hover:border-gray-300 border-solid border rounded-[20px] w-auto pl-3 pr-3 hover:scale-105 transition'>{props.btn_name}</button>
  )
}

export default Hover_button