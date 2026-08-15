import { useEffect } from "react";
import React,{useState} from 'react'
import { MdDelete } from "react-icons/md";
import TodoForm from "./TodoForm";

const Header = () => {

    const [Task, setTask] = useState([]);
    const [DateTime, setDateTime] = useState('')

    function handleFormSubmit(e){
        e.preventDefault()
        // Agar kisi ne kuch nhi daala input pe
        if(Inputvalue === ''){
            return ;
        }
        // Agar same entered task already present hai list mein to usko add hone se rokne ka //logic
        if(Task.includes(Inputvalue)){
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
    
    // Delete List
    function HandleDeletetodo(e){  
      const deleteTask = Task.filter((currList)=>{return currList != e})  
      setTask(deleteTask)
    }

    // Clear List
  function HandleDeleteall(){
    const deleteAllTask = Task.filter(()=>{})
    setTask(deleteAllTask)
  }
    

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='pt-5 text-3xl font-bold'>TODO-LIST</h1>
      <h1 className=' text-2xl font-bold'>{DateTime}</h1>
      <TodoForm todoForm={handleFormSubmit}/>
        <div className='scrolldiv border w-150 h-85 p-5 rounded-3xl overflow-y-scroll'>
            <div>
                {Task.map((e,idx)=>{
                    return <div className='flex justify-between px-10 py-2 items-center bg-slate-200 rounded-3xl text-black mb-5 w-full '>
                        <h1 className='text-xl font-semibold break-all w-100' key={idx}>{e}</h1>
                        <MdDelete onClick={()=>{HandleDeletetodo(e)}} className='text-xl cursor-pointer hover:scale-110 active:scale-95' />
                    </div>
                })}
            </div>
        </div>
        <button onClick={()=>{HandleDeleteall()}} className='border -mt-2 px-5 py-3 rounded-xl active:scale-95'>CLEAR ALL</button>
    </div>
  )
}

export default Header
