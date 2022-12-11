import React from "react";

import { FaFacebookF, FaHeart, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
import excellogo from "../assets/excel_logo.svg";
import modellogo from "../assets/collegelogo.svg";

import "./footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer2">
      <div className="container footer__main">
        <div className="footer-social">
          <div className="footer-social-college">
            <a href="https://www.mec.ac.in/" target="_blank" rel="noreferrer">
              <img src={modellogo} className="mec__logo" alt="mec_logo" />
            </a>
          </div>

          <div className="footer-social-socialmedia">
            <a href="https://www.facebook.com/excelmec" target="_blank" rel="noreferrer">
              <FaFacebookF className="contact_social_icon" />
            </a>
            <a href="https://www.instagram.com/excelmec/" target="_blank" rel="noreferrer">
              <RiInstagramFill className="contact_social_icon" />
            </a>
            <a href="https://www.linkedin.com/company/excelmec/" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="contact_social_icon" />
            </a>
            <a href="https://twitter.com/excelmec" target="_blank" rel="noreferrer">
              <BsTwitter className="contact_social_icon" />
            </a>
          </div>

          <div className="footer-social-event">
            <a href="https://excelmec.org/" target="_blank" rel="noreferrer">
              <img src={excellogo} className="excel__logo" alt="excel_logo" />
            </a>
          </div>
        </div>
        {/* <div className="footer_nav">
            <Link style={{color: 'white'}} to='about'>About Us</Link>            
            <Link style={{color: 'white'}} to='contact-us'>Contact Us</Link>            
            <Link style={{color: 'white'}} to='services'>Services</Link>            
            <Link style={{color: 'white'}} to='privacy-policy'>Privacy Policy</Link>                        
            <Link style={{color: 'white'}} to='terms'>Terms & Conditions</Link>                                   
        </div> */}
        <div className="footer-madewith">
          Made with{"  "}
          <span>
            <FaHeart className=" inline-block" />
          </span>{"  "}
          Excel 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
