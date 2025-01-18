import React from "react";

const LandingHero = ({hero1,bg,heroHeading,description}) => {
  return (
    <div
      className="flex relative   lg:-mt-40 flex-col bg-white min-w-screen h-[730px] lg:h-[700px] sm:flex-row min-h-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white w-full  sm:w-1/2 px-4 z-10 sm:px-6 flex flex-col justify-around py-0 sm:py-00">
        {/* Left Section - Text Content */}
        <div className=" text-left   pt-16 md:pt-24">
          <h1 className=" text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-6">
           {heroHeading}
          </h1>
          <p className="text-center sm:text-left text-lg lg:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative sm:w-1/2  pt-4 sm:pt-36 flex items-center justify-center">
        <img
          src={hero1}
          alt="Man illustration"
          className="w-[500px]  object-cover sm:object-cover  "
          style={{ maxHeight: "" }}
        />
      </div>
    </div>
  );
};

export default LandingHero;
