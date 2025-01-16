import React from "react";
import frame1 from "../../assets/Group 4.png";
import frame2 from "../../assets/Group 6.png";
import frame3 from "../../assets/Group 7.png";
import frame4 from "../../assets/Group 10.png";
const Services = () => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 bg-white  px-2 sm:px-8 py-4 ">
      <div class="flex gap-2   items-center p-4 ">
        <div class="text-4xl  bg-[#5097D166] p-2 rounded-sm">
          <img src={frame1} alt="" className="w-[60px]" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <p class="text-center text-md font-bold">Yoga</p>
          <p class="text-center text-md font-bold">Bandhas</p>
          <p class="text-center text-md font-bold">Kegel</p>
        </div>
      </div>

      <div class="flex gap-2   items-center p-4 ">
        <div class="text-4xl mb- bg-[#5097D166] p-2 rounded-sm">
          <img src={frame2} alt="" className="w-[60px]" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <p class="text-center text-md font-bold">Yoga</p>
          <p class="text-center text-md font-bold">Bandhas</p>
          <p class="text-center text-md font-bold">Kegel</p>
        </div>
      </div>

      <div class="flex gap-2  items-center p-4 ">
        <div class="text-4xl mb-2 bg-[#5097D166] p-2 rounded-sm">
          <img src={frame3} alt="" className="w-[60px]"/>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p class="text-center text-md font-bold">Yoga</p>
          <p class="text-center text-md font-bold">Bandhas</p>
          <p class="text-center text-md font-bold">Kegel</p>
        </div>
      </div>

      <div class="flex gap-2   items-center p-2 ">
        <div class="text-xl mb-2 bg-[#5097D166] p-2 rounded-sm">
          <img src={frame4} alt="" className="w-[60px]"/>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p class="text-center text-md font-bold">Yoga</p>
          <p class="text-center text-md font-bold">Bandhas</p>
          <p class="text-center text-md font-bold">Kegel</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
