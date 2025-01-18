import React from "react";
import LandingFooter from "../../components/landingpage/LandingFooter";
import LandingHero from "../../components/landingpage/LandingHero";

import Benefits from "../../components/subcategory/Benefits";
import Testimonial from "../../components/subcategory/Testimonial";
import Services from "../../components/landingpage/Services";
import Category from "../../data/courses";
import Benefit from "../../components/landingpage/Benefit";
import hero1 from "../../assets/Group 15.webp";
import bg from "../../assets/holisticBg.webp";
import Doctordetail from "../../components/landingpage/Doctordetail";
const Landingpage3 = ({ categoryId, programId }) => {
  console.log(Category[0].programs[1]);
  const benefits = Category[2].programs[0].benefits;
  const testimonials = Category[2].programs[0].testimonials;
  console.log(testimonials);

  const heroHeading="HOLISTIC GENERAL WELLNESS"
const description="Holistic  Wellness Sessions : Reconnect with your Mind, Body, and Soul through a transformative program designed for all."

  return (
    <div className="bg-white p-0">
      <LandingHero hero1={hero1}  bg={bg} heroHeading={heroHeading}  description={description}/>
      <div className="bg-slate-50 flex flex-col-reverse sm:flex-col">
      <Doctordetail  color="#97E86B"/>
      <Services />
      </div>
      
      <Benefit benefits={benefits} />
      <Testimonial testimonials={testimonials} color="#97E86B" />
      <LandingFooter />
    </div>
  );
};

export default Landingpage3;
