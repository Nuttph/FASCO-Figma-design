import React from 'react'

//image
import man from "../../assets/Contact/leftman.png"
import woman from "../../assets/Contact/rightwoman.png"
import Container from '../layouts/Container'
const Subscibe = () => {
  return (
    <div>
        <Container>
            <div className='flex flex-row items-center justify-center'>

                <div>
                    <img src={man} alt="man" />
                </div>
                <div className='flex flex-col w-[450px] gap-4'>
                    <div className='font-volkhov text-[30px] text-[#484848]'>Subscribe To Our Newsletter</div>
                    <div className='bg-white shadow-2xl text-[12px] p-4 flex flex-col gap-8 text-[#8A8A8A]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                        <div className='pt-6 text-[20px]'>michael@ymail.com</div>
                    </div>
                    <div className='text-center'>
                    <button className="w-[150px] mt-4 py-2 text-white bg-black rounded-lg cursor-pointer">
                        View More  
                    </button>
                    </div>
                </div>
                <div>
                    <img src={woman} alt="man" />
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default Subscibe