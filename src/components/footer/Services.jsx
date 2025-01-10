import React from "react";

const Services = () => {
  const services = [
    "Yoga",
    "Detox",
    "Meditation",
    "Diet",
    "Mens Health",
    "Womens's Health",
    
  ];

  return (
    <div className="w-full text-center sm:text-left py-6 px-2 md:px-2">
      <h2 className=" text-black font-bold text-md mb-4 text-[28px]">Services</h2>
      <div className="flex flex-col gap-2">
        {services.map((service, index) => (
          <p className=" text-[18px]  text-[#1F1F1FB2] underline  underline-offset-2  " key={index}>{service}</p>
        ))}
      </div>
    </div>
  );
};

export default Services;
