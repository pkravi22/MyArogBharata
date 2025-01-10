import React from "react";
import { SiTicktick } from "react-icons/si";
import { BiRupee } from "react-icons/bi";
import tick from "../../assets/Group 9.webp";
import ArrowLine from "../arrow/ArrowLine";
const Plans = ({ plans }) => {
  const text = [
    "Ideal for short-term commitment or trying out our services.",
    "Perfect for consistent practitioners seeking moderate-term benefits.",
    "Best value! For dedicated individuals committed to long-term wellness",
  ];
  const save=[
    "₹ 900/month(save ₹ 600)",
    " ₹ 500/month(save ₹ 5000)",
  ]
  return (
    <section className="bg-bgBlue  py-8 md:py-16 px-2 md:px-16 border border-gray-1">
      <div className="flex flex-col px-8 py-8 ">
      <h3 className=" font-bold text-2xl">Dakshina</h3>
      <ArrowLine className="w-[100px] ml-4"/>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 px-4 mt-2 gap-8  justify-center items-center  ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border max-w-[500px] shadow-lg mx-auto transition-transform duration-300 hover:scale-105  rounded-md bg-white p-4 text-black"
          >
            <div className="bg-[#FFFDF1] p-8 mb-4 flex flex-col justify-center items-center">
              <h4 className="text-2xl">{plan.plan}</h4>
              <div className="text-5xl font-bold flex  items-center">
                <BiRupee size={55}/>
                {(index == 0 && 1101) ||
                  (index === 1 && 5506) ||
                  (index === 2 && 11021)}
              </div>
              <h1 className="text-md font-bold text-center ">
                {
                  (index === 1 && save[0]) ||
                  (index === 2 && save[1])}
              </h1>
              <h1 className="text-sm font-bold text-center ">
                {(index == 0 && text[0]) ||
                  (index === 1 && text[1]) ||
                  (index === 2 && text[2])}
              </h1>
            </div>
            <div className="px-4 py-2 flex flex-col gap-4  ">
              <div className="flex gap-2 item-center justif-start">
               
                <img src={tick} alt="" className="w-[25px]"/>
                <h2>Recorded classes</h2>
              </div>
              <div className="flex gap-2 item-center justify-start">
              <img src={tick} alt="" className="w-[25px]"/>
                <h2>Customized Diet Plan</h2>
              </div>
              <div className="flex gap-2 item-center justify-start">
              <img src={tick} alt="" className="w-[25px]"/>  
                <h2>Detox through meditation</h2>
              </div>
              <div className="flex gap-2 item-center justify-start">
              <img src={tick} alt="" className="w-[25px]"/>
                <h2>Personalized Counselling</h2>
              </div>
            </div>
            <div className="mx-auto text-center mt-4">
              {" "}
              <button
  className="coloredbutton px-24"
  onClick={() => window.location.href = `/payment?plan=${index}`}
>
  Enroll now
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
