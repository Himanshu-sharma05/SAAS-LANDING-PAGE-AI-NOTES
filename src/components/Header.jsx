
import React, { useState } from 'react'
function Header() {
  return (
    <div className='relative bg-linear-to-b from-[#061212] to-[#0E2E2E] p-5 pt-10 md:p-10 h-full'>
        <Navigation/>
        <HeroSection/>
        <SocialProof/>
    </div>
  )
}

const Navigation = ()=>{
    const handleOverlay = ()=>{
        document.querySelector(".overlay").classList.remove("hidden");
    }
    return(<>
        <div className="flex p-5 z-1  text-white pt-2 px-5 lg:px-10 justify-between items-center  gap-5 ">
            <div className='logo flex gap-3'>
            <img src="/Images/Icon.png" alt="" />
            <p className='text-2xl font-bold'>NoteFlow</p>
            </div>

            <div className='hidden lg:flex links gap-5'>
                <a href="">Home</a>
                <a href="">Pricing</a>
                <a href="">About</a>
                <a href="">Community</a>
            </div>

            <div className='hidden buttons lg:flex gap-2'>
                <button onClick={handleOverlay} className='p-3 px-6 bg-black border-2 border-white text-white rounded-3xl'>Login</button>
                <button className='p-3 shadow-lg shadow-[#0E2E2E] px-6 bg-[#44E5E7] text-black rounded-3xl'>Get Started</button>
            </div>
            <div className='lg:hidden cursor-pointer'>
            <svg width="34" height="34" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83301 11.6666H8.16634C10.4997 11.6666 11.6663 10.5 11.6663 8.16665V5.83331C11.6663 3.49998 10.4997 2.33331 8.16634 2.33331H5.83301C3.49967 2.33331 2.33301 3.49998 2.33301 5.83331V8.16665C2.33301 10.5 3.49967 11.6666 5.83301 11.6666Z" stroke="#DAFAFA" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.833 11.6666H22.1663C24.4997 11.6666 25.6663 10.5 25.6663 8.16665V5.83331C25.6663 3.49998 24.4997 2.33331 22.1663 2.33331H19.833C17.4997 2.33331 16.333 3.49998 16.333 5.83331V8.16665C16.333 10.5 17.4997 11.6666 19.833 11.6666Z" stroke="#DAFAFA" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.833 25.6666H22.1663C24.4997 25.6666 25.6663 24.5 25.6663 22.1666V19.8333C25.6663 17.5 24.4997 16.3333 22.1663 16.3333H19.833C17.4997 16.3333 16.333 17.5 16.333 19.8333V22.1666C16.333 24.5 17.4997 25.6666 19.833 25.6666Z" stroke="#DAFAFA" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83301 25.6666H8.16634C10.4997 25.6666 11.6663 24.5 11.6663 22.1666V19.8333C11.6663 17.5 10.4997 16.3333 8.16634 16.3333H5.83301C3.49967 16.3333 2.33301 17.5 2.33301 19.8333V22.1666C2.33301 24.5 3.49967 25.6666 5.83301 25.6666Z" stroke="#DAFAFA" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
        </div>
    </>)
}

const HeroSection = ()=>{
    return(<div className='mt-20 md:p-10 p-5 flex flex-col md:flex-row justify-between'>
    
    <div className="left text-white lg:w-[50.14vw] ">
        <div className="heading mt-15 md:mt-0 font-[Poppins] font-semibold leading-[50px] md:leading-[75px] tracking-tighter text-[45px] md:text-[60px] font-weight-600">
        AI-Powered Notes.
Organize and Summarize in Seconds

        </div>
        <div className="para mt-5 md:mt-3 leading-[30px] md:leading-[40px] font-thin">
        Let AI organize & summarize your notes, <br/>
        saving you time and boosting productivity
        </div>
        <button className='mt-5 md:mt-3 -ml-2 p-3 shadow-lg shadow-[#0E2E2E] px-6 bg-[#44E5E7] text-black rounded-3xl'>Get Started</button>
    </div>
    <div className="right w-[320px] mt-5 md:mt-0 md:w-[400px]  md:h-[480px]">
        <img src="/Images/Hero Graphic.png" alt="" />
    </div>
    </div>)
}

const SocialProof = ()=>{
    return(<div className='flex flex-col md:flex-row gap-5 px-10 -mt-5'>
        <div className="headshots ">
            <img className='md:w-25 w-35 mt-9 md:mt-0' src="/Images/Headshots.png" alt="Headshots" />
        </div>
        <div className="info text-white">
            Trusted by <span className='text-[#44E5E7] font-bold'>12,653</span> productivity junkies
        </div>
    </div>)
}


export default Header