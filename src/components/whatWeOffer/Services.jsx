import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../card/CategoryCard";
import ArrowLine from "../arrow/ArrowLine";

const Services = ({ categories }) => {
  console.log(categories);
  return (
    <div className="bg-blue-50  py-2 px-2 sm:py-16  " id="offerings">
      {categories.map((category, idx) => (
        <div
          key={category.title}
          id={category.id}
          className="grid gap-4 px-6 py-12 border-t-2  grid-cols-1 justify-center lg:grid-cols-3   md:flex   "
        >
          <div className="flex flex-col  w-full md:w-1/4  px-4">
            <h2 className=" text-3xl md:text-4xl font-bold  text-gray-800 mb-2">
              {category.title}
            </h2>
            <div>
              <ArrowLine className=" w-[100px] md:w-[150px] ml-8" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:mx-6 gap-5 lg:grid-cols-2 auto-rows-fr w-full md:w-3/4">
            {category.programs.map((program, index) => (
              <CategoryCard
                className="h-full" // Ensure cards stretch to match the tallest card
                features={program.features}
                key={program.title}
                title={program.title}
                description={program.description}
                subtitle={program.subtitle}
                imageSrc={program.imageSrc}
                categoryId={idx}
                programId={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
