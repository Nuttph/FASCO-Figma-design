import React from 'react'
import Container from '../layouts/Container'

//image
import imgMan from "../../assets/promote/man.png"
import imgMan2 from "../../assets/promote/man2.png"
import imgTop from "../../assets/promote/grouptop.png"
import imgBot from "../../assets/promote/groupbot.png"

const Promote = () => {
  return (
    <Container>
        <div className='min-h-screen mt-[50px] flex flex-row justify-between items-center'>
            <div className=''>
                <img src={imgMan} alt="imgMan" className='h-[650px] object-cover rounded-lg' />
            </div>
            <div className='flex flex-col justify-between h-[650px]'>
                <img src={imgTop} alt="imgMan2" className='h-[120px] object-cover rounded-lg' />
                
                <div>
                    <div className='font-medium text-[70px] text-center'>ULTIMATE</div>
                    <div className='font-medium text-[130px] text-center text-white bg-black'>SALE</div>
                </div>

                <img src={imgBot} alt="imgMan2" className='h-[120px] object-cover rounded-lg' />
            </div>
            <div>
                <img src={imgMan2} alt="imgMan2" className='h-[650px] object-cover' />
            </div>
        </div>
    </Container>
  )
}

export default Promote