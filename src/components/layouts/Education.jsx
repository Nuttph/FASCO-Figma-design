import React, { useState } from 'react'
import { SlBookOpen } from "react-icons/sl";
import { FaCaretSquareDown } from "react-icons/fa";
const Education = () => {
    const [isOpen,setOpen] = useState(false)
  return (
    <div className='right-[50px] bottom-[50px] fixed z-20 flex flex-col items-end'>
        <button onClick={()=>{setOpen(!isOpen)}} className='border rounded-full p-3 bg-[#ffdf5148] cursor-pointer hover:bg-[#ffdf518c] duration-300 w-fit'>
            <SlBookOpen className='w-[30px] h-[30px]'/>
        </button>
        <div className={`fixed w-full ${isOpen ? "h-[150px]":"h-[00px]"} transition-all duration-300 bg-[#333333e7] right-0 bottom-0
            
        `}>
            <div className={`flex flex-row items-end justify-end relative ${!isOpen && "hidden"}`}>
                <button onClick={()=>{setOpen(false)}} className='absolute top-[-20px] bg-white border-white text-[#c4c144] border p-2 rounded-l-2xl'><FaCaretSquareDown className='w-[45px] h-[45px]'/></button>
            </div>
            <div className={`${isOpen ? "opacity-100":"opacity-0"} h-full flex items-center justify-center text-[20px]`}>
                <p className='text-white'>This website is created for educational purposes only. All assets are used under their respective licenses, and no commercial use is intended.</p>
            </div>
        </div>
    </div>
  )
}

export default Education