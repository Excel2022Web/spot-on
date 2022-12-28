import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Phases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const phaseCardStyle =
    "w-auto flex-1  h-auto p-2 md:p-4 container1  rounded-xl  pt-5 max-w-[500px] max-h-[600px]";
  const phaseNumberStyle =
    "text-center text-xl md:text-xl font-semibold";

  const phaseDescriptionStyle = "px-4  text-xl md:text-[17.5px]";

  return (
    <div ref={ref} className=" phasesbg text-white px-2  md:min-h-[100vh] ">
      <div className="flex flex-col mt-4 pl-10 py-8">
        {/* <motion.h3
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-[32px] flex-start mt-2 px-2 py-5"
        >
          PHASE 1 - ONLINE
        </motion.h3> */}
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex flex-row items-center pl-5 md:pl-10 "
        >
          <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
          <h3 className="text-[32px] py-5  px-2">PHASE 1 - ONLINE</h3>
        </motion.div>
        <motion.h2
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
          className="text-center items-center font-light md:text-[28px] px-2"
        >
          Submit in one or both of the following tracks
        </motion.h2>
      </div>
      <motion.div className="flex flex-col md:flex-row justify-center pb-4 px-10 gap-10 md:gap-10">
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
          className={phaseCardStyle}
        >
          <h4 className={phaseNumberStyle}>Track 1</h4>

          <p className={phaseDescriptionStyle}>
            Write a short essay, revolving around any historical or ongoing
            human rights violation issue. Analyse the facts, lay out the view
            points of the various stakeholders, and present your own opinions on
            how things turned out or possible actions that can now be taken. Ex.
            the Holocaust.
            <br />
            <br />
            Rules:
            <br />
            1. The essay must not exceed 1000 words in length.
            <br />
            2. Prefer issues that have multiple valid (opposing) viewpoints.
            <br />
            3. Avoid speculation when initially presenting the issue.
          </p>
        </motion.div>

        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
          className={phaseCardStyle}
        >
          <h4 className={phaseNumberStyle}>Track 2</h4>

          <p className={phaseDescriptionStyle}>
            Write a short story, the main character of which is an inanimate
            object. Go wild with quirky, humorous, insightful or deep plots of
            your liking, so long as it is from the object's perspective. Ex. A
            coffin wishing it were a cupboard instead.
            <br />
            <br />
            Rules:
            <br />
            <br />
            1. The story must not exceed 800 words in length.
            <br />
            2. The story must have at least two characters.
            <br />
            3. The main character of the story must be an inanimate object.
            <br />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};