import React, { useRef } from "react";
import mic from "../assets/mic2.svg";
import { motion, useInView } from "framer-motion";

export const Aboutpage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div ref={ref} className="h-auto">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-row items-center pl-5 md:pl-10  "
      >
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5 md:py-5 px-1 md:px-2">ABOUT</h3>
      </motion.div>
      <div className="flex flex-row">
        <div>
          <img
            src={mic}
            alt="mic"
            className="mic -z-10 overflow-hidden top-0 relative mic_mob"
          />
        </div>
        <div className="about-text-box md:right-0 md:p-5 md:w-[1028px] md:h-auto">


          <motion.p
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="about-text text-lg leading-[25px] md:leading-[30px] md:text-[18px] px-4"
          >

            <span className="italic ">
              “The worst speech you'll ever give, will be far better than the
              one you never give.“
            </span>
            <br />
            <span className="font-bold">- Fred Miller</span>
            <br />
            <br />
            Slice through the stage with razor-sharp words and bring your pen down to free your imagination from the confines of your mind with us at Spot On, a unique opportunity presented by Excel 2022, in collaboration with Toastmasters International! As our slogan goes this year, write brilliance, speak wisdom with confidence to bare to all the orator within and embrace victory. 
            <br />
            <br />
            Spot On is a platform like no other with creative challenges designed to bring out the potential within you. 
            <br />
            <br />
            This year, we bring to you two phases:<br />
            <li>One for those who seek to fill out bestsellers in the next decade</li> 
            <li>And the other for those who wish to hold audiences captive at their every word. </li>
            <br />
            Registrations for Phase 2 are now open!
            <br />
            <br />
            <span className="font-bold">NOTE:</span> < br />
            <li>The two Spot On phases for this year are independent and you may take part in either or both of them. </li>
            <li>Eligibility: Anyone of or above 16 years of age, studying in a school or college, may take part.</li>
          </motion.p>
          
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};
