import React from "react";
import cooker from "../../assets/cooker.png";
const UserLeaderboard = () => {
  return (
    <div className="pt-8 flex flex-col gap-4">
      <h1 className="text-3xl text-center">Rewards</h1>
      <div className="flex gap-8 px-12">
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">1</p>
          <div className="p-8 border flex flex-col justify-center items-centerl border-black rounded-lg">
            <img src={cooker} alt="" />
            <p className="text-xl font-semibold text-center">Pressure Cooker</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">2</p>
          <div className="p-8 border flex flex-col justify-center items-centerl border-black rounded-lg">
            <img src={cooker} alt="" />
            <p className="text-xl font-semibold text-center">Pressure Cooker</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">3</p>
          <div className="p-8 border flex flex-col justify-center items-centerl border-black rounded-lg">
            <img src={cooker} alt="" />
            <p className="text-xl font-semibold text-center">Pressure Cooker</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 px-12">
        <h1 className="text-3xl text-center">LeaderBoard</h1>
        <div className="flex rounded-lg border border-black p-2  ">
          <p className="w-[10%]">Position</p>
          <p className="w-[30%]">Name</p>
          <p className="w-[60%] text-right">Referrals</p>
        </div>
        <div className="flex border border-black p-4 rounded-lg  ">
          <p className="w-[10%]">1</p>
          <p className="w-[30%]">Nansjdk</p>
          <p className="w-[60%] text-right">23</p>
        </div>
        <div className="flex border border-black p-4  rounded-lg ">
          <p className="w-[10%]">2</p>
          <p className="w-[30%]">Tattu</p>
          <p className="w-[60%] text-right">12</p>
        </div>
      </div>
    </div>
  );
};

export default UserLeaderboard;
