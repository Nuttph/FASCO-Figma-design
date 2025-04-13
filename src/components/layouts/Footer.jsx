import React from 'react'
import Container from './Container'

//logo
import fasgoLogo from "../../assets/logo/FASCO.svg"
const Footer = () => {
  return (
    <div className='border-t border-[#DEDFE1]'>
        <Container>
            <div className='flex
            flex-col gap-4
            md:flex-row md:gap-0 justify-between items-center py-[25px]'>
                <div className='w-[100px]'>
                    <img src={fasgoLogo} alt="fasgoLogo" />
                </div>
                <ul className='flex  duration-300 flex-wrap
                text-[14px] gap-[25px] flex-col w-full
                sm:flex-row sm:w-fit
                lg:text-[16px] lg:gap-[50px]'>
                    <li><a href='/' className='text-shadow-lg '>Support Center</a></li>
                    <li><a href='/' className='text-shadow-lg '>Invoicing</a></li>
                    <li><a href='/' className='text-shadow-lg '>Contract</a></li>
                    <li><a href='/' className='text-shadow-lg '>Careers</a></li>
                    <li><a href='/' className='text-shadow-lg '>Blog</a></li>
                    <li><a href='/' className='text-shadow-lg '>FAQ,s</a></li>
                </ul>
            </div>
            <div className='text-center py-[20px]'>
                Copyright © 2022 FASCO . All Rights Reseved.
            </div>
        </Container>
    </div>
  )
}

export default Footer