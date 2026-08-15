import React from 'react'
import Header from './Header'
import { useState } from 'react';
const TodoForm = (todoForm) => {
    const [Inputvalue, setInputvalue] = useState('');

    
  return (
    <section>
        <form onSubmit={handleFormSubmit}>
            <div className='flex gap-4'>
                <input onChange={(e)=>{setInputvalue(e.target.value)}} value={Inputvalue} className='border p-3 rounded-2xl' type='text' placeholder='Enter Task' autoComplete='off'/>
                <button className='border px-5 rounded-xl active:scale-95' type='submit'>CREATE</button>
            </div>
        </form>
    </section>
  )
}

export default TodoForm
