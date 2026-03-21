import React,{useState} from 'react'
import "./index.css"
const App = () => {
  const [isOn, setIsOn] = useState(false)

  function handleToggleSwitch(){
    setIsOn(!isOn)
  }
  return (
    <div>
       <div className={isOn ? "flex items-center justify-center h-screen bg-black" : "flex items-center justify-center h-screen bg-gray-100"}>
        <div onClick={handleToggleSwitch} className={isOn ? "w-14 h-7 flex items-center rounded-full p-1 bg-green-500 cursor-pointer" : "w-14 h-7 flex items-center rounded-full p-1 bg-gray-500 cursor-pointer"}>
          <div className={isOn ? "bg-white w-5 h-5 rounded-full shadow-md translate-x-7 flex justify-center items-center text-[10px] transition-all" : "bg-white w-5 h-5 rounded-full shadow-md translate--7 flex justify-center items-center text-[10px] transition-all"}>
          {isOn ? "ON" : "OFF"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
