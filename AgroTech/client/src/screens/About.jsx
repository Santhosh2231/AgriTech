import React from 'react'
import { Link } from 'react-router-dom';
import  content  from '../utils/content'

const About = () => {
  const {aboutus,Experience} = content;
  return (
    <>
    <section id="about">
      <div className="md:container px-5 py-14">
        <h2 className="title md:text-4xl" data-aos="fade-down">About AgroTech</h2>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
        
            <div
              data-aos="fade-up"
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none">

              <h6 className="my-3">{aboutus.content}</h6>
            </div>
       
        </div>
      </div>
    </section>
    <section id="goals">
    <div className="md:container px-5 pt-14 pb-12">
        <h2 className="title" data-aos="fade-down">
          {Experience.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Experience.subtitle}
        </h4>
        <br />

        <div className="flex gap-5 justify-between flex-wrap group">
          {Experience.experience_content.map((content, i) => (
          
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
              "
            >
              <img src={content.logo} alt="..." className="mx-auto h-60 w-60 " />
              <h6 className="my-4 font-bold text-2xl font-Inria">{content.org}</h6>
              <p className="leading-7">{content.title}</p>
              
              <p className="leading-7">{content.work}</p>
              <Link to={content.link}><button className="border-2 text-2xl border-blue-400 m-4 text-white rounded-lg bg-blue-400 p-2">Check this out..</button></Link>
            </div>
           
          ))}
        </div>

        
      </div>
    </section>

    </>
  )
}

export default About