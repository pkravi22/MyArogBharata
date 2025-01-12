import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoAlarmSharp } from "react-icons/io5";
import { FaHeartbeat, FaSpa, FaUserFriends } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";
import LandingPage from "../../pages/landingPage/LandingPage";

const CategoryCard = ({
  features,
  title,
  description,
  imageSrc,
  subtitle,
  categoryId,
  programId,
}) => {
  console.log(categoryId, programId);
const navigate=useNavigate();

const handleClick=(categoryId, programId)=>{
  console.log(categoryId)
return <LandingPage categoryId={categoryId} programId={programId}/>;
}
  return (
    <div className="card max-w-[509px] h-full transition-transform duration-300 hover:scale-105">
      <div className="border-2 border-[#F54C5A] rounded-md mx-auto shadow-lg p-2 bg-white max-w-sm h-full flex flex-col justify-between">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-md w-full max-w-[509px] h-70 object-cover mb-4"
        />
        <div className="px-2">
          <h3 className="text-xl text-center sm:text-2xl font-bold mb-2 text-black font-roboto">
            {title}
          </h3>
          {/* Subtitle with proper text wrapping */}
          <p className="text-sm text-center w-full px-0 text-black mb-3 break-words">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="text-sm text-black bg-green-50 rounded-md flex flex-col gap-2 p-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex text-black items-center gap-2 font-semibold"
              >
                {index === 0 && <IoAlarmSharp className="text-green-400" size={25} />}
                {index === 1 && <FaHeartbeat className="text-green-400" size={25} />}
                {index === 2 && <FaSpa className="text-green-400" size={25} />}
                {index === 3 && (
                  <MdOutlineSelfImprovement className="text-green-400" size={25} />
                )}
                {index === 4 && <FaUserFriends className="text-green-400" size={25} />}
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex w-full justify-between">
            <button className="coloredbutton text-sm px-6 md:px-8">
              <Link to={`/services/${categoryId}/${programId}`}>
                More Details
              </Link>
            </button>
            <button className="normalbutton text-sm px-6 md:px-8" onClick={() => {handleClick(categoryId,programId)}}>
              Click for Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
