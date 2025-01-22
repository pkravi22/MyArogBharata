import React from "react";
import benefitpic from "../../assets/benefit.webp";
import ArrowLine from "../arrow/ArrowLine";

const Benefits = ({ benefits }) => {
  console.log(benefits.length);
  return (
    <section className="py-8  md:py-12 z-50 bg-blue-50 border border-gray-200">
      <div className="px-4 sm:px-8 md:px-16 py-4 sm:py-8">
        <h3 className="text-2xl md:text-4xl font-bold mb-2">Key Features and Benefits</h3>
        <ArrowLine className="w-[300px] md:w-[450px] ml-8" />
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="flex flex-col sm:flex-row flex-wrap auto-rows-fr px-4 sm:px-2 justify-center items-center mx-auto gap-6">
          {benefits.map((benefitObj, index) => (
            <div
              key={index}
              className="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-[30%] flex flex-row rounded-md gap-4 h-full border"
            >
              <div className="bg-white h-full flex flex-row rounded-md gap-3 p-2">
                <img
                  src={benefitObj.urlImage}
                  alt={benefitObj.benefit}
                  className="w-[120px] rounded-sm object-contain"
                />
                <div className="flex-1 overflow-hidden">
                  <span className="text-sm break-words">{benefitObj.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
