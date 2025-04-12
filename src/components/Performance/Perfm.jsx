import React from 'react'

//logo
import logo1 from "../../assets/performance/icon1.png"
import logo2 from "../../assets/performance/icon.png"
import logo3 from "../../assets/performance/Vector.png"
import logo4 from "../../assets/performance/suport.png"
import Container from '../layouts/Container'

const Perfm = () => {
    const performance = [
        {
            title:"High Quality",
            des:"crafted from top materials",
            logo:logo1
        },
        {
            title:"Warrany Protection",
            des:"Over 2 years",
            logo:logo2
        },
        {
            title:"Free Shipping",
            des:"Order over 150 $",
            logo:logo3
        },
        {
            title:"24 / 7 Support",
            des:"Dedicated support",
            logo:logo4
        },
    ]
  return (
    <div className='duration-300 bg-[#f1f1f1] py-[25px] lg:py-[40px]'>
        <Container>
            <div className='flex flex-wrap items-start sm:items-center sm:flex-row flex-col justify-start md:justify-between gap-2'>
            {performance.map((item,index)=>(
                <div key={index} className='duration-300 flex flex-row gap-3 items-center'>
                    <div>
                        <img src={item.logo} alt={item.logo} className='w-[30px] sm:w-[25px] lg:w-[35px]' />
                    </div>
                    <div className='flex flex-col text-[#484848]'>
                        <h1 className='text-[16px] sm:text-[12px] md:text-[15px] font-medium'>{item.title}</h1>
                        <p className='text-[13px] sm:text-[10px] md:text-[12px]'>{item.des}</p>
                    </div>
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default Perfm