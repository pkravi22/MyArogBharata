import React from "react";

const ArrowLine = ({ className }) => {
  console.log("hell " + className);
  return (
    <div className="flex items-center">
      {/* Line */}
      <div className={`h-[2px] ${className} bg-orange-500`}></div>

      <div className="relative ">
        <div className="absolute ml-2 -top-0.5 w-[15px] h-[2px] -rotate-[15deg] bg-orange-500"></div>

        <div className="absolute w-[15px] h-[2px] bg-orange-500 -rotate-45 -top-[7px] left-[3px]"></div>
        <div className="absolute w-[15px] h-[2px] bg-orange-500 rotate-45 top-[7px] left-[3px]"></div>
      </div>
    </div>
  );
};

export default ArrowLine;
