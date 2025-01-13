import React from "react";
import men from "../../assets/Man.png";
import clouds from "../../assets/clouds.png";
import wave from "../../assets/wave.svg";

const LandingHero = () => {
  return (
    <div className="flex relative  flex-col-reverse">
      <svg
        viewBox="0 0 1440 320"
        width="100%"
        height="100%"
        className="transform rotate-180 -mt-2"
      >
        <path
          fill="#262C38"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,67,320,57,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="bg-[#262C38] text-white px-2 z-10 sm:px-6 flex flex-col lg:flex-row items-center justify-center py-24 ">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-center sm:text-left text-4xl lg:text-5xl font-bold mb-6">
            MEN'S SEXUAL HEALTH
          </h1>
          <p className="text-center sm:text-left text-lg lg:text-xl leading-relaxed">
            Male Wellness Sessions: Reconnect with your Mind, Body, and Soul
            through a transformative program designed for men.
          </p>
        </div>

        {/* Right Section - Illustration */}
        <div className="lg:w-1/2 mt-10 mx-1  lg:mt-0 relative text-blue-400">
          {/* Image */}
          <div className="w-96 sm:w-full mt-32 flex justify-center">
            <img
              src={men} // Replace with the image URL
              alt="Man illustration"
              className="h-64 lg:h-80 object-contain"
            />
          </div>

          {/* Thought Bubbles */}
          <div className="absolute top-36 sm:top-32 rotate-45 right-0 lg:right-20">
            <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
            <p className="absolute inset-0 text-wrap px-2 flex items-center justify-center text-xs sm:text-sm text-center">
              Excessive Nightfall
            </p>
          </div>

          <div className="absolute bottom-8 -right-0 lg:right-10">
            <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
            <p className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-center">
              Hello Program
            </p>
          </div>

          <div className="absolute bottom-48 left-2 sm:bottom-56 sm:right-0 lg:right-96">
            <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
            <p className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-center">
              Calm Mind
            </p>
          </div>

          <div className="absolute bottom-12 rotate-45   left-2 sm:right-0 lg:right-96">
            <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
            <p className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-center">
              Wellness
            </p>
          </div>

          {/* Top */}
          <div className="absolute top-8 sm:top-0 rotate-12 right-28 lg:right-56">
            <img src={clouds} alt="cloud" className="w-[120px] sm:w-[150px]" />
            <p className="absolute inset-0 pl-8 w-[100px] flex items-center justify-center text-sm text-center">
              Transformative Care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
