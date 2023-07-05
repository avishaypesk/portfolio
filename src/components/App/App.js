import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className='h-screen w-screen'>
    <div className='px-8 md:px-10'>
    <Header/>
    <Hero/>
    <About/>
    <Footer/>
    </div>
    </div>
  )
}

export default App
