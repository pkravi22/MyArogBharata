import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Asset from "../../assets/Asset1.webp";

const SubHero = ({ title, image, description }) => {
  console.log(title);

  return (
    <div className="-z-50 max-h-[1080px] pt-0">
      <div className="relative flex  flex-col-reverse md:flex-row justify-center items-center gap-2 sm:gap-4 w-full md:px-0  md:pt-0 md:justify-between py-8 sm:py-0">
        <section className="px-4 py-2 text-center sm:text-start  pb-8 md:pt-4 md:px-16 md:w-1/2">
          <p className="font-bold uppercase text-2xl md:text-3xl xl:6xl">
            {title}
          </p>
          <p className="font-semibold text-base mx-auto  py-2 my-2">{description}</p>

          <div className="flex flex-col w-[300px] mx-auto sm:mx-0 gap-4 mt-4">
            <button className="coloredbutton w-full mx-auto py-2 px-2 text-sm flex items-center justify-center gap-3">
              Book Consultation <FaArrowRight />
            </button>
            <button className="normalbutton w-full mx-auto py-2 text-sm flex items-center justify-center gap-3">
              Checkout Classes <FaArrowRight />
            </button>
          </div>
        </section>

        {/* Updated Section for Vertical Alignment */}
        <section className="mt-0 md:w-1/2 relative flex justify-center sm:justify-end items-end pt-0 md:pt-48">
          <div className="absolute -z-30 sm:-right-12 top-4 md:top-32 flex text-orange-700 opacity-25">
            <img
              src={Asset}
              alt="Pattern"
              className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px] object-contain"
            />
          </div>

          <div className="h-[400px]   flex items-end -z-10 ">
            <img
              src={image}
              alt="Yoga Pose"
              className="w-[320px] sm:w-[350px] md:w-[400px] lg:w-[400px] object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubHero;
 