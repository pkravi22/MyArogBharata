import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Membership from "./Membership";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [component, setComponent] = useState("profile");
  const handleClick = (compo) => {
    setComponent(compo);
  };

  return (
    <div className="flex pt-12 gap-8 font-inter ">
      <div className="bg-blue-100 w-1/6 flex flex-col gap-4 pt-12">
        <div className={` p-2 ${component==="profile"?"bg-blue-600":"bg-white"} cursor-pointer`}>
          <Link to="/profile" onClick={() => handleClick("profile")}>
            Profile
          </Link>
        </div>
        <div className={` p-2 ${component==="member"?"bg-blue-600":"bg-white"} cursor-pointer`} onClick={() => handleClick("member")}>
          <Link to="/profile/membership ">Membership</Link>
        </div>
      </div>
      <div className="w-5/6 px-12">
          {component==="member"?<Membership/>:<Profile/>}
      </div>
    </div>
  );
};

export default ProfilePage;
