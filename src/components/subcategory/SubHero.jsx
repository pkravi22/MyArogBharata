import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SubHero = ({ title, image, description,bgImage }) => {
  console.log(title);

  return (
    <div className="-z-50 max-h-[1080px] pt-0">
      <div className=" flex  flex-col-reverse md:flex-row justify-center mt-12  w-full md:px-0  md:pt-0 md:justify-between py-4 sm:py-0">
        <section className="px-4 w-full sm:w-[60%] pb-16 mt-12  text-center sm:text-start   md:pt-8 md:px-8 md:w-1/2">
          <p className="font-bold uppercase  text-2xl sm:text-3xl  md:text-5xl xl:6xl">
            {title}
          </p>
          <p className="font-semibold text-base mx-auto  py-2 my-2">{description}</p>

          <div className="flex flex-col w-[300px] mx-auto sm:mx-0 gap-4 mt-8">
            <button className="coloredbutton w-full mx-auto py-2 px-2 text-sm flex items-center justify-center gap-3">
              Book Consultation <FaArrowRight />
            </button>
            <button className="normalbutton w-full mx-auto py-2 text-sm flex items-center justify-center gap-3">
              Checkout Classes <FaArrowRight />
            </button>
          </div>
        </section>

        {/* Updated Section for Vertical Alignment */}
        <section className="  right-0 w-full sm:w-[40%] flex justify-end">
          <img src={image} alt="" className=" -z-16 w-[450px]" />
        </section>
      </div>
    </div>
  );
};

export default SubHero;
 