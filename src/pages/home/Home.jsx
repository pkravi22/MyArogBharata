import React from "react";
import Hero from "../../components/heroHomepage/Hero";
import About from "../../components/about/About";
import Join from "../../components/join/Join";
import FAQ from "../../components/faq/Faq";
import ServicesOffered from "../../components/whatWeOffer/ServicesOffered";
import Category from "../../components/card/Category";
import Category1 from "../../components/card/Category1";

const Home = ({categories}) => {
  return (
    <div >
      <Hero/>
      <div className="container mx-auto px-4 py-8 bg-[#EFF8FF] max-w-[1920px]">
        {categories.map((category, index) => (
          <Category1 key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
