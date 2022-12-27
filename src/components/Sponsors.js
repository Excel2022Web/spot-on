import React, { useRef } from "react";

import ukxpress from "../assets/ukxpress.jpg";
import toastmasters from "../assets/toastmasters.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-row items-center pl-5 md:pl-10 "
      >
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5 md:py-5 px-2">SPONSORS</h3>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-18 items-center justify-center content-center ">
        <img
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
          alt=""
          src={ukxpress}
          className="self-center w-[150px]"
        />
        <img
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
          alt=""
          src={toastmasters}
          className="w-[150px] "
        />
      </div>
    </div>
  );
};
