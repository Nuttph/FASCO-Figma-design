import React from 'react'

//img
import ig1 from "../../assets/Contact/ig/ig1.png"
import ig2 from "../../assets/Contact/ig/ig2.png"
import ig3 from "../../assets/Contact/ig/ig3.png"
import ig4 from "../../assets/Contact/ig/ig4.png"
import ig5 from "../../assets/Contact/ig/ig5.png"
import ig6 from "../../assets/Contact/ig/ig6.png"
import ig7 from "../../assets/Contact/ig/ig7.png"

const Instagram = () => {
    const ig_props = [ig1,ig2,ig3,ig4,ig5,ig6,ig7]
  return (
    <div className='flex flex-col items-center pt-[50px]'>
        <div className='text-volkhov text-[40px]'>Follow Us On Instagram</div>
        <p className='text-center w-[600px] text-[14px] text-[#8A8A8A] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        <div className='flex flex-row items-center py-[100px]'>
            {ig_props.map((item,index)=>(
                <div key={index} className='shadow-lg'>
                    <img src={item} alt={item} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Instagram