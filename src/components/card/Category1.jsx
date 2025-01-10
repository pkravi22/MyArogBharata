import React from "react";
import Card from "./Card";
import ArrowLine from "../arrow/ArrowLine";

const Category = ({ title, programs }) => {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-3  justify-center gap-4 " id="services">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold  text-gray-800 mb-4">{title}</h2>
        <div>
        <ArrowLine/>
      </div>
      </div>
      
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 sm:mx-16  gap-4 sm:grid-cols-2   ">
          {programs.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;