import React from 'react'

const Footer = () => {
  return (
    <div className='h-[50vh] flex justify-between text-white bg-gradient-to-b to-[#0E2E2E]  from-[#061212] px-20 '>
        <div>
        <div className='logo flex gap-3 text-white font-[Poppins] font-bold text-[24px]'>
            <img src="/Images/Icon.png" alt="" />
            <p>NoteFlow</p>
        </div>
        </div>

        <div className="right-nav flex gap-25">
            <div className="first">
                <div className="heading font-[Poppins] font-semibold text-xl">
                    Home
                </div>
                <div className='flex mt-7 flex-col gap-5 font-light text-xl text-gray-200'>
                <a href="">FAQ</a>
                <a href="">Features</a>
                <a href="">Companies</a>
                <a href="">Testimonials</a>
                </div>
            </div>
            <div className="first">
                <div className="heading font-[Poppins] font-semibold text-xl">
                    Pricing
                </div>
                <div className='flex mt-7 flex-col gap-5 font-light text-xl text-gray-200'>
                <a href="">Plans</a>
                <a href="">Billing</a>
                <a href="">Free Trials</a>
                <a href="">Refunds</a>
                </div>
            </div>
            <div className="first">
                <div className="heading font-[Poppins] font-semibold text-xl">
                    About
                </div>
                <div className='flex mt-7 flex-col gap-5 font-light text-xl text-gray-200'>
                <a href="">Careers</a>
                <a href="">Our story</a>
                <a href="">Contact</a>
                <a href="">Policy</a>
                </div>
            </div>
            <div className="first">
                <div className="heading font-[Poppins] font-semibold text-xl">
                    Community
                </div>
                <div className='flex mt-7 flex-col gap-5 font-light text-xl text-gray-200'>
                <a href="">Forum</a>
                <a href="">Stories</a>
                <a href="">Blog</a>
                <a href="">Support</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer