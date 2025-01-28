import React from "react";
import benefitpic from "../../assets/benefit.webp";
import ArrowLine from "../arrow/ArrowLine";

const Benefits = ({ benefits }) => {
  console.log(benefits.length);
  return (
    <section className="py-8  md:py-12 z-50">
      <div className="px-4 sm:px-8 md:px-16 py-4 sm:py-8">
        <h3 className="text-2xl text-white text-center md:text-4xl font-bold mb-2">KEY FEATURES & BENEFITS FROM WORKSHOP </h3>
        
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="flex flex-col sm:flex-row flex-wrap auto-rows-fr px-4 sm:px-2 justify-center items-center mx-auto gap-6">
        {benefits.map((benefitObj, index) => {
            const [beforeColon, afterColon] = benefitObj.benefit.split(":");
            return (
              <div
                key={index}
                className="bg-white w-full sm:w-1/2 md:w-5/12 lg:w-[30%] flex flex-row rounded-lg gap-2 h-full border  shadow-md"
              >
                <div className="bg-white h-full flex rounded-md gap-3 p-2">
                  <img
                    src={benefitObj.urlImage}
                    alt={benefitObj.benefit}
                    className="w-[100px] rounded-sm object-contain"
                  />
                  <div className="flex-1 overflow-hidden">
                    <span className="text-base break-words">
                      <span className="font-semibold">{beforeColon}:</span>
                      <span className="font-normal">{afterColon}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
