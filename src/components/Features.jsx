import React from 'react'

const Features = () => {
  return (
    <div className='text-white  pt-30 pb-30 bg-[#061212] px-5 md:px-20'>
        <div className="heading text-center text-[45px] md:text-[8.5vh] tracking-tight font-[Poppins] font-semibold mb-[128px]">
            <div className="line1">
                All The Tools You Need To
            </div>
            <div className="line2"><span className='text-[#44E5E7]'>Supercharge </span> Your Note Taking</div>
        </div>
        <Feature title={"Smart Organization"} para={"Automatically categorize and tag your notes using AI-driven analysis. NoteFlow intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most."} url={"/Images/Smart Organization.png"} flexdir={"row"}/>
        <Feature title={"Contextual Reminders"} para={"Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks."} url={"/Images/Contextual Reminders.png"} flexdir={"row-reverse"}/>
    </div>
  )
}

const Feature = ({title,para,url,flexdir})=>{
    return(<div className= {'flex '+ 'md:flex-'+`${flexdir}` + ' flex-col-reverse md:items-center gap-15 md:gap-30 mb-20'}>
        <img className='w-[320px] md:w-[618px] md:h-[718px]' src={url} alt="Images" />
        <div className="featuretext flex flex-col gap-7">
            <div className="title text-3xl md:text-5xl font-[Poppins] font-semibold ">
                {title}
            </div>
            <div className="para max-w-[90%] text-left text-xl leading-[40px] font-light">
                {para}
            </div>
        </div>
    </div>)
}

export default Features