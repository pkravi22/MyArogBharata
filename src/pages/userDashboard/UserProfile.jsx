import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import profile from "../../assets/Group 11.png";
const UserProfile = () => {
  const referralLink = "http://dgnsixbok[g;aet[z;rfbh4e5\\fnpreas]f/?wfosaprt[g;[b";
  const handleClick = () => {
    navigator.clipboard.writeText(referralLink)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <div className="font-inter px-8">
      <div className="flex min-h-screen  gap-8 py-0 pt-8  ">
        {/* naviagtion bar */}

        <div className="h-4/6 mr-8  flex justify-start rounded-2xl border border-black p-4  flex-col gap-8">
          {/* Profile */}
          <div className="flex gap-10  bg-[#DCEEFF] p-4  rounded-3xl max-h-[240px]">
            <img src={profile} alt="" className="h-[200px] w-[200px] rounded-3xl"/>
            <div className="flex flex-col gap-2 justify-center mt-2 leading-[1.5]">
              <p className="text-[#041FA8] text-3xl font-bold">HOLISTIC GENERAL FITNESS</p>
              <p className="text-[20px]">Welcome</p>
              <p className="text-3xl font-medium">Dr.Sanjay</p>
              <p className="font-medium text-[24px] ">Lawyer</p>
              <p className="text-slate-500">
                Badlapur 
                Maharashtra
              </p>
            </div>
          </div>
          {/* stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
              <p className="font-semibold px-4">Your Referrals</p>
              <p className="text-3xl font-bold">2</p>
            </div>
            <div className="px-12 py-4 text-center flex flex-col gap-2 bg-[#DCEEFF] rounded-md">
              <p className="font-semibold px-6">Your Rank</p>
              <p className="text-3xl font-bold">20</p>
            </div>
            <div className="px-4 py-4 text-center flex flex-col gap-2 bg-blue-100 rounded-md">
              <p className="font-semibold px-8">Membership Period</p>
              <p className="text-3xl font-bold">3 Months</p>
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
            <div className="flex justify-between gap-4">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="border border-black text-md rounded-md w-[80%] p-1"
              />
              <button onClick={handleClick} className="border bg-blue-500 rounded-md p-2">
                <MdOutlineContentCopy size={25} />
              </button>
            </div>
            </div>
            <div className="w-[80%] bg-blue-600 p-2 text-center font-comfortaa rounded-md text-white">
              <button>Show Conversion</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
