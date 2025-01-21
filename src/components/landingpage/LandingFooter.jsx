import React from "react";

const LandingFooter = () => {
  return (
    <div className="h-[300px] border border-b-2 flex flex-col gap-12 py-16  bg-white  px-8">
      <div className="pb-4">About US</div>
      <div className="font-bold">
        <h1>Contact us:</h1>
        <p>Mail us at:</p>
        <p>Call us:</p>
      </div>
    </div>
  );
};

export default LandingFooter;
