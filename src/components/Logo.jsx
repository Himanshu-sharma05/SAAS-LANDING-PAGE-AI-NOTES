import React from 'react'

function Logo() {
  return (
    <div className='h-full bg-linear-to-b from-[#0E2E2E] to-[#061212] pt-10 pb-20'>
        <div className="title text-white text-center font-light">
            Organizations powered by <span className='font-bold'>NoteFlow</span>
        </div>
        <div className="logos flex flex-col gap-12 mt-20">
            <div className="row1 flex  gap-5 justify-between px-20 ">
                <img  src="/Images/Netflix.png" alt="" /><img src="/Images/Exxon Mobile.png" alt="" /><img src="/Images/Microsoft.png" alt="" /><img src="/Images/Vice.png" alt="" />
            </div>
            <div className="row2 flex gap-5 justify-between px-20 ">
                <img src="/Images/Walmart.png" alt="" /><img src="/Images/Chase.png" alt="" /><img src="/Images/VISA.png" alt="" /><img src="/Images/Amazon.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Logo