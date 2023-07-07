import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className='h-screen'>
    <Header/>
    <div className='px-8 pt-[104px] md:px-10 w-full'>
    <Hero/>
    <About/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
