
import React from "react";
import { IoAlarmSharp } from "react-icons/io5";
import { FaHeartbeat, FaSpa, FaUserFriends } from "react-icons/fa";
import { MdPeopleAlt, MdOutlineSelfImprovement } from "react-icons/md";
const Card = ({ title, description, features, imageSrc }) => {
  return (
    <div className="border-2 border-orange-600 rounded-lg shadow-lg p-4 bg-white max-w-sm">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-md w-full max-w-[509px] h-70 object-cover mb-4"
      />
      <h3 className="text-lg  text-center sm:text-2xl font-bold mb-2 text-black font-roboto ">
        {title}
      </h3>
      <p className="text-sm text-center text-black mb-3">{description}</p>
      <ul className="text-sm  text-black mb-4">
        <li
          key={"0"}
          className="flex text-black items-center gap-2 mb-1 font-semibold"
        >
          <IoAlarmSharp className="text-green-400  " size={25} />
          {features[0]}
        </li>
        <li
          key={"1"}
          className="flex   text-black items-center gap-2 mb-1 font-semibold"
        >
          <FaHeartbeat className="text-green-400 " size={25} />
          {features[1]}
        </li>
        <li
          key={"2"}
          className="flex   text-black items-center gap-2 mb-1 font-semibold"
        >
          <FaSpa className="text-green-400 " size={25} />
          {features[2]}
        </li>
        <li
          key={"3"}
          className="flex   text-black items-center gap-2 mb-1 font-semibold"
        >
          <MdOutlineSelfImprovement className="text-green-400 " size={25} />{" "}
          {features[3]}
        </li>
        <li
          key={"4"}
          className="flex   text-black items-center gap-2 mb-1 font-semibold"
        >
          <FaUserFriends className="text-green-400 " size={25} /> {features[4]}
        </li>
      </ul>
      <div className="flex w-full">
        <button className="coloredbutton mx-4 px-4 md:px-8">Buy Now</button>
        <button className="normalbutton  mx-4 px-4 sm:px-8">Free Trial</button>
      </div>
    </div>
  );
};

export default Card;
