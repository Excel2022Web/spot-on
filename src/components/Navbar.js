import React from "react";
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
    <nav className="navbar navbar-expand-lg navbar-light z-20 shadow-sm bg-white  ">
      <div className="container-fluid">
        <div className=" nav-item title nav-item">
          <a className="navbar-brand d-lg-none title" href="/">
            SPOT ON
          </a>
        </div>
        <button className="d-lg-none first-button mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
    aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
    <div className="navbar-togglerY animated-icon1"><span></span><span></span><span></span></div>
  </button>


        <div class="collapse navbar-collapse  z-2" id="navbar">
          <ul class="navbar-nav  mx-auto gap-20">
            <li class="nav-item " >
              <a class="nav-link single " href="#home">
                Home
              </a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link single" href="#about">
                About
              </a>
            </li>
            <div className="  d-none d-md-block nav-item title mx-[60px] md:mx-[100px]">
              <a className="nav-link title whitespace-nowrap" href="/">
                SPOT ON
              </a>
            </div>

            <li class="nav-item  ">
              <a class="nav-link single" href="#phases">
                Phases
              </a>
            </li>
            <li class="nav-item  ">
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