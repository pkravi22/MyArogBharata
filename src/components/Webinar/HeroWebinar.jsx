import React from "react";
import hero from "../../assets/webinarImages/webHero.png";
import alram from "../../assets/webinarImages/alarm.svg";
import person from "../../assets/webinarImages/person.svg";
import antenna from "../../assets/webinarImages/antenna.svg";
import calender from "../../assets/webinarImages/calender.svg";
import Registration from "./Registration";
const HeroWebinar = () => {
  return (
    <div className=" bg-blue-50 px-12"> 
      <div className="flex mt-16 bg-white  flex-col gap-[30px] ">
        <div className="flex flex-col gap-[30px] text-center ">
          <h1 className="font-semibold text-2xl ">Attend a very intriguing workshop on </h1>
          <p className="text-6xl font-bold">Men’s Sexual Health</p>
        </div>
        <div className="flex flex-row pt-12  gap-24">
          {/* pics section  */}
          <div className="w-1/3 z-10">
            <img src={hero} alt="" className="" />
          </div>
          {/* timing and other things */}
          <div className=" w-2/3 flex flex-col ">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row items-center text-white font-semibold bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={alram} alt="" className="w-[80px]" />
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Timing</p>
                  <p> 10:00 AM - 11:00 AM</p>
                </div>
              </div>
              <div className="flex flex-row  items-center  text-white font-semibold bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={calender} alt=""  className="w-[80px]"/>
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Date</p>
                    <p>10th July 2022</p>
                </div>
              </div>
              <div className="flex flex-row  text-white font-semibold items-center bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={person} alt="" className="w-[80px]"/>
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Customer Rating</p>
                    <p>5/5</p>
                </div>
              </div>
              <div className="flex flex-row  text-white font-semibold items-center bg-[#5097D1] gap-[30px] opacity-100 px-[30px] py-[15px] rounded-[10px]">
                <img src={alram} alt=""  className="w-[80px]"/>
                <div className="flex flex-col gap-[15px] grow z-[1] p-0">
                  <p>Time</p>
                  <p> 10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div>
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
