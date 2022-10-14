import React from "react";
import mainbg from "../assets/mainbg.png";
import waves from "../assets/Wave.svg";
import centerimg from "../assets/centerimg.svg"

export const Home = () => {
  return (
    
    <div className=" grid md:grid-cols-3">
      
       
      
       
     
    <div className=" flex flex-col md:col-start-2 col-starts-1 mt-5 ">
        <div className="absolute scale-75 md:scale-100 md:static left-[40px] md:self-center md:items-center ">
          <img src={centerimg} className="z-1"/>
              
        </div>
             <div className="md:self-center mt-3">
        
           <button class="md:col-starts-2 content-center button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600">
            REGISTER NOW
          </button>
      </div>
 
        </div>
  
      
        <div className=" ml-5 px-2 absolute top-[112px] left-[200px] xl:left-[952px] top-[200px] xl:md:top-[270px] px-2">
          <p className="maintext  ">
            MAKE YOUR <br />
            VOICE COUNT!
            <br />
          </p>
          </div>
           <img src={mainbg} className="-z-50 mainbg bg-contain md:bg-auto absolute top-0 " />
          
     
        </div>
      
   
  );
};