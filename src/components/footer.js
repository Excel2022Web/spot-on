import React from 'react'
import wave from '../assets/Wavefooterwave.png';
import excellogo from '../assets/excel_logo.svg';
import adam from "../assets/Andrew.png";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import samantha from "../assets/Samantha.png";
import { BsFacebook ,BsLinkedin,BsTwitter,BsTelephoneFill,BsFillEnvelopeFill} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";



export const Footer = () => {
    const style = { color: "red"}
  return (
   <div>
     <img src={wave} className="static bottom-0 w-full"/>
     <div className="flex flex-row justify-end items-center gap-4 md:gap-16 md:col-end-3 md:row-start-1">
          <a href="" className="hover:text-white">
          <BsFacebook size={22}/>
            
          </a>
          <a href="" >
            <RiInstagramFill size={22} style={style}/>
          </a>
          <a href="">
            <BsTwitter size={22}/>
          </a>
          <a href="">
            <BsLinkedin size={22} />
          </a>
        </div>
        <div>
          <img
            className="h-[117px] w-[117px] md:col-start-1 md:row-start-1 "
            src={excellogo}
          />
        </div>
        <div className=" ">
          <p className='text-'>Made with 🤍 Excel 2022</p>
        </div>
      </div>

    
  )
}
