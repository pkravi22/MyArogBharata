import React from "react";
import user from "../../assets/user.webp";
import { FaRupeeSign } from "react-icons/fa";
const Membership = () => {
  return (
    <div className=" font-Inter flex flex-col gap-8 py-4  px-8  w-full justify-center font-inter items-center pt-12">
      <div className="text-3xl font-bold font-inter  ">Holistic General Fitness</div>
      <div className="flex gap-12 font-comfortaa">
        <div className="shadow-md font-bold px-4 py-2 rounded-sm hover:bg-[#4FAAFF]">
          <p className="font-bold text-xl ">1 month Membership</p>
          <div className="flex justify-center items-center ">
            <FaRupeeSign size={20} />
            <p className="font-extrabold text-xl"> 5999</p>
          </div>
        </div>
        <div className="shadow-lg  font-semibold px-4 py-2 rounded-sm hover:bg-[#4FAAFF]">
          <p className="font-bold text-xl ">3 month Membership</p>
          <div className="flex justify-center items-center ">
            <FaRupeeSign size={20} />
            <p className="font-extrabold text-xl"> 5999</p>
          </div>
        </div>
        <div className="shadow-lg font-semibold px-4 py-2 rounded-sm hover:bg-[#4FAAFF]">
          <p className="font-bold text-xl ">6 month Membership</p>
          <div className="flex justify-center items-center ">
            <FaRupeeSign size={20} />
            <p className="font-extrabold text-xl"> 5999</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
          <p className="font-medium">Current Subscribers</p>
          <p className="text-3xl font-extrabold">2000</p>
        </div>
        <div className="px-4 py-4  items-center flex flex-col gap-2 bg-blue-100 rounded-md">
          <p className="font-medium px-12 text-center">Total Earning</p>
          <div className="flex items-center">
            <FaRupeeSign size={25} />
            <p className="text-3xl font-extrabold">12000</p>
          </div>
        </div>
        <div className="px-4 py-4  items-center flex flex-col gap-2 bg-blue-100 rounded-md">
          <p className="font-medium px-12 text-center">Total Earning</p>
          <div className="flex items-center">
            <FaRupeeSign size={25} />
            <p className="text-3xl font-extrabold">122000</p>
          </div>
        </div>
        <div className="px-12 py-4 text-center flex flex-col gap-2 bg-blue-100 rounded-md">
          <p className="font-medium text-center">Total Subscribers</p>
          <p className="text-3xl font-extrabold">400</p>
        </div>
      </div>
      {/* joined members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8 border justify-start border-black p-2 rounded-md">
          <div className="flex jsutify-center items-center gap-8">
            <div>
              <img src={user} alt="" className="w-[80px]" />
            </div>
            <div className="font-semibold">
              <p className="text-xl">Pratiskha devi</p>
              <p className="text-md">Engineer</p>
              <p className="text-md">Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between">
              <p>Current Status</p>
              <p className="bg-[#BCFF92] rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p className="font-semibold">24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p className="font-semibold">AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p className="font-semibold">13May 2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 border justify-start border-black p-2 rounded-md">
          <div className="flex jsutify-center items-center gap-8">
            <div>
              <img src={user} alt="" className="w-[80px]" />
            </div>
            <div className="font-semibold">
              <p className="text-xl">Pratiskha devi</p>
              <p className="text-md">Engineer</p>
              <p className="text-md">Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between">
              <p>Current Status</p>
              <p className="bg-[#BCFF92] rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p className="font-semibold">24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p className="font-semibold">AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p className="font-semibold">13May 2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 border justify-start border-black p-2 rounded-md">
          <div className="flex jsutify-center items-center gap-8">
            <div>
              <img src={user} alt="" className="w-[80px]" />
            </div>
            <div className="font-semibold">
              <p className="text-xl">Pratiskha devi</p>
              <p className="text-md">Engineer</p>
              <p className="text-md">Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between">
              <p>Current Status</p>
              <p className="bg-[#BCFF92] rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p className="font-semibold">24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p className="font-semibold">AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p className="font-semibold">13May 2025</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col gap-6 border justify-start border-black p-2 rounded-md">
          <div className="flex jsutify-center items-center gap-8">
            <div>
              <img src={user} alt="" className="w-[80px]" />
            </div>
            <div className="font-semibold">
              <p className="text-xl">Pratiskha devi</p>
              <p className="text-md">Engineer</p>
              <p className="text-md">Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between">
              <p>Current Status</p>
              <p className="bg-[#BCFF92] rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p className="font-semibold">24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p className="font-semibold">AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p className="font-semibold">13May 2025</p>
            </div>
          </div>
          
        </div> <div className="flex flex-col gap-6 border justify-start border-black p-2 rounded-md">
          <div className="flex jsutify-center items-center gap-8">
            <div>
              <img src={user} alt="" className="w-[80px]" />
            </div>
            <div className="font-semibold">
              <p className="text-xl">Pratiskha devi</p>
              <p className="text-md">Engineer</p>
              <p className="text-md">Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between">
              <p>Current Status</p>
              <p className="bg-[#FF9292] rounded-3xl px-4 py-0">Not Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p className="font-semibold">24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p className="font-semibold">AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p className="font-semibold">13May 2025</p>
            </div>
          </div>
          
        </div> <div className="flex flex-col gap-6 border justify-start border-black p-2 rounded-md">
          <div className="flex jsutify-center items-center gap-8">
            <div>
              <img src={user} alt="" className="w-[80px]" />
            </div>
            <div className="font-semibold">
              <p className="text-xl">Pratiskha devi</p>
              <p className="text-md">Engineer</p>
              <p className="text-md">Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-between">
              <p>Current Status</p>
              <p className="bg-[#BCFF92] rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p className="font-semibold">24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p className="font-semibold">AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p className="font-semibold">13May 2025</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Membership;
