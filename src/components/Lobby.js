import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import vec1 from "../assets/vec11.svg";
import vec2 from "../assets/vec22.svg";
import vec3 from "../assets/vec33.svg";
import vec4 from "../assets/vec44.svg";

export const Lobby = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-4 md:py-0 ">
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className=" rounded-lg flex flex-col content-center "
      >
        <img
          src={vec1}
          alt=""
          width="200"
          height="200"
          className="md:w-1/2  mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div className="p-6 flex flex-col content-center">
          <h2 className="lobby-text">
            Exciting Cash
            <br />
            Prizes
          </h2>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=" rounded-lg flex flex-col content-center "
      >
        <img
          src={vec2}
          alt=""
          width="200"
          height="200"
          className="md:w-1/2 mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div className="p-6">
          <h2 className="   lobby-text">Networking</h2>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          
        }}
        className=" rounded-lg flex flex-col content-center "
      >
        <img
          src={vec3}
          alt=""
          width="200"
          height="200"
          className="md:w-1/2 mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div className="p-6">
          <h2 className=" lobby-text">Expert Feedback</h2>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className=" rounded-lg flex flex-col content-center "
      >
        <img
          src={vec4}
          alt=""
          width="200"
          height="200"
          className="md:w-1/2 mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div className="p-6">
          <h2 className="  lobby-text">
            Express <br />
            Yourself
          </h2>
        </div>
      </motion.div>
    </div>
  );
};
