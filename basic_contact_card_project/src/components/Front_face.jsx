import React from 'react'
import Input_front from './Input_front'

function Front_face(props) {
  const {allData} = props;

  return (    
    allData.map((card , idx)=>{
      return <div key={idx} className='transition-all hover:scale-105 z-1 mt-10 ml-10 relative w-100 h-60 rounded-2xl overflow-hidden' lol="">
        <div className='z-10 object-cover absolute w-100 h-60 bg-[url(./assets/photos/paper_textured_bg.jpg)]'></div>
        <div className='z-99 object-cover w-100 h-100 bg-contain bg-no-repeat bg-right   absolute bg-[url(./assets/photos/image.png)]'></div>
        <div className='z-20 tracking-wide font_custom text-black flex flex-col absolute bottom-0 mb-5 ml-5'>
            <h1 className='text-2xl'>{card.name}</h1>
            <h1 className='sub_heading text-2xl uppercase font-medium'>{card.occupation}</h1>
        </div>
    </div>
    })

    
  )
}

export default Front_face