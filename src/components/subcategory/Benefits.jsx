import React from "react";
import benefitpic from "../../assets/benefit.webp";
import ArrowLine from "../arrow/ArrowLine";

const Benefits = ({ benefits }) => {
  console.log(benefits.length);
  return (
    <section className=" py-8 md:py-24 z-50 bg-bgBlue border border-gray-200">
      <div className="px-16 py-8">
        <h3 className="text-2xl font-bold mb-2">Key Features and Benefits</h3>
        <ArrowLine className="w-[200px] ml-8" />
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr   px-4 sm:px-16 justify-center items-center mx-auto gap-8 ">
          {benefits.map((benefitObj, index) => (
            <div
              key={index}
              className="bg-white  flex rounded-md gap-8 h-full  border"
            >
              <li key={index} className="bg-white h-full  flex rounded-md gap-6 p-4  ">
                <img
                  src={benefitObj.urlImage}
                  alt={benefitObj.benefit}
                  className=" w-[100px] rounded-sm object-cover "
                />
                <span className=" text-sm">{benefitObj.benefit}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
