import React from "react";
import profile from "../../assets/Group 11.png";
const UserProfile = () => {
  const value = "";
  const handleClick = () => {};
  return (
    <div className="font-inter px-8">
      <div className="flex min-h-screen gap-8 py-0 pt-8  ">
        {/* naviagtion bar */}

        <div className="h-4/6 pr-16 flex justify-start rounded-lg border border-black p-4  flex-col gap-8">
          {/* Profile */}
          <div className="flex gap-10  bg-[#DCEEFF] p-4  rounded-md">
            <img src={profile} alt="" />
            <div className="flex flex-col gap-2 mt-2">
              <p>HOLISTIC GENERAL FITNESS</p>
              <p>Welcome</p>
              <p className="text-3xl font-bold">Dr.Sanjay</p>
              <p className="font-semibold ml-12">Lawyer</p>
              <p>
                Badlapur <br />
                Maharashtra
              </p>
            </div>
          </div>
          {/* stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
              <p className="font-semibold">Your Referrals</p>
              <p className="text-3xl font-bold">2</p>
            </div>
            <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
              <p className="font-semibold">Your Rank</p>
              <p className="text-3xl font-bold">20</p>
            </div>
            <div className="px-12 py-4 text-center flex flex-col gap-2 bg-blue-100 rounded-md">
              <p className="font-semibold">Membership Period</p>
              <p className="text-xl font-bold">3 Months</p>
            </div>
            <div className="px-12 py-4 text-center flex flex-col gap-2 bg-blue-100 rounded-md">
              <p className="font-semibold">Total Subscribers</p>
              <p className="text-3xl font-bold">400</p>
            </div>
          </div>
          {/* program */}
          <div className="w-[80%] flex flex-col gap-2 border border-black p-4 rounded-lg ">
            <p>
              Share the code with your friends and family and increase your
              chances fir referrals
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                value="htttp:///dgnsixbok[g;aet[z;rfbh4e5\fnpreas]f/?wfosaprt[g;[b"
                className="border border-black text-md rounded-md w-[80%] p-1 "
              />
              <button onClick={handleClick} className="border border-black rounded-md p-2">Copy</button>
            </div>
            </div>
            <div className="w-[80%] bg-blue-600 p-2 text-center rounded-md text-white">
              <button>Show Conversion</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
