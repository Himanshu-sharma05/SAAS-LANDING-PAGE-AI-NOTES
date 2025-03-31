import React from 'react'
import Header from './components/Header'
import Logo from './components/Logo'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {
  return (
    <div className='bg-black'>
      <Header/>
      <Logo/>
      <Features/>
      <FAQs/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App