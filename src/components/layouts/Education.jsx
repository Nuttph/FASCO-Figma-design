import React, { useState } from 'react'
import { SlBookOpen } from "react-icons/sl";
import { FaCaretSquareDown } from "react-icons/fa";
const Education = () => {
    const [isOpen,setOpen] = useState(false)
  return (
    <div className='duration-300
    right-[20px] bottom-[20px]
    sm:right-[40px] sm:bottom-[40px]
    lg:right-[50px] lg:bottom-[50px] fixed z-20 flex flex-col items-end'>
        <button onClick={()=>{setOpen(!isOpen)}} className='border rounded-full p-3 bg-[#ffdf5148] cursor-pointer hover:bg-[#ffdf518c] duration-300 w-fit'>
            <SlBookOpen className=' duration-300
            w-[20px] h-[20px]
            sm:w-[30px] sm:h-[30px]'/>
        </button>
        <div className={`
        fixed w-full ${isOpen ? "h-[150px]":"h-[00px]"} transition-all duration-300 bg-[#333333e7] right-0 bottom-0
            
        `}>
            <div className={`flex flex-row items-end justify-end relative ${!isOpen && "hidden"}`}>
                <button onClick={()=>{setOpen(false)}} className='absolute top-[-20px] bg-white border-white text-[#c4c144] border p-2 rounded-l-2xl'>
                    <FaCaretSquareDown className=' duration-300
                    w-[30px] h-[30px]
                    lg:w-[45px] lg:h-[45px]'/>
                    </button>
            </div>
            <div className={`duration-300
                text-[10px] px-[5px]
                sm:text-[16px] sm:px-[50px]
                md:text-[17px] md:px-[100px]
                lg:text-[20px] lg:px-[150px]
                ${isOpen ? "opacity-100":"opacity-0"} h-full flex items-center justify-center `}>
                <p className='text-white'>This website is created for educational purposes only. All assets are used under their respective licenses, and no commercial use is intended.</p>
            </div>
        </div>
    </div>
  )
}

export default Education