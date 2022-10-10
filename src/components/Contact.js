import React from "react";
import adam from "../assets/Andrew.png";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import samantha from "../assets/Samantha.png";
import excellogo from "../assets/excel_logo.svg";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import { BsFacebook ,BsLinkedin,BsTwitter,BsTelephoneFill,BsFillEnvelopeFill} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";


export const Contact = () => {
  return (
    <div className="md:h-[100vh] ">
      <div className="flex flex-row items-center pl-10">
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5  px-2">CONTACT US</h3>
      </div>
      <div className="flex flex-col mx-auto justify-center md:flex-row md:justify-around md:px-5 gap-8">
        <div className="gap-4 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img src={adam} />
              </div>
            </div>
            <div class="text-container">
              <h3>Andrew Sparks</h3>
              <h5 className="text-sm">Designation</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center ">
                <a href="">
                  <BsTelephoneFill/>
                </a>
                <a href="">
                  <BsFillEnvelopeFill/>
                </a>
                <a href="">
                  <BsLinkedin/>                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="gap-4 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img src={adam} />
              </div>
            </div>
            <div class="text-container">
              <h3>Andrew Sparks</h3>
              <h5 className="text-sm">Designation</h5>
              <div className="flex flex-row gap-8 mt-3 justify-center">
                <a href="">
                  <BsTelephoneFill/>
                </a>
                <a href="">
                  <BsFillEnvelopeFill/>
                </a>
                <a href="">
                  <BsLinkedin/>                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="gap-4 pb-5 mx-auto">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <img src={samantha} />
              </div>
            </div>
            <div class="text-container">
              <h3>Samantha Sparks</h3>
              <h5 className="text-sm">Designation</h5>
              <div className="flex flex-row gap-8 mt-3  justify-center  ">
                <a href="">
                  <BsTelephoneFill/>
                </a>
                <a href="">
                  <BsFillEnvelopeFill/>
                </a>
                <a href="">
                  <BsLinkedin/>                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2029] min-h-[344px]  text-white p-5 md:px-5 md:py-0 flex flex-col justify-evenly items-center gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
        
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 md:gap-16 md:col-end-3 md:row-end-3 ">
          <div ><a href="home" className="hover:underline hover:text-white">HOME</a></div>
          <div ><a href="home" className="hover:underline hover:text-white">ABOUT</a> </div>
          <div ><a href="home" className="hover:underline hover:text-white">PHASES</a></div>
          <div ><a href="home" className="hover:underline hover:text-white">CONTACT</a></div>
        </div>
        <div className="flex flex-row justify-end items-center gap-4 md:gap-16 md:col-end-3 md:row-start-1">
          <a href="" className="hover:text-white">
          <BsFacebook size={22}/>
            
          </a>
          <a href="" >
            <RiInstagramFill size={22} />
          </a>
          <a href="">
            <BsTwitter size={22}/>
          </a>
          <a href="">
            <BsLinkedin size={22}/>
          </a>
        </div>
        <div>
          <img
            className="h-[117px] w-[117px] md:col-start-1 md:row-start-1 "
            src={excellogo}
          />
        </div>
        <div className="md:col-start-1 md:row-end-3 ">
          <p>Made with 🤍 Excel 2022</p>
        </div>
      </div>
    </div>
  );
};
