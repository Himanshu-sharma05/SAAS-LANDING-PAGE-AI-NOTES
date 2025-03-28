import React from 'react'

function FAQs() {
  return (
    <div className='h-[100vh] px-20 text-white bg-linear-to-b from-[#061212] to-[#0E2E2E]'>
        <div className="heading text-center text-[8.5vh] tracking-tight font-[Poppins] font-semibold">
            Frequently Asked Questions
        </div>
        <div className="subheading text-center text-xl leading-[40px] mt-6">
        <p>The most commonly asked questions about NoteFlow.</p>
        <p>Have any other questions? Chat with our expert tech team</p>
        </div>
        <div className='flex gap-3 mt-8 mx-90'>
            <Button1 text={"General"} />
            <Button1 text={"Pricing"} />
            <Button1 text={"Features"} />
            <Button1 text={"Integrations"} />

        </div>

    </div>
  )
}

const Button1 = ({text})=>{
    return(<div>
        <button className='p-5 py-2 active:bg-[#57E8E9] border-2 border-white px-auto rounded-3xl active:text-black font-light'>{text}</button>
    </div>)
}

export default FAQs