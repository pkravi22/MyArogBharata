import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Asset from "../../assets/Asset1.webp";

const SubHero = ({ title, image, description }) => {
  let flag = true;
  if (title === "Lifestyle Disease Therapy");
  flag = true;

  console.log(title);
  return (
    <div className="-z-50 max-h-[1080px]  ">
      <div className="relative  flex justify-around flex-col-reverse sm:flex-row  gap-8 w-full px-2 md:px-0   pt-2 md:pt-16 md:justify-between">
        <section className="justify-center items-center  px-4 py-4  md:py-12  md:px-16 md:w-1/2  pt-2 md:pt-36  ">
          <p className="font-bold uppercase  text-3xl md:text-6xl">{title}</p>
          <p className="font-semibold text-base py-2 my-2">{description}</p>

          <div className="flex flex-col w-[300px] gap-4">
            <button className="coloredbutton w-full mx-auto py-2 text-sm flex items-center justify-center gap-3">
              Book Consultation <FaArrowRight />
            </button>
            <button className="normalbutton w-full mx-auto py-2 text-sm flex items-center justify-center gap-3">
              Checkout Classes <FaArrowRight />
            </button>
          </div>
        </section>

        <section className="mt-4  md:w-1/2 relative   flex justify-end pt-8 md:pt-4">
          <div className="absolute -z-30 -right-16 top-16 md:top-8 flex  text-orange-700 opacity-25">
            <img
              src={Asset}
              alt="Pattern"
              className="w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-contain"
            />
          </div>

          <div className=" {`absolute  top-0  md:-right-36 overflow-hidden   flex  -z-30 `}">
            <img
              src={image}
              alt="Yoga Pose"
              className="w-[250px] sm:w-[280px] md:w-[400px] lg:w-[400px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubHero;
