import React from "react";
import womenWellness from "../../../assets/womenwellness.png"; // Adjust the path as needed
import Join from "../../../components/join/Join";
import DiabetesServices from "../../../components/services/DiabeticServices";
import ServicesOffered from "../../../components/whatWeOffer/ServicesOffered";

const WomenHero = () => {
  return (
    <div className=" relative top-10 flex flex-col justify-center  py-8 pb-16 items-center  bg-blue-100">
      <div>
        <img
          src={womenWellness}
          alt=""
          className=" max-w-[971px] w-full px-2 py-2 shadow-lg  h-auto "
        />
      </div>
      <div className="max-w-[1000px] px-12 py-6 text-left ">
        <p className="text-xl py-2 font-semibold">
          Yoga & Holistic Healing for Women's Wellness Wellbeing
        </p>
        <p className="text-sm  w-full  ">
          Striking a healthy balance of spiritual, mental, emotional, and
          physical wellbeing can feel complex and overwhelming for women.
          Nature's flows mean menstrual health and fluctuating hormonal activity
          in different stages of life need nurturing and support. Yoga, as a
          lifestyle choice, with online yoga classes, offers education,
          embodiment, and daily practices to help ground you in self-care. The
          release of tension helps to rebalance our system for healing and
          empowerment.
        </p>
      </div>

      
    </div>
  );
};

export default WomenHero;
