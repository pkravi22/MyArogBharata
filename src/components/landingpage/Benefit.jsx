import React from "react";
import benefitpic from "../../assets/benefit.webp";
import ArrowLine from "../arrow/ArrowLine";

const Benefit = ({ benefits }) => {
  console.log(benefits.length);

  return (
    <section className="py-2 md:py-8 z-50 bg-white">
      <div className="px-4 sm:px-8 md:px-16 py-4 sm:py-12">
        <h3 className="text-2xl text-center sm:text-start font-bold mb-1">Key Features and Benefits</h3>
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="flex flex-col sm:flex-row flex-wrap auto-rows-fr px-2 sm:px-2 justify-center items-center mx-auto gap-4">
          {benefits.map((benefitObj, index) => {
            const [beforeColon, afterColon] = benefitObj.benefit.split(":");
            return (
              <div
                key={index}
                className="bg-white w-full sm:w-1/2 md:w-5/12 lg:w-[30%] flex flex-row rounded-md gap-2 h-full border border-[#9c9a9a] shadow-md"
              >
                <div className="bg-white h-full flex rounded-md gap-6 p-2">
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

export default Benefit;
