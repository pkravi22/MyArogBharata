import React from "react";
import benefitpic from "../../assets/benefit.webp";
import ArrowLine from "../arrow/ArrowLine";

const Benefit = ({ benefits }) => {
  console.log(benefits.length);
  return (
    <section className=" py-8 md:py-24 z-50 bg-bgBlue border border-gray-200">
      <div className="px-4 sm:px-8 md:px-16 py-8">
        <h3 className="text-2xl font-bold mb-2">Key Features and Benefits</h3>
       
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="flex flex-col sm:flex-row flex-wrap  auto-rows-fr   px-2 sm:px-2 justify-center items-center mx-auto gap-4 ">
          {benefits.map((benefitObj, index) => (
            <div
              key={index}
              className="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4  flex flex-row rounded-md gap-2 h-full  border"
            >
              <div key={index} className="bg-white h-full  flex   rounded-md gap-6 p-2  ">
                <img
                  src={benefitObj.urlImage}
                  alt={benefitObj.benefit}
                  className=" w-[100px] rounded-sm object-cover "
                />
                <div>
                <span className=" text-sm">{benefitObj.benefit}</span>
                </div>
                
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefit;
