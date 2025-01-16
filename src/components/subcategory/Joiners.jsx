import React from "react";
import ArrowLine from "../arrow/ArrowLine";
import benefitpic from "../../assets/exer.webp";

// Default props to ensure joiners is an empty array by default
const Joiners = ({ joiners }) => {
  // Ensure that joiners is an array before proceeding
  const validJoiners = Array.isArray(joiners) ? joiners : [];

  const problems = validJoiners.length > 0 ? validJoiners[0].problem : [];

  console.log(problems);

  return (
    <>
      <div className="border border-gray-1 ">
        {validJoiners.length > 0 && (
          <div className="bg-blue-50  py-8  pt-4 md:pt-12 px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center gap-0 min-w-0">
            <div className="w-full md:w-5/12 py-8">
              <p className="text-2xl md:text-4xl font-bold mb-4">Who Should Join? </p>
              <ArrowLine className=" w-[180px] md:w-[250px]  ml-16 sm:ml-24" />
            </div>
            <div className="w-full md:w-7/12 mt-2">
              <p className="font-bold text-xl">
                Embark on your journey to wellness and confidence—because a
                healthier, happier YOU means a joyful, thriving MOM!
              </p>
            </div>
          </div>
        )}

        {/* Ensure problems is an array before rendering */}
        {problems.length > 0 ? (
          <div className="flex flex-col sm:flex-row flex-wrap px-4 md:px-4 bg-blue-50 gap-6 pb-8 md:pb-28 justify-center mx-auto">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white w-full sm:w-1/4  md:w-1/5 lg:w-1/6 flex gap-2 sm:flex-col flex-row   rounded-md p-4 border shadow"
              >
                <img
                  src={problem.url}
                  alt={problem.altText || "Problem Image"}
                  className="w-[100px] md:w-full object-cover rounded-t-sm bg-white"
                />
                <div className="flex flex-col">
                  <p className="py-1 px-2 text-sm truncate">
                    {problem.shortDescription}
                  </p>
                  <h1 className="text-xs px-2">
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
    </>
  );
};

export default Joiners;
