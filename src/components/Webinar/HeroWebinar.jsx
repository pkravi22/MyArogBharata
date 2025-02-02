import React from "react";
import hero from "../../assets/webinarImages/webHero.png";
import alram from "../../assets/webinarImages/alarm.svg";
import star from "../../assets/webinarImages/star.svg";
import person from "../../assets/webinarImages/person.svg";
import antenna from "../../assets/webinarImages/antenna.svg";
import calender from "../../assets/webinarImages/calender.svg";
import Registration from "./Registration";
const HeroWebinar = () => {
  return (
    <div className=" bg-blue-50  px-0 sm:px-8 ">
      <div className="flex pt-8   bg-white  flex-col gap-[4px] ">
        <div className="flex flex-col gap-[4px] px-2 text-center mt-8 ">
          <h1 className="font-semibold text-2xl pt-2">
            Attend a very intriguing workshop on{" "}
          </h1>
          <p className="text-4xl font-bold">Men’s Sexual Health</p>
        </div>
        <div className="flex  flex-col sm:flex-row pt-4   gap-8 sm:gap-24">
          {/* pics section  */}
          <div className="w-full sm:w-[40%] ">
            <img src={hero} alt="" className="" />
          </div>
          {/* timing and other things */}
          <div className=" w-full sm:w-2/3 flex flex-col pt-8  px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[18px] xl:text-[24px]">
              <div className="flex  md:flex-row items-center text-white font-semibold bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={alram} alt="" className="w-[60px]" />
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Timing</p>
                  <p> 10:00 AM - 11:00 AM</p>
                </div>
              </div>
              <div className="flex flex-row  items-center  text-white font-semibold bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={calender} alt="" className="w-[60px]" />
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Date</p>
                  <p>10th July 2022</p>
                </div>
              </div>
              <div className="flex flex-row  text-white font-semibold items-center bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={person} alt="" className="w-[60px]" />
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Customer Rating</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={star}
                        alt="Star"
                        className="w-6 h-6"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-row  text-white font-semibold items-center bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={alram} alt="" className="w-[60px]" />
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Time</p>
                  <p> 10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="py-12">
              {/* Registration */}
              <Registration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWebinar;
