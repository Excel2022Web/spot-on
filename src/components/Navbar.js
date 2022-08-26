import React from 'react'

export const Navbar = () => {
  return (
    <nav class=" navbar navbar-expand-lg navbar-dark z-3 shadow-sm bg-transparent-100 fixed">
   
    <div class="container-fluid">
    <a class="navbar-brand d-lg-none title mx-auto" href="#">SPOT ON</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    
    <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav   mx-auto gap-10">
            <li class="nav-item md:mr-20 md:ml-12">
                <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item md:mr-20 md:ml-12">
                <a class="nav-link" href="#about">About</a>
            </li>
            <li class=" nav-item title mx-[100px]">
                <a class="nav-link title" href="#">SPOT ON</a>
            </li>
            <li class="nav-item md:mr-20 md:ml-20">
                <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item md:mr-20">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
    </div>
    </nav>


    
  )
}
