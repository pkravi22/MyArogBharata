import React from "react";
import profile from "../../assets/Group 11.png";
const Profile = () => {
  return (
    <>
      <div className="font-inter">
        <div className="flex min-h-screen gap-8 py-0 pt-8  ">
          {/* naviagtion bar */}
          
          <div className="h-4/6 pr-16 flex justify-start rounded-lg border border-black p-4  flex-col gap-8">
            {/* Profile */}
            <div className="flex gap-10  bg-[#DCEEFF] p-4">
              <img src={profile} alt=""/>
              <div className="flex flex-col gap-2 mt-2">
                <p>Welcome</p>
                <p className="text-3xl font-bold">Dr.Sanjay</p>
                <p className="font-semibold ml-12">M.B.BS., M.D., <br /> Gynaecologist</p>
                <p>
                  16 years experience <br />
                  More than 3000 patients treated
                </p>
              </div>
            </div>
            {/* stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
                <p className="font-semibold">Current Subscribers</p>
                <p className="text-3xl font-bold">2000</p>
              </div>
              <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
                <p  className="font-semibold">Current Earning</p>
                <p className="text-3xl font-bold">20000</p>
              </div>
              <div className="px-12 py-4 text-center flex flex-col gap-2 bg-blue-100 rounded-md">
                <p className="font-semibold">Total Earning</p>
                <p className="text-3xl font-bold">122000</p>
              </div>
              <div className="px-12 py-4 text-center flex flex-col gap-2 bg-blue-100 rounded-md">
                <p className="font-semibold">Total Subscribers</p>
                <p className="text-3xl font-bold">400</p>
              </div>
            </div>
            {/* program */}
            <div>
              <h1>Your Programs</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-2 p-4 rounded-md border border-black ">
                  <h1 className="text-lg text-center ">Holistic wellness</h1>
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
