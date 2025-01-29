import React from "react";
import { FaClock } from "react-icons/fa";
import ArrowLine from "../arrow/ArrowLine";
import alarm from "../../assets/alarm.png";
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
    <div className="bg-blue-50  py-6 sm:py-10  px-4 sm:px-16 flex flex-col ">
      <div className=" mb-8 flex flex-col sm:flex-row sm:gap-80 lg:gap-96 gap-4  justify-start sm:items-center py-4">
        <div className="flex flex-col  gap-1">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 ">Timings</h2>
          <ArrowLine className="w-[80px] md:w-[100px] ml-8" />
        </div>

        <p className="text-black  font-bold  text-xl sm:text-2xl px-2">
          Multiple Batches (join as per convenience)
        </p>
      </div>

      {/* Morning Timings */}
      <div className="bg-white shadow-md  w-full lg:w-9/12 flex  flex-col sm:flex-row justify-center items-center mx-auto gap-4 sm:gap-12 rounded-lg px-4 py-6 mb-6">
        <h3 className="text-2xl my-auto font-semibold text-gray-800 bg-[#FFFDF1] inline-block px-4 py-2 rounded-md">
          Morning
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 justify-between gap-8  sm:gap-8   mt-4">
          {morningBatches.map((time, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img src={alarm} alt="alarm" className="w-10 " />
              <span className="text-gray-800 text-xl leading-none font-bold">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Evening Timings */}
      <div className="bg-white shadow-md  w-full lg:w-9/12 flex  flex-col sm:flex-row justify-center items-center mx-auto gap-4 sm:gap-12 rounded-lg p-6 mb-6">
        <h3 className="text-2xl my-auto font-semibold text-gray-800 bg-[#FFFDF1] inline-block px-4 py-2 rounded-md">
          Evening
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 justify-between gap-8 sm:gap-8    mt-4">
          {eveningBatches.map((time, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img src={alarm} alt="alarm" className="w-10 " />
              <span className="text-gray-800 text-xl leading-none font-bold">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timings;
