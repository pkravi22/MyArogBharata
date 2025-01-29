import React from "react";
import frame1 from "../../assets/Group 4.png";
import frame2 from "../../assets/Group 6.png";
import frame3 from "../../assets/Group 7.png";
import frame4 from "../../assets/Group 10.png";
const Services = () => {
  return (
    <div class="grid grid-cols-2 r text-white justify-center md:grid-cols-4  font-sans  px-0 sm:px-8  pt-0 md:pt-8 pb-0 md:pb-4 ">
      <div class="flex gap-1 sm:gap-2 items-center p-0 md:p-4 ">
        <div class="text-4xl  bg-white  p-1 md:p-2 rounded-sm">
          <img src={frame1} alt="" className="w-[60px] object-contain " />
        </div>
        <div className="flex text-lg flex-col justify-start items-start">
          <p class="text-center font-bold">Yoga</p>
          <p class="text-center font-bold">Bandhas</p>
          <p class="text-center font-bold">Kegel</p>
        </div>
      </div>

      <div class="flex gap-1 md:gap-2   items-center p-0 md:p-4 ">
        <div class="  bg-white p-1 md:p-2 rounded-sm">
          <img src={frame2} alt="" className="w-[60px]" />
        </div>
        <div className="flex text-lg flex-col justify-start items-start">
          <p class="text-center font-bold">Counseling</p>
          <p class=" font-bold">Health Coach</p>
          <p class="text-center font-bold">Support</p>
        </div>
      </div>

      <div class="flex gap-2  items-center p-0 md:p-4 ">
        <div class="text-4xl mb-2  bg-white p-1 md:p-2 rounded-sm">
          <img src={frame3} alt="" className="w-[60px]" />
        </div>
        <div className="flex flex-col justify-start text-lg items-start">
          <p class="text-center text-lg font-bold">Diet Plan</p>
          <p class="text-center font-bold">Gut Detox</p>
          <p class="text-center font-bold">Mudras</p>
        </div>
      </div>

      <div class="flex gap-2   items-center p-0 md:p-4 ">
        <div class="text-xl mb-2  bg-white p-1 md:p-2 rounded-sm">
          <img src={frame4} alt="" className="w-[60px]" />
        </div>
        <div className="flex flex-col justify-start items-start font-bold text-lg">
          <p class="">Meditation</p>
          <p class="">Breathing</p>
          <p class=" ">Techniques</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
