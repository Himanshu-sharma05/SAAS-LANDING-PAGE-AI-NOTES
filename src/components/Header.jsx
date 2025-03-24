import React from 'react'
function Header() {
  return (
    <div className='relative bg-linear-to-b from-[#061212] to-[#0E2E2E] p-10 h-[100vh]'>
        <Navigation/>
        <HeroSection/>
    </div>
  )
}

const Navigation = ()=>{
    return(<>
        <div className="flex p-5  text-white pt-2 px-10 justify-between items-center  gap-5 ">
            <div className='logo flex gap-3'>
            <img src="/Images/Icon.png" alt="" />
            <p>NoteFlow</p>
            </div>

            <div className='flex links gap-5'>
                <a href="">Home</a>
                <a href="">Pricing</a>
                <a href="">About</a>
                <a href="">Community</a>
            </div>

            <div className='buttons flex gap-2'>
                <button className='p-3 px-6 bg-black border-2 border-white text-white rounded-3xl'>Login</button>
                <button className='p-3 shadow-lg shadow-[#0E2E2E] px-6 bg-[#44E5E7] text-black rounded-3xl'>Get Started</button>
            </div>
        </div>
    </>)
}

const HeroSection = ()=>{
    return(<div className='mt-20 p-10 flex justify-between'>
    
    <div className="left text-white w-[700px] ">
        <div className="heading font-[Poppins] font-semibold leading-[75px] tracking-tighter text-[60px] font-weight-600">
        AI-Powered Notes.
Organize and Summarize in Seconds

        </div>
        <div className="para mt-3 leading-[40px] font-thin">
        Let AI organize & summarize your notes, <br/>
        saving you time and boosting productivity
        </div>
        <button className='mt-3 -ml-2 p-3 shadow-lg shadow-[#0E2E2E] px-6 bg-[#44E5E7] text-black rounded-3xl'>Get Started</button>
    </div>
    <div className="right w-[400px]  h-[480px]">
        <img src="/Images/Hero Graphic.png" alt="" />
    </div>
    </div>)
}

export default Header