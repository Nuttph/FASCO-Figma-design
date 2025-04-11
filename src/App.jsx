import React from 'react'
import Navbar from './components/layouts/Navbar'
import Promote from './components/Home/Promote'
import Footer from './components/layouts/Footer'
import Partner from './components/Home/Partner'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Promote/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default App