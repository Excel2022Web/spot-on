import React from "react";

import centerimg from "../assets/centerimg.svg";
import { motion } from "framer-motion";

const Homemobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="phasesbg2 grid grid-cols-1 items-center content-center"
    >
      <div className="  flex flex-col items-center content-center pb-16 ">
        <div className=" scale-[0.7]">
          <motion.img
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            src={centerimg}
            alt="jzf"
            className="z-1"
          />
        </div>

        <div className=" flex flex-col items-center content-center ">
          <div className=" ">
            <motion.p className="maintext text-center self-center items-center ">
              <motion.span
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                SPEAK WISDOM <br />
              </motion.span>
              {"  "}
              <motion.span
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                WRITE BRILLIANCE <br />
              </motion.span>
              {"  "}
              <motion.span
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                EMBRACE VICTORY
              </motion.span>
              <br />
            </motion.p>
          </div>

          <motion.a
            href="https://forms.gle/WgJw6Ls2qjoCW5XEA"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="content-center button1 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-red-600"
          >
            REGISTER FOR PHASE 2
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Homemobile;
