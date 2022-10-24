import React from 'react'

import mainbg from "../assets/mainbg.png";
import waves from "../assets/Wave.svg";
import centerimg from "../assets/centerimg.svg"

const Homemobile = () => {
  return (
   <div className=" grid grid-cols-1 items-center content-center">
      
       
      
       
     
    <div className=" flex flex-col items-center content-center ">
        <div className=" scale-[0.7]">
          <img src={centerimg} className="z-1"/>
              
        </div>
        
      
             <div className=" flex flex-col items-center content-center ">
                  <div className=" ml-5 ">
          <p className="maintext  ">
            MAKE YOUR <br />
            VOICE COUNT!
            <br />
          </p>
          </div>
        
           <button class="content-center button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600">
            REGISTER NOW
          </button>
      </div>
 
       
  
      
      
         
           <img src={mainbg} className="-z-50 mainbg bg-cover md:bg-auto absolute top-0 " />
          </div>
     
        </div>
      
  )
}

export default Homemobile