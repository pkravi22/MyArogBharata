import React from "react";
import cooker from "../../assets/cooker.png";
const UserLeaderboard = () => {
  return (
    <div className="pt-8 flex flex-col gap-4">
      <h1 className="text-3xl text-center mb-20 font-extrabold ">Rewards</h1>
      <div className="flex gap-4 px-12 py-8 border-b-2 border-black mx-8">
       
        <div className="flex flex-col  mt-8 relative border border-blue-500 p-8 rounded-xl justify-center items-center">
          <div className="p-4   border flex flex-col justify-center items-centerl border-black rounded-lg">
            <img src={cooker} alt="" className="w-[200px]" />
            <p className="text-xl font-semibold text-center">Pressure Cooker</p>
          </div>
          <div className="absolute -top-20 bg-white text-2xl px-2 left-24 flex flex-col justify-center items-center">
            <p className="text-5xl mb-4 font-bold">2</p>
            <p>Place</p>
          </div>
        </div>
        <div className="flex flex-col  relative border border-blue-500 p-8  rounded-xl justify-center items-center">
          <div className="p-4   border flex flex-col justify-center items-centerl border-black rounded-lg">
            <img src={cooker} alt="" className="w-[200px]" />
            <p className="text-xl font-semibold text-center">Pressure Cooker</p>
          </div>
          <div className="absolute -top-24 bg-white text-2xl px-2 left-24 flex flex-col justify-center items-center">
            <p className="text-7xl mb-2 font-bold">1</p>
            <p>Place</p>
          </div>
        </div>
        <div className="flex flex-col  mt-8 relative border border-blue-500 p-4 rounded-xl justify-center items-center">
          <div className="p-4  border flex flex-col justify-center items-centerl border-black rounded-lg">
            <img src={cooker} alt="" className="w-[200px]" />
            <p className="text-xl font-semibold text-center">Pressure Cooker</p>
          </div>
          <div className="absolute -top-20 bg-white text-2xl px-2 left-24 flex flex-col justify-center items-center">
            <p className="text-5xl mb-4 font-bold ">3</p>
            <p>Place</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-12 my-4">
        <h1 className="text-3xl text-center font-bold">LeaderBoard</h1>
        <div className="flex font-medium rounded-lg border border-black p-2  ">
          <p className="w-[10%]">Position</p>
          <p className="w-[30%]">Name</p>
          <p className="w-[60%] text-right mr-4">Referrals</p>
        </div>
        <div className="flex gap-8 border font-medium border-black hover:border-blue-400  hover:bg-blue-100 p-2 rounded-lg items-center  ">
          <p className=" bg-blue-100 rounded-full px-4 py-2">1</p>
          <div>
            <p className="w-[30%]">Nansjdk</p>
            <p className="w-[30%]">Jalandhar,Haryana</p>
          </div>

          <p className="w-[80%] font-bold text-xl flex justify-end text-end mr-2">
            23
          </p>
        </div>
        <div className="flex gap-8 border font-medium border-black hover:border-blue-400 hover:bg-blue-100 p-2 rounded-lg items-center  ">
          <p className=" bg-blue-100 rounded-full px-4 py-2">1</p>
          <div>
            <p className="w-[30%]">Ikdu</p>
            <p className="w-[30%]">South,Haryana</p>
          </div>

          <p className="w-[80%] font-bold text-xl flex justify-end text-end mr-2">
            23
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLeaderboard;
