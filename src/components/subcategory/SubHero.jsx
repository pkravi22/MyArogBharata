import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Asset from "../../assets/Asset1.webp";

const SubHero = ({ title, image, description }) => {
  console.log(title);

  return (
    <div className="-z-50 max-h-[1080px]">
      <div className="relative flex justify-center flex-col-reverse sm:flex-row gap-12 sm:gap-4 w-full md:px-0 pt-4 md:pt-8 md:justify-between py-0">
        <section className="px-4 py-4 md:pt-24 md:px-16 md:w-1/2">
          <p className="font-bold uppercase text-3xl md:text-3xl xl:6xl">
            {title}
          </p>
          <p className="font-semibold text-base py-2 my-2">{description}</p>

          <div className="flex flex-col w-[300px] gap-4 mt-12">
            <button className="coloredbutton w-full mx-auto py-2 text-sm flex items-center justify-center gap-3">
              Book Consultation <FaArrowRight />
            </button>
            <button className="normalbutton w-full mx-auto py-2 text-sm flex items-center justify-center gap-3">
              Checkout Classes <FaArrowRight />
            </button>
          </div>
        </section>

        {/* Updated Section for Vertical Alignment */}
        <section className="mt-4 md:w-1/2 relative flex justify-center sm:justify-end items-end pt-8 md:pt-0">
          <div className="absolute -z-30 sm:-right-12 top-12 md:top-4 flex text-orange-700 opacity-25">
            <img
              src={Asset}
              alt="Pattern"
              className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[550px] object-contain"
            />
          </div>

          <div className="h-[500px] flex items-end -z-10">
            <img
              src={image}
              alt="Yoga Pose"
              className="w-[360px] sm:w-[350px] md:w-[400px] lg:w-[450px] object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubHero;
 