import React from "react";
import mainbg from "../assets/mainbg.png";
import waves from "../assets/Wave.svg";
import centerimg from "../assets/centerimg.svg"

export const Home = () => {
  return (
    <div className=" ">
      
          <img src={mainbg} className="-z-1 mainbg bg-contain md:bg-auto absolute top-0 " />
      
       
     
    <div className=" flex flex-col">
        <div className="justify-center ">
          <img src={centerimg} className="z-1"/>
              
        </div>
      <div>
        
           <button class=" button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600">
            REGISTER NOW
          </button>
      </div>
        </div>
  
      
        <div className="absolute ml-5 md:left-[600px] xl:left-[952px] top-[200px] xl:md:top-[270px] px-2">
          <p className="maintext ">
            MAKE YOUR <br />
            VOICE COUNT!
            <br />
          </p>
          </div>
     
        </div>
      
   
  );
};
