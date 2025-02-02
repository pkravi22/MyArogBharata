import React from "react";
import FooterLogo from "../../assets/footerLogo.webp";
const WebinarFooter = () => {
  return (
    <>
      <div className="flex justify-center items-center  py-12 ">
        <img src={FooterLogo} alt="footer logo" className="w-[500px]" />
      </div>
    </>
  );
};

export default WebinarFooter;
