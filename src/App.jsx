import React from 'react'
import Navbar from './components/layouts/Navbar'
import Promote from './components/Home/Promote'
import Footer from './components/layouts/Footer'
import Partner from './components/Home/Partner'
import HeroCarousel from './components/About/HeroCarousel'
import NewArrivals from './components/About/NewArrivals'

const App = () => {
  return (
    <div className='flex flex-col font-poppins'>
      <Navbar/>
      <Promote/>
      <Partner/>
      <HeroCarousel/>
      <NewArrivals/>
      <Footer/>
    </div>
  )
}

export default App