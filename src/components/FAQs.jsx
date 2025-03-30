import { div } from 'framer-motion/client'
import React from 'react'

function FAQs() {
  return (
    <div className='h-[100vh] flex flex-col justify-center px-20 text-white bg-linear-to-b from-[#061212] to-[#0E2E2E]'>
        <div className="heading text-center text-[8.5vh] tracking-tight font-[Poppins] font-semibold">
            Frequently Asked Questions
        </div>
        <div className="subheading text-center text-xl leading-[40px] mt-6">
        <p>The most commonly asked questions about NoteFlow.</p>
        <p>Have any other questions? Chat with our expert tech team</p>
        </div>
        <div className='flex gap-3 mt-8 mx-110 mb-30'>
            <Button1 text={"General"} />
            <Button1 text={"Pricing"} />
            <Button1 text={"Features"} />
            <Button1 text={"Integrations"} />

        </div>

        <div className='mx-auto px-5 w-full'>
            <Question question={"What is noteflow?"} icon={"/Images/Note.png"} answer={"NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly."} />
        </div>

    </div>
  )
}

const Button1 = ({text})=>{
    return(<div>
        <button className='Question p-5 py-2 active:bg-[#57E8E9] border-2 border-white px-auto rounded-3xl active:text-black font-light'>{text}</button>
    </div>)
}

const Question = ({question,icon,answer})=>{

    return(<div>
    <div onClick={handleAnswer} className='flex justify-between w-full px-60 items-center hover:cursor-pointer'>
        <div className='flex gap-5 items-center'>
            <img src = {icon} alt="" />
            <div className='text-xl font-semibold font-Poppins'>{question}</div>
        </div>
        <div className="arrow-icon">
        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9399 25.7287L23.9999 19.1489L31.0599 25.7287" stroke="#ECFCFD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    </div>
    <div className="answer overflow-hidden max-h-0 transition duration-500 ease-in-out px-80 mt-5">
        {answer}
    </div>
    </div>)
}

export default FAQs