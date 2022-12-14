import React from "react";
import mainbg from "../assets/mainbg.png";

import centerimg from "../assets/centerimg.svg"

export const Homeold = () => {
  return (
    <div className="">
     
      <div className="grid grid-rows-2">
        <div className="flex flex-col absolute md:left-[537px] md:top-[170px]">
          <div className="justify-center ">
          <img src={centerimg} className="" alt=""/>
              
        </div>
        <div className=" ml-5">
           <button className=" button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600">
            REGISTER NOW
          </button>
        </div>
        </div>
        <div className="absolute ml-5 left-[600px] xl:left-[952px] top-[200px] xl:md:top-[270px] px-2">
          <p className="maintext ">
            MAKE YOUR <br />
            VOICE COUNT!
            <br />
          </p>
          
     
        </div>
        <div className=" -z-10 w-full   ">
          <img src={mainbg} className="mainbg bg-contain md:bg-auto absolute top-0 " alt=""/>
      
        </div>
      </div>
    </div>
  );
};
