import React, { useEffect, useState } from "react";

export const Navbar = () => {
  return (
    <nav class="  navbar navbar-expand-lg navbar-dark z-20 shadow-sm bg-black md:bg-transparent-100 fixed">
      <div class="container-fluid">
        <div class=" nav-item title nav-item">
          <a class="navbar-brand d-lg-none  mx-5 title " href="#">
            SPOT ON
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse z-2" id="navbar">
          <ul class="navbar-nav   mx-auto gap-10">
            <li class="nav-item md:mr-20 md:ml-12">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item md:mr-20 md:ml-12">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <div class="  d-none d-md-block nav-item title mx-[100px]">
              <a class="nav-link title   " href="#">
                SPOT ON
              </a>
            </div>

            <li class="nav-item md:mr-20 md:ml-20">
              <a class="nav-link" href="#phases">
                Services
              </a>
            </li>
            <li class="nav-item md:mr-20">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
