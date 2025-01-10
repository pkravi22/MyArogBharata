import React from "react";
import ServicesOffered from "../../../components/whatWeOffer/ServicesOffered";
import WomenHero from "./WomenHero";
import Join from "../../../components/join/Join";
import womenHealthCourses from "../../../data/women";
import yoga from "../../../assets/yoga.png";
import healing from "../../../assets/healing.png";
import weeks from "../../../assets/weeks.png";
import hours from "../../../assets/hours.png";
import video from "../../../assets/video.svg";
import sadhaks from "../../../assets/sadhaks.png";
import { RiCalendarCheckLine } from "react-icons/ri";
import guruji from "../../../assets/guruji1.png";
import { MdPeopleAlt } from "react-icons/md";
const WomenProgram = () => {
  return (
    <div className="z-50 ">
      <div>
        <h1 className="text-2xl font-semibold text-center py-12 bg-blue-100">
          Explore Our Services
        </h1>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 justify-center -z-50 px-4 sm:px-16 lg:px-32 gap-8 p-6 bg-blue-100">
        {womenHealthCourses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-300 rounded-lg shadow-lg p-4"
          >
            <img
              src={course.image}
              alt="Course Image"
              className="w-full h-50 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <div className=" flex justify-between">
                {" "}
                <h3 className="text-md font-semibold">{course.level} Yoga</h3>
                <button className="bg-customBlue text-white rounded-2xl text-center px-2 py-1 mx-8">
                  Online
                </button>
              </div>

              <p className="text-md font-bold">{course.price}</p>
              <div className="flex gap-4 py-2">
                <RiCalendarCheckLine size={25} />
                <p className="text-md ">{course.hours}</p>
              </div>
              <div className="flex gap-4 py-2 ">
                <MdPeopleAlt size={25} />
                <p className="text-md">
                  Sadhkas: {course.totalSadhkas}
                </p>
              </div>

              <div className="flex gap-4 py-2">
                <img src={video} alt="" className="w-[25px] h-auto " />
                <p>Get recording Classes</p>
              </div>
              <p className="text-md ">
                Total Classes: {course.totalClasses}
              </p>
              <div>
                <button className="bg-customBlue text-white w-full rounded-lg py-2 cursor-pointer mt-2">
                  <a href="#">Get Details</a>
                </button>
              </div>
            </div>
          </div>
        ))}

        <img
          src={guruji}
          alt="guruji"
          className="fixed -z-10 top-48 left-1/2 transform -translate-x-1/2 opacity-15 w-[300px] h-auto "
        />
      </div>
    </div>
  );
};

export default WomenProgram;
