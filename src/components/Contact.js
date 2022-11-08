import React from "react";
import adam from "../assets/Nasreen.jpeg";
import hemanth from '../assets/hemanth.jpeg'
import sebin from '../assets/Sebin.jpeg'

import samantha from "../assets/sai.jpeg";
import excellogo from "../assets/excel_logo.svg";
import modellogo from '../assets/collegelogo.svg'

import { BsLinkedin,BsTwitter,BsTelephoneFill,BsFillEnvelopeFill} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import {FaLinkedinIn,FaFacebookF, FaHeart} from 'react-icons/fa'

import Footer from "./Footer";



export const Contact = () => {
  return (
    <div className="md:h-[100vh] ">
      <div className="flex flex-row items-center pl-5 md:pl-10 ">
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5  px-2">CONTACT US</h3>
      </div>
      <div className="flex flex-col mx-auto  justify-center md:flex-row md:justify-around md:px-5 md:py-10 gap-16">
        <div className="gap-4 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img alt="execom" src={adam} />
              </div>
            </div>
            <div class="text-container">
              <h3>Nasreen K Basheer</h3>
              <h5 className="text-sm">Chairperson</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center ">
                <a href="tel:9605204433">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nasreenkbasheer.mec@gmail.com">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/nasreen-k-basheer-6795331a5">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="gap-4 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img alt="execom" src={hemanth} />
              </div>
            </div>
            <div class="text-container">
              <h3>Hemanth Sagar J C</h3>
              <h5 className="text-sm">General Secretary</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="">
                  <BsTelephoneFill />
                </a>
                <a href="">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/hemanth-sagar-j-c-292a98195">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="gap-4 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img alt="execom" src={sebin} />
              </div>
            </div>
            <div class="text-container">
              <h3>Sebin Davis</h3>

              <h5 className="text-sm">Joint Secretary</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="">
                  <BsTelephoneFill />
                </a>
                <a href="">
                  <BsFillEnvelopeFill />
                </a>
                <a href="https://www.linkedin.com/in/hemanth-sagar-j-c-292a98195">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="gap-4 pb-5 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img alt="execom" src={samantha} />
              </div>
            </div>
            <div class="text-container">
              <h3>Ananda Sai</h3>

              <h5 className="text-sm">Talks Manager</h5>
              <div className="flex flex-row gap-8 mt-3  justify-center  ">
                <a href="">
                  <BsTelephoneFill />
                </a>
                <a href="">
                  <BsFillEnvelopeFill />
                </a>
                <a href="">
                  <BsLinkedin />{" "}
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      
     <div className="block md:hidden">
      <Footer />
     </div>
      <div className=" hidden mx-auto md:block h-[0.6px] bg-[#00000042] items-center flex self-center w-[80%] "></div>
      <div className=" hidden footer-bg min-h-[300px]  text-white p-5 md:px-5 md:py-0   items-center md:grid md:grid-cols-3 md:grid-rows-1 md:gap-4">
        <div className="flex flex-col content-center items-center gap-4 md:col-start-2 md:row-start-3 order-2">
          <div className="flex flex-row justify-end items-center gap-8 md:gap-16 md:col-start-2 md:row-end-1 pt-5">
            <a href="" className="hover:text-white">
              <FaFacebookF size={22} fill="#D31E1E" />
            </a>
            <a href="">
              <RiInstagramFill size={22} fill="#D31E1E" />
            </a>
            <a href="">
              <BsTwitter size={22} fill="#D31E1E" />
            </a>
            <a href="">
              <FaLinkedinIn size={22} fill="#D31E1E" />
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
          <img className="mx-auto scale-75 md:scale-100  " src={excellogo} />
        </div>
        <div className="flex flex-col items-center  order-3 md:col-start-3 md:row-start-3">
          <img className=" scale-75 md:scale-100 " src={modellogo} />

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
