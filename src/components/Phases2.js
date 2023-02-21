import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Phases2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const phaseCardStyle =
    "w-auto flex-1  h-auto p-2 md:p-4 container1  rounded-xl  pt-3 max-w-[500px] max-h-[650px]";
  const phaseNumberStyle =
    "text-center text-xl md:text-xl font-semibold";

  const phaseDescriptionStyle = "px-4  text-xl md:text-[17.5px]";

  return (
    <div ref={ref} className=" phasesbg text-white px-2 pb-3 md:min-h-[100vh] md:pb-1">
      <div className="flex flex-col mt-4 pl-10 py-8">
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex flex-row items-center pl-5 md:pl-10 "
        >
          <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
          <h3 className="text-[32px] py-5  px-2">PHASE 2 - OFFLINE</h3>
        </motion.div>
        <motion.h3
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
          className="text-center items-center font-light md:text-[28px] px-2"
        >
          This phase will consist of two rounds as specified below and will be held on March 10th, with the venue being Govt. Model Engineering College.
        </motion.h3>
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
          <h4 className={phaseNumberStyle}>Round 1: Tell A Photo Story</h4>

          <p className={phaseDescriptionStyle}>
            Attention all storytellers and imagination enthusiasts! Are you ready to take on the challenge of crafting a captivating narrative on the spot? 
            <br /><br />
            Well, get ready to put your creative abilities to the ultimate test as we provide you with a photo that will transport you to a world of unknown characters, unfamiliar settings, and unforeseen circumstances. Your task is to unravel the mystery behind the photo, and craft a story that is so intriguing, so compelling, that it will leave us begging for more.
            <br /><br />
            Do you have what it takes to create a world from a single snapshot?
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
          <h4 className={phaseNumberStyle}>Round 2: Knockout Debate</h4>

          <p className={phaseDescriptionStyle}>
            Once you’ve gotten through, it will be time to prove your grit in a classic knockout debate competition, where things will likely begin to heat up! In this round, we're challenging you to bring your best arguments and show us what you're made of.
            <br /><br />
            Don't worry, though, because while the competition may be fierce, the atmosphere is light and playful. We want you to have fun, be creative, and think outside the box. You'll be presented with interesting and thought-provoking topics that are sure to spark your imagination and lead to some lively discussions.
            <br /><br />
            So grab a seat, relax, and get ready to engage in some friendly banter with your fellow debaters. Remember, while we're looking for the strongest argument, we're also looking for creativity and originality. You never know, you might even learn something new or change your mind on a topic you thought you knew all there was to know about!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};