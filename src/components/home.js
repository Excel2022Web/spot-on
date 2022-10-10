import React from "react";
import mainbg from "../assets/mainbg.png";
import waves from "../assets/Wave.svg";

export const Home = () => {
  return (
    <div className="">
      <div className="overlay"></div>
      <div className="grid grid-rows-2">
        <div className="absolute ml-5 md:left-[6cd00px] xl:left-[952px] top-[200px] xl:md:top-[270px] px-2">
          <p className="maintext ">
            MAKE YOUR <br />
            VOICE COUNT!
            <br />
          </p>
          
          <button class="button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600">
            REGISTER NOW
          </button>
        </div>
        <div className=" -z-10 w-full   ">
          <img src={mainbg} className="mainbg absolute top-0 " />
      
        </div>
      </div>
    </div>
  );
};
