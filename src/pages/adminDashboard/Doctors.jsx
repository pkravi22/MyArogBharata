import React from "react";
import user from "../../assets/user.webp";
const Doctors = () => {
  return (
    <>
    <div className="grid  gap-4 py-8 font-inter mx-4 mt-4">
      <div className="grid grid-cols-3 gap-6 border justify-start p-4 rounded-md">
       {[1,2,3,4,5,6].map((_,index)=>{
       return (
        <div key={index} className=" flex flex-col gap-4 border border-black p-3 rounded-lg">
        <div className="flex jsutify-center  items-center gap-2">
          <div>
            <img src={user} alt="" className="w-[80px]" />
          </div>
          <div>
            <p>Prerna Aggarwal</p>
            <p>Jaspal Hospital</p>
            <p>Kurukshetra, Haryana</p>
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
          <div className="flex justify-between items-center gap-2 mt-4">
            <div className="bg-blue-500 rounded-sm px-2 py-1 text-white"><button >Add Patients</button></div>
            <div className="rounded-sm border-[1.2px] border-blue-500 px-2 py-1 text-blue-500 font-medium"><button className="">Remove Doctor</button></div>
          </div>
        </div>
        </div>
       )
       })} 
      </div>
    </div>
   
    </>
  );
};

export default Doctors;
