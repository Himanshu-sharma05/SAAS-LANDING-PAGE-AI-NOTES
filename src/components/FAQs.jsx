import { div } from 'framer-motion/client'
import React, { useState } from 'react'

function FAQs() {
  return (
    <div className='h-full flex flex-col justify-center px-5 md:px-20 text-white bg-linear-to-b from-[#061212] to-[#0E2E2E] pb-30'>
        <div className="heading  md:text-center text-4xl md:text-[8.5vh] tracking-tight font-[Poppins] font-semibold">
            Frequently Asked Questions
        </div>
        <div className="subheading md:text-center text-lg md:text-xl leading-[40px] mt-6">
        <p>The most commonly asked questions about NoteFlow.</p>
        <p>Have any other questions? Chat with our expert tech team</p>
        </div>
        <div className='hidden md:flex md:flex-row gap-3 md:mt-8 md:mx-110 mb-30'>
            <Button1 text={"General"} />
            <Button1 text={"Pricing"} />
            <Button1 text={"Features"} />
            <Button1 text={"Integrations"} />

        </div>

        <div className='mx-auto mt-10 md:mt-0 flex gap-5 flex-col px-5 w-full h-full'>
            <Question question={"What is noteflow?"} index={1} icon={"/Images/Note.png"} answer={"NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly."} />
            <Question question={"How does NoteFlow use AI to enhance note-taking?"} index={2} icon={"/Images/magicicon.png"} answer={"NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly."} />
            <Question question={"Can NoteFlow be used for team collaboration?"} index={3} icon={"/Images/Socialicon.png"} answer={"NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly."} />
            <Question question={"Can I access NoteFlow on multiple devices?"} index={4} icon={"/Images/cloudicon.png"} answer={"NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly."} />
            <Question question={"Is my data secure with NoteFlow?"} index={5} icon={"/Images/secureicon.png"} answer={"NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly."} />
        </div>

    </div>
  )
}

const Button1 = ({text})=>{
    return(<div>
        <button className='Question p-5 py-2 active:bg-[#57E8E9] border-2 border-white px-auto rounded-3xl active:text-black font-light'>{text}</button>
    </div>)
}

const Question = ({question,icon,answer,index})=>{
    const [closed,setClosed] = useState(true);
    const handleAnswer = ()=>{
        const answer = document.querySelector(`.answer${index}`);
        if(closed){
            answer.classList.remove("max-h-0");
            setClosed(false)
        }else{
            answer.classList.add("max-h-0");
            setClosed(true);
        }
        
    }
    return(<div>
    <div onClick={handleAnswer} className='flex justify-between md:w-full md:px-60 items-center hover:cursor-pointer'>
        <div className='flex gap-5 items-center'>
            <img src = {icon} alt="" />
            <div className='text-xl font-semibold font-Poppins'>{question}</div>
        </div>
        <div className="arrow-icon">
            {closed? <svg className='arrow-down' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.0601 21.0801L24.0001 28.1201L16.9401 21.0801" stroke="#ECFCFD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> : <svg className='arrowup' width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9399 25.7287L23.9999 19.1489L31.0599 25.7287" stroke="#ECFCFD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
        




        </div>
    </div>
    <div className = {"text-gray-300 max-h-0 overflow-hidden  md:px-80 mt-5 " + `${" answer"+ index}`}  >
        {answer}
    </div>
    </div>)
}

export default FAQs