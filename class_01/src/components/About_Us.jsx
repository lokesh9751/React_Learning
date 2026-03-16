import React from 'react'
import Hover_button from './Hover_button'
import { GiTennisCourt } from "react-icons/gi";

function About_Us() {
  return (
    <div>
        <div className='flex justify-between'>
            <button className='border-gray-300 border-solid border rounded-[20px]  pl-3 pr-3 cursor-pointer size-fit'>About Us</button>
            <p className='w-110 text-left text-zinc-950 font-semibold'>At Horizon, we don't just play tennis - we live it. Since 2021,our club has a home for players of all levels, from eager beginners to seasoned pros.</p>
        </div>
        <div className='mt-10 mb-90 flex justify-around'>
            <div className='flex flex-col gap-10 bg-slate-950 text-white p-8 rounded-[20px] h-[300px] w-[300px]'>
                <GiTennisCourt style={{color:"white" , fontSize:"30px"}}/>
                <p>Professional hard courts <span className='text-zinc-500'>with tournament-grade lighting & climate control - play in</span> perfect conditions, in any season.</p>
                <div className='flex justify-between'>
                    <div className='flex justify-around items-center gap-5'>
                        <div className='relative w-18 h-8 rounded-[20px] bg-cyan-500'>
                            {/* <div className='absolute right-0 translate-y-[30%] -translate-x-[40%] bg-white w-6 h-5'></div> */}
                            <div className='cursor-pointer absolute right-0 translate-y-[80%] -translate-x-[100%] outline-6 rounded-[50%] w-3 h-3'></div>
                        </div>
                        <h5 className='text-zinc-500'>Game Mode</h5>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 bg-slate-950 text-white p-8 rounded-[20px] h-[300px] w-[300px]'>
                <GiTennisCourt style={{color:"white" , fontSize:"30px"}}/>
                <p>Professional hard courts <span className='text-zinc-500'>with tournament-grade lighting & climate control - play in</span> perfect conditions, in any season.</p>
                <div className='flex justify-between'>
                    <div className='flex justify-around items-center gap-5'>
                        <div className='relative w-18 h-8 rounded-[20px] bg-cyan-500'>
                            {/* <div className='absolute right-0 translate-y-[30%] -translate-x-[40%] bg-white w-6 h-5'></div> */}
                            <div className='cursor-pointer absolute right-0 translate-y-[80%] -translate-x-[100%] outline-6 rounded-[50%] w-3 h-3'></div>
                        </div>
                        <h5 className='text-zinc-500'>Game Mode</h5>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-10 bg-slate-950 text-white p-8 rounded-[20px] h-[300px] w-[300px]'>
                <GiTennisCourt style={{color:"white" , fontSize:"30px"}}/>
                <p>Professional hard courts <span className='text-zinc-500'>with tournament-grade lighting & climate control - play in</span> perfect conditions, in any season.</p>
                <div className='flex justify-between'>
                    <div className='flex justify-around items-center gap-5'>
                        <div className='relative w-18 h-8 rounded-[20px] bg-cyan-500'>
                            {/* <div className='absolute right-0 translate-y-[30%] -translate-x-[40%] bg-white w-6 h-5'></div> */}
                            <div className='cursor-pointer absolute right-0 translate-y-[80%] -translate-x-[100%] outline-6 rounded-[50%] w-3 h-3'></div>
                        </div>
                        <h5 className='text-zinc-500'>Game Mode</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_Us