import React from 'react'

import mainbg from "../assets/mobilebg.svg";
import waves from "../assets/Wave.svg";
import centerimg from "../assets/centerimg.svg"

const Homemobile = () => {
  return (
   <div className="phasesbg2 grid grid-cols-1 items-center content-center">
      
       
      
       
     
    <div className="  flex flex-col items-center content-center pb-16 ">
        <div className=" scale-[0.7]">
          <img src={centerimg} className="z-1"/>
              
        </div>
        
      
             <div className=" flex flex-col items-center content-center ">
                  <div className=" ">
          <p className="maintext text-center self-center items-center ">
            MAKE YOUR 
            VOICE COUNT!
            <br />
          </p>
          </div>
        
           <button class="content-center button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600">
            REGISTER NOW
          </button>
      </div>
 
       
  
      
      
         
           
          </div>
     
        </div>
      
  )
}

export default Homemobile