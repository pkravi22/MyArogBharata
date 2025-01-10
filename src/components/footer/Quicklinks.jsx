import React from "react";

const QuickLinks = () => {
  const links = [
    "Services",
    "Membership",
    "Testimonial"

  ];

  return (
    <div className="w-full text-center sm:text-left py-6  px-2 md:px-2">
      <h2 className="text-black text-md font-bold mb-4 text-[24px]">Explore</h2>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <p  className=" text-[18px] text-[#1F1F1FB2]  underline underline-offset-4 font-thin" key={index}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
