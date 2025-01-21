import React from "react";
import bgImage from "../../assets/bgImage.webp";
const Navigation = () => {
  return (
    <>
      <div className="  flex flex-col  justify-center items-center relative  bg-blue-50  py-8 sm:py-12 px-4  ">
        <div className="absolute  ">
          <img src={bgImage} alt="" className="w-[550px] -z-20 opacity-15" />
        </div>
        <div className="text-center text-4xl font-bold max-w-[400px] mx-auto pb-8 mb-16">
          <h1>Explore our range of programs & services</h1>
        </div>

        <div className="  flex justify-center z-10  items-center  bg-blue-50">
          <div className="   text-center bg-white border border-black shadow-lg rounded-lg p-2 max-w-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Explore our programs on
            </h2>

            <div className="space-y-2  flex flex-col gap-0">
              <a href="#Disease">
                <button className="w-full px-2 sm:px-4 py-2 text-gray-700 bg-[#FFFDF1] border border-black rounded-md hover:bg-gray-200">
                  Disease Therapeutic Wellness
                </button>
              </a>
              <a href="#Female">
              <button className="w-full px-4 py-2 text-gray-700 bg-[#FFFDF1] border border-black rounded-md hover:bg-gray-200">
                Female Wellness
              </button>
              </a>
              <a href="#Holistic">
              <button className="w-full px-4 py-2 text-gray-700 bg-[#FFFDF1] border border-black rounded-md hover:bg-gray-200">
                Holistic General wellness
              </button>
              </a>
              <a href="#MenSexual">
              <button className="w-full px-4 py-2 text-gray-700 bg-[#FFFDF1] border border-black rounded-md hover:bg-gray-200">
                Men's Sexual Health
              </button>
              </a>
              <a href="#Emotional">
              <button className="w-full px-4 py-2 text-gray-700 bg-[#FFFDF1] border border-black rounded-md hover:bg-gray-200">
                Emotional and spiritual wellness
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
