import React,{useState} from 'react'

function Input_front(props) {

  const {getValue ,setgetValue ,putOccupation ,setputOccupation , data , setData ,
  allData, setAllData} = props;

  function createCard() {
    
    setData({name : getValue , occupation :  putOccupation}); 
    let newCard = [...allData ];
    newCard.push({name : getValue , occupation :  putOccupation})
    console.log(newCard)
    setAllData(newCard)
    setgetValue('')
    setputOccupation('')
  }

  return (
    <div className='mt-10 ml-10 bg-gray-500 w-fit py-5 px-10 rounded-2xl' getvalue={"getValue"}>
        <div className='border p-2 rounded-2xl'>
          <h1 className='input_front_font text-2xl uppercase mb-2'>Your Name</h1>
          <input value={getValue} onChange={(e)=>{setgetValue(e.target.value)}} className='text-xl' type='text' placeholder='Enter Your Name'/>
        </div>
        <div className='border p-2 rounded-2xl mt-2'>
          <h1 className='input_front_font text-2xl uppercase mb-2'>Occupation</h1>
          <input value={putOccupation} onChange={(e)=>{setputOccupation(e.target.value)}} className='text-xl' type='text' placeholder='Enter Your Occupation'/>
        </div>
        <button onClick={()=>{
          if(getValue === '' || putOccupation === '')
          {
            alert("hhh")
            return
          } 
          if(confirm("Do you want to create a card?")){
            createCard()
          }
        }} className='hover:scale-105 mt-3 p-3 border-2 rounded-2xl' type='submit'>CREATE</button>
    </div>
  )
}

export default Input_front