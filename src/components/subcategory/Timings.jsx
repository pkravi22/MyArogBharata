import React from "react";
import { FaClock } from "react-icons/fa";
import ArrowLine from "../arrow/ArrowLine";

const Timings = () => {
  const morningBatches = [
    "5:30 a.m.",
    "6:30 a.m.",
    "7:30 a.m.",
    "8:30 a.m.",
    "9:30 a.m.",
  ];
  const eveningBatches = ["5:00 p.m.", "6:00 p.m.", "7:00 p.m.", "8:00 p.m."];

  return (
    <div className="bg-blue-50 py-10  px-2 sm:px-5 flex flex-col justify-center items-center">
      <div className=" mb-8 flex gap-16  sm:gap-36 md:gap-72 ">
        <div className="flex flex-col  gap-1">
          <h2 className="text-4xl font-bold text-gray-800">Timings</h2>
          <ArrowLine className="w-[100px] md:w-[100px] ml-8" />
        </div>

        <p className="text-black font-bold text-xl">
          Multiple Batches (join as per convenience)
        </p>
      </div>

      {/* Morning Timings */}
      <div className="bg-white shadow-md  w-full sm:w-8/12 flex  flex-col sm:flex-row gap-4 sm:gap-16 rounded-lg p-5 mb-6">
        <h3 className="text-2xl my-auto font-semibold text-gray-800 bg-[#FFFDF1] inline-block px-4 py-2 rounded-md">
          Morning
        </h3>
        <div className="flex   mt-4">
          {morningBatches.map((time, index) => (
            <div key={index} className="flex flex-col gap-1 items-center">
              <FaClock className="text-red-500 text-xl" />
              <span className="text-gray-800">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Evening Timings */}
      <div className="bg-white shadow-md w-full sm:w-8/12  flex flex-col sm:flex-row gap-4 sm:gap-16  rounded-lg p-5">
        <h3 className="text-2xl my-auto font-semibold text-gray-800 bg-[#FFFDF1] inline-block px-4 py-2 rounded-md">
          Evening
        </h3>
        <div className="  flex  flex-row gap-4 sm:gap-16  mt-4">
          {eveningBatches.map((time, index) => (
            <div key={index} className="flex flex-col items-center">
              <FaClock className="text-red-500 text-xl" />
              <span className="text-gray-800">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timings;
