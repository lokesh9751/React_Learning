import React,{useState} from 'react'

function App() {

  const [Value, setValue] = useState('');
  const [Array1, setArray1] = useState([]);

  const SubmitHandler = (e)=>
  {
    e.preventDefault();
    
    const newusers = [...Array1];
    newusers.push(Value);
    setArray1(newusers);
    console.log(newusers);
    setValue('')
    
  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input value={Value} onChange={(e)=>{setValue(e.target.value)}} className='p-2 border-1 m-2' placeholder='Enter Something'/>
        <button type='submit'>SUBMIT</button>
      </form>
      {Array1.map((e)=>{
        return <h1 >{e}</h1>
      })}
    </div>
  )
}

export default App