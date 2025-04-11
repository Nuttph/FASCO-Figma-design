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
    <div className='bg-[#f1f1f1] py-[40px]'>
        <Container>
            <div className='flex items-center justify-between'>
            {performance.map((item,index)=>(
                <div key={index} className='flex flex-row gap-3 items-center'>
                    <div>
                        <img src={item.logo} alt={item.logo} />
                    </div>
                    <div className='flex flex-col text-[#484848]'>
                        <h1 className='text-[15px] font-medium'>{item.title}</h1>
                        <p className='text-[12px]'>{item.des}</p>
                    </div>
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default Perfm