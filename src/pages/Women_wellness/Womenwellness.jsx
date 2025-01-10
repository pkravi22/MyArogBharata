import React from "react";
import WomenProgram from "./components/WomenProgram";
import WomenHero from "./components/WomenHero";
import Join from "../../components/join/Join";
import Footer from "../../components/footer/Footer";
import FAQ from "../../components/faq/Faq";

const Womenwellness = () => {
  return (
    <div id="women">
      <WomenHero />
      <WomenProgram />
      <Join />
      <FAQ/>
      
    </div>
  );
};

export default Womenwellness;
