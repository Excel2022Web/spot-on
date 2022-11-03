import React, { useEffect, useState } from "react";
import $ from 'jquery'


$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.nav-link').on('click',function(){
    $('.navbar div').removeClass('show');
    $('.animated-icon1').toggleClass('open');

    
});

});




export const Navbar = () => {
  return (
    <nav class="  navbar navbar-expand-lg navbar-light z-20 shadow-sm bg-white  ">
      <div class="container-fluid">
        <div class=" nav-item title nav-item">
          <a class="navbar-brand d-lg-none  mx-5 title " href="#">
            SPOT ON
          </a>
        </div>
        <button class="d-lg-none first-button mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
    aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
    <div class="navbar-togglerY animated-icon1"><span></span><span></span><span></span></div>
  </button>


        <div class="collapse navbar-collapse  z-2" id="navbar">
          <ul class="navbar-nav    mx-auto gap-10">
            <li class="nav-item md:mr-20 md:ml-12" >
              <a class="nav-link single " href="#home">
                Home
              </a>
            </li>
            <li class="nav-item md:mr-20 md:ml-12 ">
              <a class="nav-link single" href="#about">
                About
              </a>
            </li>
            <div class="  d-none d-md-block nav-item title mx-[60px] md:mx-[100px]">
              <a class="nav-link title whitespace-nowrap  " href="#">
                SPOT ON
              </a>
            </div>

            <li class="nav-item md:mr-20 md:ml-20 ">
              <a class="nav-link single" href="#phases">
                Services
              </a>
            </li>
            <li class="nav-item md:mr-20 ">
              <a class="nav-link single" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};