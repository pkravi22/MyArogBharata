import React from "react";
import profile from "../../assets/Group 11.png";
import { FaRupeeSign } from "react-icons/fa";
const Profile = () => {
  return (
    <>
      <div className="font-inter md:w-[95%]">
        <div className="flex min-h-screen gap-8 py-0 pt-8  ">
          {/* naviagtion bar */}

          <div className="h-4/6 pr-4 flex justify-start rounded-lg border border-black p-4  flex-col gap-8">
            {/* Profile */}
            <div className="flex flex-col bg-[#DCEEFF]  rounded-2xl p-2 ">
              <div className="flex gap-10   p-2 rounded-xl">
                <img src={profile} alt="" className="w-[200px] h-[200px]" />
                <div className="flex flex-col gap-2 mt-0">
                  <p className="text-xl">Welcome</p>
                  <p className="text-3xl font-bold">Dr.Sanjay</p>
                  <p className="font-medium text-xl ">
                    M.B.BS., M.D., Gynaecologist
                  </p>
                  <div className="flex flex-col gap-2 text-slate-600">
                    <p>16 years experience </p>
                    <p>More than 3000 patients treated</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 px-2 pt-4">
                <div className="w-1/4  border bg-blue-500  rounded-md text-center px-12 py-1">
                  <button>Add Patient</button>
                </div>
                <div className="w-1/4 border-[1.5px] rounded-md border-[#1858F9] text-center py-1">
                  <button>Remove Doctor</button>
                </div>
              </div>
            </div>
            {/* stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
                <p className="font-medium">Current Subscribers</p>
                <p className="text-3xl font-extrabold">2000</p>
              </div>
              <div className="px-4 py-4  items-center flex flex-col gap-2 bg-blue-100 rounded-md">
                <p className="font-medium px-12">Total Earning</p>
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
            {/* program */}
            <div>
              <h1 className="text-xl font-medium">Your Programs</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <div className="flex flex-col gap-2 p-4 rounded-2xl border border-black ">
                  <h1 className=" text-center font-semibold text-2xl ">
                    Holistic wellness
                  </h1>
                  <div className="flex justify-between">
                    <p>Active Members</p>
                    <p>24</p>
                  </div>
                  <div className="flex justify-between">
                    <p>3 months Members</p>
                    <p>21</p>
                  </div>
                  <div className="flex justify-between">
                    <p>6 months Members</p>
                    <p>34</p>
                  </div>
                  <div className="flex justify-between">
                    <p>12 months Members</p>
                    <p>24</p>
                  </div>
                  <div className="w-[75%] my-2 bg-[#1858F9] text-center text-white py-2 px-4 mx-auto rounded-md ">
                    <button>Members Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
