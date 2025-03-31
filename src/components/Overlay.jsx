import React, { useState } from 'react'

const Overlay = () => {
    
    const closeOverlay = ()=>{
        document.querySelector(".overlay").classList.add("hidden")
    }
  return (
    <div  className='overlay hidden w-full h-[100vh] bg-transparent backdrop-blur-[5px] absolute inset-0'>
        <div className="login-form flex w-[820px] h-[570px] mx-auto mt-30">
            <div className="left rounded-l-3xl bg-[#0E2E2E] h-full w-1/2 pt-20 pb-20 ">
                <div className="heading text-white font-[Poppins] text-3xl font-bold text-center flex justify-center mt-20">
                    Lets Get you <br/> signed Up
                </div>
                <div className="content text-white font-[Poppins] font-thin text-center mt-5">
                No charges, no fees. Get note <br/> taking in minutes!
                </div>
            </div>
            <div className="right rounded-r-3xl relative bg-[#071717] h-full w-1/2 ">
                <img onClick={closeOverlay} className='absolute right-5 top-5 hover:cursor-pointer' src="/Images/crossicon.png" alt="" />
                <form className="form mt-30 px-10">
                    <div className='flex flex-col gap-2'>
                    <label className='text-white font-[Poppins] font-semibold' htmlFor="Email">Email</label>
                    <input placeholder='Enter your Email' className='Email bg-white border-white border-2 rounded-xl w-80 px-5 py-3 ' type="email" />
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                    <label className='text-white font-[Poppins] font-semibold' htmlFor="Password">Password</label>
                    <input placeholder='' className='Password bg-white border-white border-2 rounded-xl w-80 px-5 py-3 ' type="password" />
                    </div>
                    <div className='text-gray-100 font-thin mt-35 flex gap-2 justify-center mb-4'>
                        <input type="checkbox" />
                        <div>
                        I Agree to all the terms & conditions
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                <button className='hover:cursor-pointer p-3 shadow-lg  px-6 bg-[#44E5E7] text-black rounded-3xl w-50 '>Get Started</button>
                       
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Overlay