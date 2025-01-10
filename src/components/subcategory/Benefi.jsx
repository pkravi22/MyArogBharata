import React from "react";
import scroll from "../../assets/scroll.webp";

const Benefit = () => {
  return (
    <div className="w-screen h-[200px] overflow-hidden md:overflow-x-auto flex justify-center items-center">
      <img
        src={scroll}
        alt="Sample Image"
        className="w-auto h-full md:min-w-[1400px] object-contain"
      />
    </div>
  );
};

export default Benefit;


