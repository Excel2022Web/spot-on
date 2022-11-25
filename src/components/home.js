import React from "react";
import mainbg from "../assets/mainbg.png";

import centerimg from "../assets/centerimg.svg";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div className=" grid md:grid-cols-3 h-[100vh]">
      <div className=" flex flex-col md:col-start-2 col-starts-1 mt-5 ">
        <div className="absolute scale-75 md:scale-100 md:static left-[40px] md:self-center md:items-center ">
          <motion.img
            whileHover={{
              transform: "rotateY(180deg)",
              transition: { duration: 1 },
            }}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            alt="ousus"
            src={centerimg}
            className="z-1"
          />
        </div>
        <div className="md:self-center mt-3">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            class="md:col-starts-2 content-center button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600"
          >
            REGISTER NOW
          </motion.button>
        </div>
      </div>

      <div className=" ml-5 px-2 absolute top-[112px] left-[200px] xl:left-[952px] top-[200px] xl:md:top-[270px] px-2">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="maintext  "
        >
          MAKE YOUR <br />
          VOICE COUNT!
          <br />
        </motion.p>
      </div>
      <motion.img
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={mainbg}
        alt="ousus"
        className="-z-50 mainbg bg-contain md:bg-auto absolute top-0 "
      />
    </motion.div>
  );
};
