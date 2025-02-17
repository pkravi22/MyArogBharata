import React from "react";
import LandingFooter from "../../components/landingpage/LandingFooter";
import LandingHero from "../../components/landingpage/LandingHero";


import Testimonial from "../../components/subcategory/Testimonial";
import Services from "../../components/landingpage/Services";
import Category from "../../data/courses";
import Benefit from "../../components/landingpage/Benefit";
import hero1 from "../../assets/Group 13.webp";
import bg from "../../assets/Bgvector1.png";
import Doctordetail from "../../components/landingpage/Doctordetail";

const LandingPage1 = ({ categoryId, programId }) => {
  console.log(Category[0].programs[1]);
  const benefits = Category[0].programs[1].benefits;
  const testimonials = Category[0].programs[1].testimonials;
  console.log(testimonials);
  const heroHeading="MEN’S SEXUAL HEALTH"
const description="Male Wellness Sessions : Reconnect with your Mind, Body, and Soul through a transformative program designed for men."

  
  return (
    <div className="bg-white p-0">
      <LandingHero hero1={hero1}  bg={bg} heroHeading={heroHeading}  description={description}/>
      <div className="bg-slate-50 flex flex-col-reverse pt-16 pb-4 sm:flex-col">
      <Doctordetail  color="#5097D1"/>
      <Services />
      </div>
      
      <Benefit benefits={benefits} />
      <Testimonial testimonials={testimonials} color="#5097D1" />
      <LandingFooter />
    </div>
  );
};

export default LandingPage1;
