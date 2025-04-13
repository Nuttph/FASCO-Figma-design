import React from 'react'

//image
import man from "../../assets/Contact/leftman.png"
import woman from "../../assets/Contact/rightwoman.png"
import Container from '../layouts/Container'
const Subscibe = () => {
  return (
    <div className='py-[70px]'>
        <Container>
            <div className='flex 
            flex-col-reverse
            sm:flex-row items-center justify-center'>

                <div className='max-sm:order-1'>
                    <img src={man} alt="man" className='max-w-[200px] sm:w-full' />
                </div>
                <div className='flex flex-col max-w-[450px] '>
                    <div className='font-volkhov duration-300 text-[#484848]
                    text-[20px] gap-1
                    sm:gap-4
                    lg:text-[25px]'>Subscribe To Our Newsletter</div>

                    <div className=' bg-white shadow-2xl text-[12px] p-4 flex flex-col gap-8 text-[#8A8A8A]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                        <div className='pt-6 text-[20px]'>michael@ymail.com</div>
                    </div>

                    <div className='text-center'>
                        <button className="w-[150px] mt-4 py-2 text-white bg-black rounded-lg cursor-pointer">
                            View More  
                        </button>
                    </div>
                </div>
                <div className=''>
                    <img src={woman} alt="woman" className='max-w-[200px] sm:w-full' />
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default Subscibe