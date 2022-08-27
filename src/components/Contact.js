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

export const Contact = () => {
  return (
    <div className="md:h-screen md:overflow-hidden">
      <div className="flex flex-row items-center pl-10 ml-5">
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5 md:py-0 px-2">CONTACT US</h3>
      </div>
      <div className="flex flex-col mx-auto justify-center md:flex-row md:justify-around px-5 gap-8">
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
              <div className="flex flex-row gap-8 mt-3 px-4 ml-[10px] ">
                <a href="">
                  <img src={phone} className="h-[15px] w-[15px]" />
                </a>
                <a href="">
                  <img src={email} className="h-[15px] w-[15px]" />
                </a>
                <a href="">
                  <img src={linkedin} className="h-[15px] w-[15px]" />
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
                <img src={adam} />
              </div>
            </div>
            <div class="text-container">
              <h3>Andrew Sparks</h3>
              <h5 className="text-sm">Designation</h5>
              <div className="flex flex-row gap-8 mt-3 px-4 ml-[10px] ">
                <a href="">
                  <img src={phone} className="h-[15px] w-[15px]" />
                </a>
                <a href="">
                  <img src={email} className="h-[15px] w-[15px]" />
                </a>
                <a href="">
                  <img src={linkedin} className="h-[15px] w-[15px]" />
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
                <img src={samantha} />
              </div>
            </div>
            <div class="text-container">
              <h3>Samantha Sparks</h3>
              <h5 className="text-sm">Designation</h5>
              <div className="flex flex-row gap-8 mt-3 px-4 ml-[10px] ">
                <a href="">
                  <img src={phone} className="h-[15px] w-[15px]" />
                </a>
                <a href="">
                  <img src={email} className="h-[15px] w-[15px]" />
                </a>
                <a href="">
                  <img src={linkedin} className="h-[15px] w-[15px]" />
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2029] min-h-[344px]  text-white p-5 md:px-5 md:py-0 flex flex-col justify-evenly items-center gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 md:gap-16 md:col-end-3 md:row-end-3 pb-2">
          <div>HOME</div>
          <div>ABOUT</div>
          <div>PHASES</div>
          <div>CONTACT</div>
        </div>
        <div className="flex flex-row justify-end items-center gap-4 md:gap-16 md:col-end-3 md:row-start-1">
          <a>
            <img className="h-[32px] w-[32px]" src={facebook} />
          </a>
          <a>
            <img className="h-[32px] w-[32px]" src={instagram} />
          </a>
          <a>
            <img className="h-[32px] w-[32px]" src={twitter} />
          </a>
          <a>
            <img className="h-[32px] w-[32px]" src={linkedin} />
          </a>
        </div>
        <div>
          <img
            className="h-[117px] w-[117px] md:col-start-1 md:row-start-1 "
            src={excellogo}
          />
        </div>
        <div className="md:col-start-1 md:row-end-3 pb-2 ">
          <p>Made with 🤍 Excel 2022</p>
        </div>
      </div>
    </div>
  );
};
