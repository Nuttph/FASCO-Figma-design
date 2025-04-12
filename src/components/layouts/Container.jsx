import React from 'react'
const Container = ({children}) => {
  return (
    <div className='xl:px-[200px] sm:px-[50px] px-[15px] duration-300 relative'>
        {children}
    </div>
  )
}

export default Container