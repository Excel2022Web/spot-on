import React, { useRef } from "react";
import adam from "../assets/Nasreen.jpeg";
import hemanth from '../assets/hemanth.jpeg'
import sebin from '../assets/Sebin.jpeg'
import nikita from '../assets/nikita.jpeg'
import annama from '../assets/annama.jpeg'


import samantha from "../assets/sai.jpeg";
import excellogo from "../assets/excel_logo.svg";
import modellogo from '../assets/collegelogo.svg'

import { BsLinkedin,BsTwitter,BsTelephoneFill,BsFillEnvelopeFill} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import {FaLinkedinIn,FaFacebookF, FaHeart} from 'react-icons/fa'

import Footer from "./Footer";
import {motion, useInView} from 'framer-motion';



export const Contact = () => {
  const ref = useRef(null);
  const ref2 =useRef(null);


  const isInView = useInView(ref); 
  const isInView2 = useInView(ref2);

  return (
    <div ref={ref} className=" ">
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-row items-center pl-5 md:pl-10 "
      >
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5  px-2">CONTACT US</h3>
      </motion.div>
      <div
        ref={ref2}
        className="flex flex-col flex-wrap mx-auto md:grid md:grid-cols-4  md:justify-center self-center  md:px-5 md:py-10 gap-16"
      >
        <motion.div
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="gap-4 mx-auto"
        >
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <img alt="execom" src={adam} />
              </div>
            </div>
            <div className="text-container">
              <h3>Nasreen K Basheer</h3>
              <h5 className="text-sm">Chairperson</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center ">
                <a href="tel:919605204433" target="_blank" rel="noreferrer">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nasreenkbasheer.mec@gmail.com" target="_blank" rel="noreferrer">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/nasreen-k-basheer-6795331a5" target="_blank" rel="noreferrer">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>
        <motion.div
          
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
          className="gap-4 mx-auto"
        >
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <img alt="execom" src={hemanth} />
              </div>
            </div>
            <div className="text-container">
              <h3>Hemanth Sagar J C</h3>
              <h5 className="text-sm">General Secretary</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="tel:917012910210" target="_blank" rel="noreferrer">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:hemanthsagar.mec@gmail.com" target="_blank" rel="noreferrer">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/hemanth-sagar-j-c-292a98195" target="_blank" rel="noreferrer">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>
        <motion.div
          
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          }}
          className="gap-4 mx-auto"
        >
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <img alt="execom" src={sebin} />
              </div>
            </div>
            <div className="text-container">
              <h3>Sebin Davis</h3>

              <h5 className="text-sm">Joint Secretary</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="tel:918921212340"  target="_blank" rel="noreferrer">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:sebindavis.mec@gmail.com"  target="_blank" rel="noreferrer">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/sebin-davis-344782195"  target="_blank" rel="noreferrer">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>

        <motion.div
        
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
          className="gap-4 pb-5 mx-auto row-start-2 row-end-2 col-start-2 col-end-3"
        >
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <img alt="execom" src={samantha} />
              </div>
            </div>
            <div className="text-container">
              <h3>Ananda Sai</h3>

              <h5 className="text-sm">Talks Manager</h5>
              <div className="flex flex-row gap-8 mt-3  justify-center  ">
                <a href="tel:918086544153"  target="_blank" rel="noreferrer">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:anandasaia.mec@gmail.com"  target="_blank" rel="noreferrer">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/anandasaia"  target="_blank" rel="noreferrer">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>

        {/*  */}

        <motion.div
          
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          }}
          className="gap-4 mx-auto"
        >
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <img alt="execom" src={nikita} />
              </div>
            </div>
            <div className="text-container">
              <h3>Nikita Menon</h3>

              <h5 className="text-sm">Event Head</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="tel:8137927457"  target="_blank" rel="noreferrer">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nikitamenon2510@gmail.com"  target="_blank" rel="noreferrer">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/nikita-menon-b2248079"  target="_blank" rel="noreferrer">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          }}
          className="gap-4 mx-auto col-start-3 col-end-4"
        >
          <div className="a-box">
            <div className="img-container">
              <div className="img-inner">
                <img alt="execom" src={annama} />
              </div>
            </div>
            <div className="text-container">
              <h3>Anna M Panicker</h3>

              <h5 className="text-sm">Event Head</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="tel:9495929709"  target="_blank" rel="noreferrer">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:annampanicker@gmail.com"  target="_blank" rel="noreferrer">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/anna-m-panicker-b632aa1a3"  target="_blank" rel="noreferrer">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>

        {/*  */}
      </div>

      <div className="block md:hidden">
        <Footer />
      </div>
      <div className="hidden mx-auto md:block h-[0.6px] bg-[#00000042] items-center flex self-center w-[80%] "></div>
      <div className="hidden footer-bg min-h-[300px]  text-white p-4 md:px-4 md:py-0   items-center md:grid md:grid-cols-3 md:grid-rows-1 md:gap-4">
        <div className="flex flex-col content-center items-center gap-4 md:col-start-2 md:row-start-3 order-2">
          <div className="flex flex-row justify-end items-center gap-8 md:gap-16 md:col-start-2 md:row-end-1 pt-5">
            <a href="https://www.facebook.com/excelmec" target="_blank" rel="noreferrer">
              <FaFacebookF size={22} fill="#D31E1E" />
            </a>
            <a href="https://www.instagram.com/excelmec/">
              <RiInstagramFill size={22} fill="#D31E1E" target="_blank" rel="noreferrer"/>
            </a>
            <a href="https://twitter.com/excelmec">
              <BsTwitter size={22} fill="#D31E1E" target="_blank" rel="noreferrer"/>
            </a>
            <a href="https://www.linkedin.com/company/excelmec/">
              <FaLinkedinIn size={22} fill="#D31E1E" target="_blank" rel="noreferrer"/>
            </a>
          </div>
          <div className="hidden md:block text-[#D31E1E] ">
            <p>
              Made with{" "}
              <span>
                <FaHeart className="inline-block " />
              </span>{" "}
              Excel 2022
            </p>
          </div>
        </div>

        <div className="  grid grid-col items-center content-center  md:col-start-1 md:row-start-3 order-1">
        <a href="https://excelmec.org/" target="_blank" rel="noreferrer">
          <img className="mx-auto scale-50 md:scale-75" src={excellogo} alt=""/>
        </a>
        </div>
        <div className="flex flex-col items-center  order-3 md:col-start-3 md:row-start-3">
        <a href="https://www.mec.ac.in/" target="_blank" rel="noreferrer">
          <img className="scale-50 md:scale-75 " src={modellogo} alt=""/>
        </a>

          <div className="block md:hidden whitespace-nowrap text-[#D31E1E] ">
            <p>
              Made with{" "}
              <span>
                <FaHeart className="inline-block " />
              </span>{" "}
              Excel 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
