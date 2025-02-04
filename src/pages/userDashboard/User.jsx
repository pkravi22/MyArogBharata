import React, { useState } from 'react'
import UserProfile from './UserProfile'
import UserLeaderboard from './UserLeaderboard'
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const [component, setComponent] = useState("profile");
  const handleClick = (compo) => {
    setComponent(compo);
    console.log(component)
  };
  return (
    <div className="flex pt-12 gap-8 font-inter  ">
      <div className="bg-blue-100 w-1/6 flex flex-col gap-4 pt-12 ">
        <div className={` p-2 ${component==="profile"?"bg-blue-600":"bg-white"} cursor-pointer`}>
          <Link to="/user" onClick={() => handleClick("profile")}>
            Profile
          </Link>
        </div>
        <div className={` p-2 ${component==="patients"?"bg-blue-600":"bg-white"} cursor-pointer`} onClick={() => handleClick("leaderboard")}>
          <Link to="/user">Leaderboard</Link>
        </div>
      </div>
      <div className="w-5/6">
          {component==="profile"?<UserProfile/>:<UserLeaderboard/>}
      </div>
    </div>
  )
}

export default User