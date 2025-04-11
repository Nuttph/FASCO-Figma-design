import React from 'react'
import Container from '../layouts/Container'

//logo band
import chanel from "../../assets/logo/chanel.png"
import louis from "../../assets/logo/louis_vuitton.png"
import prada from "../../assets/logo/prada.png"
import calvin from "../../assets/logo/calvin_klein.png"
import denim from "../../assets/logo/denim.png"
const Partner = () => {
    const partner = [
        {
            title:"chanel",
            logo:chanel
        },
        {
            title:"louis vuitton",
            logo:louis
        },
        {
            title:"prada",
            logo:prada
        },
        {
            title:"calvin klein",
            logo:calvin
        },
        {
            title:"denim",
            logo:denim
        },
    ]
  return (
    <Container>
        <div className='flex flex-row items-center justify-between mb-10'>
            {partner.map((item,index)=>(
                <div key={index}>
                    <img src={item.logo} alt={item.title} className='w-[140px]' />
                </div>
            ))}
        </div>
    </Container>
  )
}

export default Partner