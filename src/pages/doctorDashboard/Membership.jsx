import React from "react";
import user from "../../assets/user.webp";
const Membership = () => {
  return (
    <div className="flex flex-col gap-8 py-4  w-full justify-center font-inter items-center pt-12">
      <div className="text-3xl  ">Holistic General Fitness</div>
      <div className="flex gap-16 font-comfortaa">
        <div className="shadow-md font-semibold px-4 py-4 rounded-sm hover:bg-[#4FAAFF]">
          <p >1 MONTH MEMBERSHIP</p>
          <p>1001</p>
        </div>
        <div className="shadow-md  font-semibold px-4 py-4 rounded-sm hover:bg-[#4FAAFF]">
          <p>3 MONTH MEMBERSHIP</p>
          <p>2999</p>
        </div>
        <div className="shadow-md font-semibold px-4 py-4 rounded-sm hover:bg-[#4FAAFF]">
          <p>6 MONTH MEMBERSHIP</p>
          <p>5999</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-6">
          <div className="px-4 py-4 text-center flex flex-col gap-4 bg-blue-100 rounded-md">
            <p className="font-semibold">Current Subscribers</p>
            <p className="text-3xl font-bold">2000</p>
          </div>
          <div className="px-4 py-4 text-center flex flex-col gap-4 bg-[#DCEEFF] rounded-md">
            <p className="font-semibold">Current Earning</p>
            <p className="text-3xl font-bold">20000</p>
          </div>
          <div className="px-4 py-4 text-center flex flex-col gap-4 bg-blue-100 rounded-md">
            <p className="font-semibold">Total Earning</p>
            <p className="text-3xl font-bold">122000</p>
          </div>
          <div className="px- py-4 text-center flex flex-col gap-4 bg-blue-100 rounded-md">
            <p className="font-semibold">Total Subscribers</p>
            <p className="text-3xl font-bold">400</p>
          </div>
        </div>
      </div>
      {/* joined members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-6 border justify-start border-black p-4 rounded-md">
          <div className="flex jsutify-center items-center gap-4">
            <div>
              <img src={user} alt="" className="w-[100px]" />
            </div>
            <div>
              <p>Pratiskha devi</p>
              <p>Engineer</p>
              <p>Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-12 justify-between">
              <p>Current Status</p>
              <p className="bg-green-500 rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p>24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p>AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p>13May 2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 border justify-start border-black p-4 rounded-md">
          <div className="flex jsutify-center items-center gap-4">
            <div>
              <img src={user} alt="" className="w-[100px]" />
            </div>
            <div>
              <p>Pratiskha devi</p>
              <p>Engineer</p>
              <p>Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-12 justify-between">
              <p>Current Status</p>
              <p className="bg-green-500 rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p>24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p>AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p>13May 2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 border justify-start border-black p-4 rounded-md">
          <div className="flex jsutify-center items-center gap-4">
            <div>
              <img src={user} alt="" className="w-[100px]" />
            </div>
            <div>
              <p>Pratiskha devi</p>
              <p>Engineer</p>
              <p>Noida ,UP</p>
            </div>
          </div>
          <div>
            <div className="flex gap-12 justify-between">
              <p>Current Status</p>
              <p className="bg-green-500 rounded-3xl px-4 py-0">Active</p>
            </div>
            <div className="flex justify-between">
              <p>Age</p>
              <p>24</p>
            </div>
            <div className="flex justify-between">
              <p>Major Problem</p>
              <p>AIDS</p>
            </div>
            <div className="flex justify-between">
              <p>Start Date</p>
              <p>13May 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
