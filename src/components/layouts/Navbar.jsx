import React, { useState } from "react";
import Container from "./Container";
import { PiShirtFoldedDuotone } from "react-icons/pi";
// logo
import fascoLogo from "../../assets/logo/FASCO.svg"
const Navbar = () => {
    const [isOpen,setOpen] = useState(false);
  return (
    <Container>
        <nav className="xl:py-[30px] py-[20px] duration-300 flex flex-col gap-2 md:flex-row justify-between items-center relative">
            <div className="sm:w-[150px] flex flex-row justify-between w-full items-center">
                <img src={fascoLogo} alt="fascoLogo" />
                <div className="sm:hidden" onClick={()=>{
                    setOpen(!isOpen)
                }}><PiShirtFoldedDuotone className="w-[40px] h-[40px] cursor-pointer"/></div>
            </div>
            <div className={`${isOpen ? "":"opacity-0"}
            max-sm:absolute max-sm:top-[80px] max-sm:z-10
            max-sm:bg-gradient-to-r from-[#ededed] via-orange-100 to-pink-100 max-sm:w-full p-4 sm:items-center 
            sm:opacity-100 flex flex-col sm:flex-row font-poppins lg:gap-[64px] gap-[20px] duration-300 text-[13px] lg:text-[16px] `}>
                <ul className="flex flex-col sm:flex-row lg:gap-[50px] gap-[30px] duration-300">
                    <li className="text-shadow-lg"><a href="/">Home</a></li>
                    <li className="text-shadow-lg"><a href="/">Deals</a></li>
                    <li className="text-shadow-lg"><a href="/">New Arrivals</a></li>
                    <li className="text-shadow-lg"><a href="/">Packages</a></li>
                    <li className="text-shadow-lg"><a href="/">Sign in</a></li>
                </ul>
                <button className="bg-black rounded-lg text-white text-[15px] lg:text-[20px] px-4 py-2 shadow-lg shadow-black-500/50 duration-300">
                    <a href="/">Sign up</a>
                </button>
            </div>
        </nav>
    </Container>
);
};

export default Navbar;
