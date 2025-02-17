import React from "react";
import ArrowLine from "../arrow/ArrowLine";

import Registration from "./Registration";

// Default props to ensure joiners is an empty array by default
const Joiners = ({ joiners }) => {
  // Ensure that joiners is an array before proceeding
  const validJoiners = Array.isArray(joiners) ? joiners : [];

  const problems = validJoiners.length > 0 ? validJoiners[0].problem : [];

  console.log(problems);

  return (
    <>
      <div className="py-4 md:py-4">
        {validJoiners.length > 0 && (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl  w-full md:w-[60%] text-center font-bold text-gray-1 text-white py-8">
              WHO SHOULD ATTEND THIS MENS SEXUAL WELLNESS WORKSHOP
            </h2>
          </div>
        )}

        {/* Ensure problems is an array before rendering */}
        {problems.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2  bg-[#5097D1] gap-4 
          pb-8 md:pb-16 justify-center  mx-auto px-1 md:px-4"
          >
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white flex p-1 md:p-2  w-full md:w-[500px] rounded-md border shadow"
              >
                <img
                  src={problem.url}
                  alt={problem.altText || "Problem Image"}
                  className=" w-1/3 md:w-[120px]  rounded-t-sm "
                />
                <div className="flex flex-col pl-2">
                  <p className="py-1 px-1 text-xl font-bold text-start truncate">
                    {problem.shortDescription}
                  </p>
                  <h1 className="text-md text-start px-1">
                    {problem.moreDetails}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No problems to display</p>
          </div>
        )}
      </div>
      <div>
        <Registration/>
      </div>
    </>
  );
};

export default Joiners;
