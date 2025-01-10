import { FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero1.webp";
import Asset from "../../assets/Asset1.webp";
import ArrowLine from "../arrow/ArrowLine";
const Hero = () => {
  return (
    <>
      <div className="max-w-[1920px] flex justify-around flex-col-reverse sm:flex-row py-4 mb-8  gap-16 sm:gap-8 w-full  px-2 md:px-8 pt-16 sm:pt-32 ">
        <section className="justify-center px-8 md:w-1/2 -ml-8">
          <p className="font-sans font-bold uppercase text-2xl ">ARog bharat</p>
          <p className="font-semibold text-2xl md:text-5xl">
            Reverse the Disease
          </p>
          <p className="font-semibold text-2xl text-nowrap lg:text-5xl  ml-16 lg:ml-48 mb-2 ">
            Live with Ease
          </p>
          <div className=" ml-0 sm
          :ml-24 lg:ml-48"> <ArrowLine className=" w-[300px] md:w-[500px] ml-24"/></div>
         
          <p className=" my-4 lg:my-20 text-center text-md">
            Change your lifestyle with{" "}
            <span className="text-orange-600 underline underline-offset-1 font-semibold ">
              yoga,
            </span>
            <span className="text-blue-500 underline underline-offset-1 font-semibold">
              diet,
            </span>
            <span className="text-green-400 underline underline-offset-1 font-semibold">
              {" "}
              detox{" "}
            </span>{" "}
            and{" "}
            <span className="text-pink-500 underline underline-offset-1 font-semibold">
              meditation
            </span>{" "}
          </p>
          <div className="flex flex-col sm:flex-row  gap-4 ">
            <button className="coloredbutton w-full mx-auto py-2  text-sm flex items-center justify-center gap-3">
              Book Consultation <FaArrowRight />
            </button>
            <button className="normalbutton w-full mx-auto py-2  text-sm flex items-center justify-center gap-3">
              Checkout Classes <FaArrowRight />
            </button>
          </div>
        </section>
        <section className="mt-2">
          <section className=" w-full flex justify-center  sm:top-0 lg:-top-12 py-4 md:py-2">
           
            <div className="absolute  top-16 md:top-28 -z-10 flex ">
              <img
                src={Asset}
                alt="Pattern"
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[420px] "
              />
            </div>

            
            <div className="relative z-10 flex   ">
              <img
                src={hero}
                alt="Yoga Pose"
                className="w-[250px] sm:w-[280px] md:w-[320px] -top-24 lg:w-[350px]  "
              />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Hero;
