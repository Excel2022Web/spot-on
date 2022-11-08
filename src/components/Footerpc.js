import React from 'react'
import {

  BsTwitter

} from "react-icons/bs";
import excellogo from "../assets/excel_logo.svg";
import modellogo from "../assets/collegelogo.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaHeart } from "react-icons/fa";

export const Footerpc = () => {
  return (

    <div className="footer">
    <div className=" hidden mx-auto md:block h-[0.6px] bg-[#00000042] items-center  self-center w-[80%] "></div>
      <div className="  footer-bg min-h-[300px]  text-white p-5 md:px-5 md:py-0   items-center grid md:grid-cols-3 md:grid-rows-1 md:gap-4">
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
      
  )
}

