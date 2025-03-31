import React from 'react'
import Header from './components/Header'
import Logo from './components/Logo'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Testimonials from './components/Testimonials'
function App() {
  return (
    <div className='bg-black'>
      <Header/>
      <Logo/>
      <Features/>
      <FAQs/>
      <Testimonials/>
    </div>
  )
}

export default App