import React from "react";
import men from "../../assets/Man.png";
import clouds from "../../assets/clouds.png";

const LandingHero = () => {
  return (
    <div className="bg-[#313643] text-white  px-2 sm:px-6 flex flex-col lg:flex-row items-center justify-center py-24">
      {/* Left Section - Text Content */}
      <div className="lg:w-1/2 text-left">
        <h1 className=" text-center text-4xl lg:text-5xl font-bold mb-6">
          MEN'S SEXUAL HEALTH
        </h1>
        <p className=" text-center text-lg lg:text-xl leading-relaxed">
          Male Wellness Sessions: Reconnect with your Mind, Body, and Soul
          through a transformative program designed for men.
        </p>
      </div>

      {/* Right Section - Illustration */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
        {/* Image */}
        <div className="w-96 sm:w-full mt-32 flex justify-center">
          <img
            src={men} // Replace with the image URL
            alt="Man illustration"
            className="h-64 lg:h-80 object-contain"
          />
        </div>

        {/* Thought Bubbles */}
        <div className="absolute  top-36 sm:top-24 rotate-45 right-0 lg:right-18">
          <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
          <p className="absolute inset-0 text-wrap px-2 flex items-center justify-center text-xs sm:text-sm text-center">
            Excessive Nightfall
          </p>
        </div>

        <div className="absolute bottom-8 -right-2 lg:right-10">
          <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
          <p className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-center">
            Hello Program
          </p>
        </div>

        <div className="absolute  bottom-48 sm:bottom-56   sm:right-0 lg:right-96">
          <img src={clouds} alt="cloud" className=" w-[120px] sm:w-[150px]" />
          <p className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-center">
            Calm Mind
          </p>
        </div>

        <div className="absolute bottom-12 rotate-45    sm:right-0 lg:right-96">
          <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
          <p className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-center">
            Wellness
          </p>
        </div>

        {/* Top */}
        <div className="absolute  top-8 sm:top-0 rotate-12 right-28 lg:right-56">
          <img src={clouds} alt="cloud" className=" w-[120px] sm:w-[150px]" />
          <p className="absolute inset-0  pl-8 w-[100px] flex items-center justify-center text-sm text-center">
            Transformative Care
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
