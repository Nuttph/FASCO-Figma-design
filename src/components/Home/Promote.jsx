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
        <div className='min-h-screen mt-[50px] flex flex-col lg:flex-row justify-between items-center gap-2 mb-[50px]'>
            <div className=''>
                <img src={imgMan} alt="imgMan" className='lg:h-[650px] lg:w-full h-[500px] w-[70vw] object-cover rounded-lg' />
            </div>
            <div className='flex flex-col justify-between h-[650px] lg:w-full w-[70vw]'>
                <img src={imgTop} alt="imgMan2" className='h-[120px] object-cover rounded-lg' />
                
                <div>
                    <div className='font-medium text-[70px] text-center text-[#484848] h-[50px]'>ULTIMATE</div>
                    <div className='stock-black h-[200px]'>SALE</div>
                    <div className='text-[#484848] text-[20px] text-center'>NEW COLLECTION</div>
                    <div className='flex items-center justify-center mt-5'>
                        <button className='bg-black text-white px-4 py-2 rounded-lg text-[20px] cursor-pointer'>
                            SHOW NOW
                        </button>
                    </div>
                </div>

                <img src={imgBot} alt="imgMan2" className='h-[120px] object-cover rounded-lg lg:w-full w-[70vw]' />
            </div>
            <div>
                <img src={imgMan2} alt="imgMan2" className='lg:h-[650px] h-[500px] object-cover lg:w-full w-[70vw]' />
            </div>
        </div>
    </Container>
  )
}

export default Promote