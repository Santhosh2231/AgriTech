import React from 'react'
import  content  from '../utils/content'

const AboutMe = () => {
  const {about} = content;
  return (
    <section id="about">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {/* {services.title} */} About me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          My Self
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
        
            <div
            //   key={i}
              data-aos="fade-up"
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              {/* <img src={content.logo} alt="..." className="mx-auto" /> */}
              <h6 className="my-3">{about.content}
</h6>
            </div>
       
        </div>
      </div>
    </section>
  )
}

export default AboutMe