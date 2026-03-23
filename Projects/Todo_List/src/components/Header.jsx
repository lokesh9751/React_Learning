import { useEffect } from "react";
import React,{useState} from 'react'
import { MdDelete } from "react-icons/md";

const Header = () => {

    const [Inputvalue, setInputvalue] = useState('');
    const [Task, setTask] = useState([]);
    const [DateTime, setDateTime] = useState('')

    function handleFormSubmit(e){
        e.preventDefault()
        
        // Agar kisi ne kuch nhi daala input pe
        if(Inputvalue === ''){
            return ;
        }
        // Agar same entered task already present hai list mein to usko add hone se rokne ka //logic
        if(Task.includes(Inputvalue))
        {
            alert("Task is already in List")
        }
        else{
            setTask((prev)=>[...prev,Inputvalue]);
        }
        setInputvalue('')
    }
    // Time and Date

    useEffect(() => {
        const interval = setInterval(()=>{
            const now = new Date()
            const FormateDate = now.toLocaleDateString();
            const FormateTime = now.toLocaleTimeString();
            setDateTime(`${FormateDate} - ${FormateTime}`)
        }, 1000)
    
      return () => {clearInterval(interval)}
    }, [])
    

    

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='pt-5 text-3xl font-bold'>TODO-LIST</h1>
      <h1 className=' text-2xl font-bold'>{DateTime}</h1>
      <section>
        <form onSubmit={handleFormSubmit}>
          <div className='flex gap-4'>
            <input onChange={(e)=>{setInputvalue(e.target.value)}} value={Inputvalue} className='border p-3 rounded-2xl' type='text' placeholder='Enter Task' autoComplete='off'/>
            <button className='border px-5 rounded-xl active:scale-95' type='submit'>CREATE</button>
          </div>
        </form>
      </section>
        <div className='scrolldiv border w-150 h-100 p-5 rounded-3xl overflow-y-scroll'>
            <div>
                {Task.map((e,idx)=>{
                    return <div className='flex justify-between px-10 py-2 items-center bg-slate-200 rounded-3xl text-black mb-5 w-full '>
                        <h1 className='text-xl font-semibold break-all w-100' key={idx}>{e}</h1>
                        <MdDelete className='text-xl cursor-pointer hover:scale-110 active:scale-95' />
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Header
