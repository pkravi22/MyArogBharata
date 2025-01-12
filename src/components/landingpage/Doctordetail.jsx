import React from "react";
import profile from "../../assets/Group 11.png";
const Doctordetail = () => {
  return (
    <>
      <div className="h-auto border my-2  p-2 bg-white rounded-md">
        <div className="flex gap-4 bg-[#5097D1] p-1">
          <img
            src={profile}
            alt=""
            className="w-[100px]"
          />
          <div>
            Name:Vinay Kumar
            <br />
            Physcicist
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctordetail;
