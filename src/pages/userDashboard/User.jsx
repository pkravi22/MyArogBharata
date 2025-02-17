import React, { useState } from 'react'
import UserProfile from './UserProfile'
import UserLeaderboard from './UserLeaderboard'
import { Link, useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
const User = () => {
  const navigate = useNavigate();
  const [component, setComponent] = useState("profile");
  const handleClick = (compo) => {
    setComponent(compo);
    console.log(component);
  };
  return (
    <div className="flex pt-12 gap-8 font-inter  ">
      <div className="bg-blue-100 w-1/6 flex flex-col gap-4 mx-auto  pt-12 ">
        <div
          className={` p-2 ${
            component === "profile" ? "bg-blue-600" : "bg-white"
          } flex  text-center cursor-pointer`} onClick={() => handleClick("profile")}

        >
          <div className='md:pl-8'>
          
            <Link to="/user" >
              Profile 
            </Link>
          </div>
          <div>
            <MdNavigateNext size={25}/>
          </div>
        </div>
        <div
          className={` p-2 ${
            component === "leaderboard" ? "bg-blue-600" : "bg-white"
          } flex gap-2 text-center cursor-pointer`}
          onClick={() => handleClick("leaderboard")}
        >
          <div className='pl-8'><Link to="/user">Leaderboard</Link></div>
          <div>
            <MdNavigateNext size={25}/>
          </div>
        </div>
      </div>
      <div className="w-5/6">
        {component === "profile" ? <UserProfile /> : <UserLeaderboard />}
      </div>
    </div>
  );
};

export default User