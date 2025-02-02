import React from 'react'
import Registration from '../../components/Webinar/Registration'
import HeroWebinar from '../../components/Webinar/HeroWebinar'
import Feedback from '../../components/Webinar/Feedback'


import Category from "../../data/courses";

import Joiners from '../../components/Webinar/Joiners'
import Benefits from '../../components/Webinar/Benefits'
import Testimonial from '../../components/Webinar/Testimonial'
import WebinarFooter from '../../components/Webinar/WebinarFooter'
import FAQ from '../../components/Webinar/Faq'
import Services from '../../components/Webinar/Services';
const Webinar = () => {
    console.log(Category[0].programs[1]);
    const benefits = Category[3].programs[0].benefits;
    const joiners = Category[3].programs[0].joiners;
    const testimonials = Category[3].programs[0].testimonials;
    console.log(testimonials);
    const heroHeading="MEN’S SEXUAL HEALTH"
  const description="Male Wellness Sessions : Reconnect with your Mind, Body, and Soul through a transformative program designed for men."
  
    
  return (
    <div>
        
        <HeroWebinar/>
        <div className='flex flex-col mb-8 gap-4 bg-[#5097D1] px-4 md:px-16'>
        <Feedback/>
        
        <div className='my-16'><Services className="bg-blue-700"/></div>
        
       
        <Joiners joiners={joiners} />
        
        <Benefits benefits={benefits} />
        
        </div>

        <Testimonial testimonials={testimonials}/>
        <Registration/>
        <FAQ/>
       <WebinarFooter/>
    </div>
  )
}

export default Webinar