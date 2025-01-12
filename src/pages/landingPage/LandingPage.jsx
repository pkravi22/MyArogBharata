import React from "react";
import LandingFooter from "../../components/landingpage/LandingFooter";
import LandingHero from "../../components/landingpage/LandingHero";
import DoctorDetail from "../../components/landingpage/DoctorDetail";
import Benefits from "../../components/subcategory/Benefits";
import Testimonial from "../../components/subcategory/Testimonial";
import Services from "../../components/landingpage/Services";
import Category from "../../data/courses";
import Benefit from "../../components/landingpage/Benefit";
const LandingPage = ({ categoryId, programId }) => {
  console.log(Category[0].programs[1]);
  const benefits = Category[0].programs[1].benefits;
  const testimonials = Category[0].programs[1].testimonials;
  console.log(testimonials);
  return (
    <div className="bg-white p-1">
      <LandingHero />
      <div className="bg-slate-50 flex flex-col-reverse sm:flex-col">
      <DoctorDetail />
      <Services />
      </div>
      
      <Benefit benefits={benefits} />
      <Testimonial testimonials={testimonials} />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
