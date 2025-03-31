import React from 'react'

function Logo() {
  return (
    <div className='h-full bg-linear-to-b from-[#0E2E2E] to-[#061212] pt-10 pb-20'>
        <div className="title mt-10 md:mt-0 text-xl text-white text-center font-light">
            Organizations powered by <span className='font-bold'>NoteFlow</span>
        </div>
        <div className="logos flex justify-around md:justify-normal md:flex-col gap-5 md:gap-12 md:mt-20">
            <div className="row1 flex flex-col md:flex-row scale-60 md:scale-100 gap-30 md:gap-5 md:justify-between md:px-20 ">
                <img  src="/Images/Netflix.png" alt="" /><img src="/Images/Exxon Mobile.png" alt="" /><img src="/Images/Microsoft.png" alt="" /><img src="/Images/Vice.png" alt="" />
            </div>
            <div className="row2 flex flex-col md:flex-row scale-60 md:scale-100 gap-30 md:gap-5 md:justify-between md:px-20 ">
                <img src="/Images/Walmart.png" alt="" /><img src="/Images/Chase.png" alt="" /><img src="/Images/VISA.png" alt="" /><img src="/Images/Amazon.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Logo