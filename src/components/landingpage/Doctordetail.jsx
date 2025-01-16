import React from "react";
import profile from "../../assets/Group 11.png";
const Doctordetail = ({color}) => {
  return (
    <>
      <div className="h-auto  my-0  py-8 px-4 bg-white" >
        <div className="flex gap-4 ] p-1 rounded-lg" style={{ backgroundColor: color }}>
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
