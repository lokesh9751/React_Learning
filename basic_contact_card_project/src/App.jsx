import React , {useState} from 'react'
import Front_face from './components/Front_face'
import Input_front from './components/Input_front'
function App(props) {

  const [getValue, setgetValue] = useState('');
  const [Occupation, setOccupation] = useState('')

  const [data , setData ] = useState({})
  
  const [allData , setAllData] = useState([]);

  return (
    <div>
      <div className='h-screen'>
        <h1 className='heading text-3xl pt-5 pl-5 tracking-wide'>CONTACT CARD GENERATOR</h1>
        <div className='flex flex-col w-full items-center'>
          <Input_front putOccupation={Occupation} setputOccupation={setOccupation} getValue={getValue} setgetValue={setgetValue} data={data} setData={setData} allData={allData} setAllData={setAllData}/>
          <div className='flex w-full flex-wrap'>
            <Front_face putOccupation={Occupation} getValue={getValue} data={data} setData={setData} allData={allData} setAllData={setAllData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App