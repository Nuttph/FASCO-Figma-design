import React from "react";
import Container from "./Container";

// logo
import fascoLogo from "../../assets/logo/FASCO.svg"
const Navbar = () => {
  return (
    <Container>
        <nav className=" py-[30px] flex flex-row justify-between items-center">
            <div className="w-[150px]">
                <img src={fascoLogo} alt="fascoLogo" />
            </div>
            <div className="flex flex-row font-poppins gap-[64px] text-[16px] items-center">
                <ul className="flex flex-row gap-[50px]">
                    <li className="text-shadow-lg"><a href="/">Home</a></li>
                    <li className="text-shadow-lg"><a href="/">Deals</a></li>
                    <li className="text-shadow-lg"><a href="/">New Arrivals</a></li>
                    <li className="text-shadow-lg"><a href="/">Packages</a></li>
                    <li className="text-shadow-lg"><a href="/">Sign in</a></li>
                </ul>
                <button className="bg-black rounded-lg text-white text-[20px] px-4 py-2 shadow-lg shadow-black-500/50">
                    <a href="/">Sign up</a>
                </button>
            </div>
        </nav>
    </Container>
);
};

export default Navbar;
