import React from "react";
import sponsor1 from "../assets/collegelogo.svg";
export const Sponsors = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center pl-5 md:pl-10 ">
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5 md:py-5 px-2">SPONSORS</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-16 items-center justify-center content-center ">
        <img alt="sponsor" src={sponsor1} className="self-center" />
        <img alt="sponsor" src={sponsor1} />
      </div>
    </div>
  );
};
