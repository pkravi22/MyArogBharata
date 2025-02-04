import React from "react";
import LandingFooter from "../../components/landingpage/LandingFooter";
import LandingHero from "../../components/landingpage/LandingHero";

import Benefits from "../../components/subcategory/Benefits";
import Testimonial from "../../components/subcategory/Testimonial";
import Services from "../../components/landingpage/Services";
import Category from "../../data/courses";
import Benefit from "../../components/landingpage/Benefit";
import hero2 from "../../assets/Group 14.webp";


import bg from "../../assets/femaleBg.webp";
import Doctordetail from "../../components/landingpage/Doctordetail";
const Landingpage2 = ({ categoryId, programId }) => {
  console.log(Category[0].programs[1]);
  const benefits = Category[1].programs[0].benefits;
  const testimonials = Category[1].programs[0].testimonials;
  console.log(testimonials);

const heroHeading="Female wellness"
const description="Female Wellness Sessions : Reconnect with your Mind, Body, and Soul through a transformative program designed for women"


  return (
    <div className="bg-white p-0">
      
      <LandingHero hero1={hero2}  bg={bg} heroHeading={heroHeading}  description={description}/>
      <div className="bg-slate-50 flex flex-col-reverse sm:flex-col">
      <Doctordetail  color="#FFDDFD"/>
      <Services/>

      </div>
      
      <Benefit benefits={benefits} />
      <Testimonial testimonials={testimonials} color="#FFDDFD" />
      <LandingFooter />
    </div>
  );
};

export default Landingpage2;
