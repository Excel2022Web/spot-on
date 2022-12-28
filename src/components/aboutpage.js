import React, { useRef } from "react";
import mic from "../assets/mic2.svg";
import { motion, useInView } from "framer-motion";

export const Aboutpage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div ref={ref}>
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
            className="mic -z-10 overflow-hidden top-0 relative"
          />
        </div>
        <div className="about-text-box md:right-0 md:p-5  md:w-[1028px] md:h-[535px]">
          <motion.p
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="about-text text-[18px] leading-[25px] md:leading-[30px] md:text-[24px] "
          >
            <span className="italic ">
              “The worst speech you'll ever give, will be far better than the one you never give.“
            </span>
            <br />
            <span className="font-bold">- Fred Miller</span>
            <br />
            <br />
              Slice through the stage with razor-sharp words with us at Spot On, a unique opportunity presented by Excel 2022, in collaboration with Toastmasters International! As our slogan goes this year, write brilliance, speak wisdom with confidence to bare to all the orator within and embrace victory. Spot On is a platform like no other with creative challenges designed to bring out the potential within you. Submit your entries for Phase 1 of Spot On by January 8, 2022 to have a shot at a prize pool of INR 3K and qualify for Phase 2, which will be held offline during Excel!
          </motion.p>
          {/* <motion.button
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            className="button2 text-white font-bold py-2 px-4 mt-2 rounded "
          >
            RULES AND GUIDELINES
          </motion.button> */}
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};
