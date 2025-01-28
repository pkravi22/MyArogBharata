import React from 'react'
import Registration from '../../components/Webinar/Registration'
import HeroWebinar from '../../components/Webinar/HeroWebinar'
import Feedback from '../../components/Webinar/Feedback'
import Services from '../../components/landingpage/Services'

import Category from "../../data/courses";

import Joiners from '../../components/Webinar/Joiners'
import Benefits from '../../components/Webinar/Benefits'
import Testimonial from '../../components/Webinar/Testimonial'
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
        <h1>Webinar</h1>
        <HeroWebinar/>
        <div className='flex flex-col mb-8 gap-4 bg-[#5097D1] px-16'>
        <Feedback/>
        <Registration/>
        <div className='my-16'><Services className="bg-blue-700"/></div>
        
        <Registration/>
        <Joiners joiners={joiners} />
        <Registration/>
        <Benefits benefits={benefits} />
        
        </div>
        <Testimonial testimonials={testimonials}/>
       
    </div>
  )
}

export default Webinar