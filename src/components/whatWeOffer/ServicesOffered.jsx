import React, { useState } from "react";





const ServicesOffered = () => {
  const [service, setService] = useState(0);
  return (
    <>
      <div className="relative flex justify-between items-center bg-customBlue text-white py-2 px-0 overflow-hidden h-14 -z-50" id="services">
        <div className="text-lg opacity-86 w-[150px] sm:w-[200px] text-left z-30   px-4 sm:px-16   bg-customBlue ">Offerings</div>

        <div className="flex  justify-between space-x-12 animate-scroll w-full text-xl">
          <span className="whitespace-nowrap">Adhyatma Yog Parichay</span>
          <span className="whitespace-nowrap">Adhyatma Yog Seva</span>
          <span className="whitespace-nowrap">Adhyatma Yog Seva</span>
        </div>
       
      </div>
      
      <DiabetesServices />
      {/*{service == 0 && <DiabetesServices />}
      {service == 1 && <FemaleWellnessServices />}
      {service == 2 && <Holistic />}
      */}
    </>
  );
};

export default ServicesOffered;
