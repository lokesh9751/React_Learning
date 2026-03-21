import React,{useState} from 'react'
import Card from './components/Card'
import Card_Input from './components/Card_Input'
function App() {
  const [Name, setName] = useState('')
  return (
    <div >
      <Card_Input Name={Name} setName={setName}/>
      <Card Name={Name}/>
    </div>
  )
}

export default App