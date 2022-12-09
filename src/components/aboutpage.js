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
              “Communication works for those who work at it “
            </span>
            <br />
            <span className="font-bold">- John Powell</span>
            <br />
            <br />
            Welcome to Spot On, an oratory competition for students, organized
            by Excel 2021 in collaboration with Toastmasters International. Spot
            On is a one-of-a-kind platform for the aspiring orator in you, to
            test your communicative prowess and your ability to conjure minds
            with the magic of words. Showcase your talent to speak creatively,
            your ability to counter logically and conquer people with
            confidence! Register for Spot On before Dec 1st 2021, for a mere fee
            of ₹30 and win exciting prizes!
          </motion.p>
          <motion.button
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            className="button2 text-white font-bold py-2 px-4 mt-2 rounded "
          >
            RULES AND GUIDELINES
          </motion.button>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};
