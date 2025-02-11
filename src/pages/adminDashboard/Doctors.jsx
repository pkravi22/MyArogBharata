import React from "react";
import user from "../../assets/user.webp";
const Doctors = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 font-inter">
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
          <div className="flex justify-between items-center mt-4">
            <div className="bg-blue-500 rounded-sm px-4 py-1 text-white"><button >Add Patients</button></div>
            <div className="rounded-sm border-[1.2px] border-blue-500 px-4 py-1 text-blue-500 font-medium"><button className="">Remove Doctor</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
