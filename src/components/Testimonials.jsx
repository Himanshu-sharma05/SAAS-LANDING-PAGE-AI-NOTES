import { span } from 'framer-motion/client';
import { div } from 'framer-motion/m';
import React, { useState } from 'react'

const Testimonials = () => {
    const [opened,setOpened] = useState(true);
    const toggleTestimonials = ()=>{
        setOpened((prev)=> !prev)
    }
  return (
    <div className='h-full overflow-x-hidden pb-40 flex flex-col items-center gap-10 pt-40  text-white bg-gradient-to-b to-[#061212] from-[#0E2E2E]'>
         <button className='p-3 shadow-lg shadow-[#0E2E2E] w-fit px-6 bg-[#44E5E7] text-black rounded-3xl'>Testimonials</button>
         <div className="heading text-center text-[8.5vh] leading-[80px] tracking-tight font-[Poppins] font-semibold">
         What our AI-powered<br/> notetakers have to say
                 </div>

                 <div className="subheading text-center text-xl font-light leading-[30px] mt-3">
                 <p>NoteFlow has helped 1000’s supercharge their productivity </p>
                 <p>with cutting edge AI note taking tools</p>
                 </div>

           <div className="testimonial-cards mt-15 flex gap-7 px-20 ">
                <div className="left-layer flex flex-col gap-7 ">
                    <Testimonial text={"NoteFlow has completely transformed the way I manage my work notes. The AI-powered organization feature makes it so easy to find what I need, even weeks after the fact."} name={"Emily Thompson"} position={"senior marketing manager"} profileimg={"/Images/profiles/Emily.png"} rating={5} />
                    <Testimonial text={"The smart organization of my notes is impressive. I used to waste time searching for information, but now NoteFlow does the heavy lifting."} name={"Jonathan Moore"} position={"Software Engineer"} profileimg={"/Images/profiles/Jonathan.png"} rating={4} />
                    {opened ? <Testimonial text={"The AI-driven categorization helps me keep my content ideas organized and searchable, saving me hours every week. Highly recommended!"} name={"Olivia Carter"} position={"Content Strategist"} profileimg={"/Images/profiles/Olivia.png"} rating={5} />
                     : null }
                    {opened ? <Testimonial text={"I can’t say enough about how helpful NoteFlow’s integrations are. Syncing my notes with Google Drive and other apps has streamlined my work processes. It’s helped me stay organized and efficient in an ever-changing environment."} name={"Aaron Mitchell"} position={"Customer Support Lead"} profileimg={"/Images/profiles/Aaron.png"} rating={4} />
                     : null }
                    {opened ? <Testimonial text={"With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine."} name={"Katherine Evans"} position={"Marketing Director"} profileimg={"/Images/profiles/katherine.png"} rating={5} />
                     : null }
                    

                </div>
                <div className="center-layer flex flex-col gap-7 ">
                    <Testimonial text={"As a designer, I need a tool that helps me keep track of brainstorming sessions and project notes. NoteFlow’s voice-to-text transcription is a game-changer, allowing me to capture ideas while on the go. It has boosted my productivity tenfold!"} name={"Michael Carter"}  position={"Product Designer"} profileimg={"/Images/profiles/Micheal.png"} rating={4} />
                    <Testimonial text={"NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized."} name={"Rachel Foster"} position={"Project Manager"} profileimg={"/Images/profiles/Rachel.png"} rating={5} />
                    {opened ? <Testimonial text={"The voice-to-text transcription is incredibly accurate and saves me so much time when documenting meetings. Plus, I love how seamlessly it integrates with tools like Trello and Slack."} name={"Thomas Williams"} position={"UI/UX Designer"} profileimg={"/Images/profiles/Thomas.png"} rating={5} />
                     : null }
                    {opened ? <Testimonial text={"NoteFlow has been a lifesaver for organizing employee notes and meeting summaries. The AI-driven organization automatically categorizes everything, so I no longer have to worry about sorting through piles of documents. It's incredibly intuitive!"} name={"Grace Stevens"} position={"HR manager"} profileimg={"/Images/profiles/Grace.png"} rating={5} />
                     : null }
                    {opened ? <Testimonial text={"With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine."} name={"Lucas King"} position={"CEO"} profileimg={"/Images/profiles/Lucas.png"} rating={5} />
                     : null }
                    

                </div>
                <div className="right-layer flex flex-col gap-7 ">
                    <Testimonial text={"I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so much smoother. The contextual reminders have helped me stay on top of critical deadlines."} name={"Sarah lee"}  position={"Buisness Analyst"} profileimg={"/Images/profiles/Sarah.png"} rating={5} />
                    <Testimonial text={"As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets me capture thoughts while I’m on the move."} name={"Daniel Harris"} position={"Entrepreneur"} profileimg={"/Images/profiles/Daniel.png"} rating={4} />
                    {opened ? <Testimonial text={"I rely heavily on my notes during client calls and follow-ups. The ability to automatically receive reminders based on my notes has made my follow-up process much smoother and more efficient."} name={"Jessica Gonzalez"} position={"Sales Executive"} profileimg={"/Images/profiles/Jessica.png"} rating={4} />
                     : null }
                    {opened ? <Testimonial text={"I’m always jotting down ideas and notes for various writing projects. The voice-to-text feature lets me capture my thoughts while I’m out and about. I love that everything syncs in real-time and is always available when I need it."} name={"Ben turner"} position={"Freelance Writer"} profileimg={"/Images/profiles/Ben.png"} rating={3} />
                     : null }
                    {opened ? <Testimonial text={"NoteFlow's ability to capture and organize my notes in such a detailed yet easy-to-use way has made a huge difference in my creative process. Whether I'm brainstorming or taking project notes, it’s my go-to app for staying organized."} name={"Natalie James"} position={"Graphic Designer"} profileimg={"/Images/profiles/Natalie.png"} rating={5} />
                     : null }
                    

                </div>

                
           </div>
           <div>
            <button onClick={toggleTestimonials} className='p-5 cursor-pointer pl-8 py-2 flex items-center justify-around border-white border-2 rounded-4xl mt-10'> {opened? <div> Show less </div> : <div> Show more </div> } {opened? <div> <svg className='arrowup' width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9399 25.7287L23.9999 19.1489L31.0599 25.7287" stroke="#ECFCFD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>: <div><svg className='arrow-down' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.0601 21.0801L24.0001 28.1201L16.9401 21.0801" stroke="#ECFCFD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div> } 
 
</button>
           </div>
           
    </div>
  )
}

const Testimonial = ({text,profileimg,name,position,rating})=>{
    return(<div className='w-[28vw] h-fit p-7 px-10 pb-10 flex flex-col bg-[#0E2E2E] rounded-3xl'>
        <div className="top">
            <div className="stars mt-4 mb-4">
            <Rating rating={rating}/>
            </div>
            <div className="main text-[18px] text-gray-200 leading-[36px] mt-10 w-[300px]">
                {text}
            </div>

        </div>
        <div className="bottom flex gap-4 mt-10">
            
            <img src={profileimg} alt="" />
            <div className="info">
                <div className="name text-[#7CEDEE] font-[Poppins] font-bold">{name}</div>
                <div className="position text-gray-200">{position}</div>
            </div>
        </div>
    </div>)
}

const Rating = ({rating})=>{
    const stars = [];
    for(let i=0;i< rating;i++){
        stars.push(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z" fill="#DAFAFA" stroke="#DAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            )
    }
    for(let i=0; i< 5-rating;i++){
        stars.push(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7299 3.51014L15.4899 7.03014C15.7299 7.52014 16.3699 7.99014 16.9099 8.08014L20.0999 8.61014C22.1399 8.95014 22.6199 10.4301 21.1499 11.8901L18.6699 14.3701C18.2499 14.7901 18.0199 15.6001 18.1499 16.1801L18.8599 19.2501C19.4199 21.6801 18.1299 22.6201 15.9799 21.3501L12.9899 19.5801C12.4499 19.2601 11.5599 19.2601 11.0099 19.5801L8.01991 21.3501C5.87991 22.6201 4.57991 21.6701 5.13991 19.2501L5.84991 16.1801C5.97991 15.6001 5.74991 14.7901 5.32991 14.3701L2.84991 11.8901C1.38991 10.4301 1.85991 8.95014 3.89991 8.61014L7.08991 8.08014C7.61991 7.99014 8.25991 7.52014 8.49991 7.03014L10.2599 3.51014C11.2199 1.60014 12.7799 1.60014 13.7299 3.51014Z" stroke="#DAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            )
    }

    return(<div className='flex gap-1'>
        {stars.map((star)=>{ return (<div>{star}</div>)})}
    </div>)
}

export default Testimonials