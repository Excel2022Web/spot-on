import React from "react";
import vec1 from "../assets/vec11.svg";
import vec2 from "../assets/vec22.svg";
import vec3 from "../assets/vec33.png";
import vec4 from "../assets/vec44.png";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var reveals1 = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementTop1 = reveals1[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible ||elementTop1<windowHeight-elementVisible) {
      reveals[i].classList.add("active");
      reveals1[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
      reveals1[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export function reveal2() {
  var reveals = document.querySelectorAll(".home");
  

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
   
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible ) {
      reveals[i].classList.add("active");
      
    } else {
      reveals[i].classList.remove("active");
  
    }
  }
}

window.addEventListener("scroll", reveal2);


export const Lobby = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-20 mt-12 ">
      <div class=" rounded-lg  ">
        <img
          src={vec1}
          alt="Laptop on Desk"
          width="200"
          height="200"
          class="md:w-1/2  mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div class="p-6">
          <h2 class=" mx-auto  lobby-text">
            Exciting Cash
            <br />
            Prices
          </h2>
        </div>
      </div>
      <div class=" rounded-lg  ">
        <img
          src={vec2}
          alt="Laptop on Desk"
          width="200"
          height="200"
          class="md:w-1/2 mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div class="p-6">
          <h2 class="  mx-auto lobby-text">Networking</h2>
        </div>
      </div>

      <div class=" rounded-lg  ">
        <img
          src={vec3}
          alt="Laptop on Desk"
          width="200"
          height="200"
          class="md:w-1/2 mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div class="p-6">
          <h2 class=" mx-auto lobby-text">Expert Feedback</h2>
        </div>
      </div>

      <div class=" rounded-lg  ">
        <img
          src={vec4}
          alt="Laptop on Desk"
          width="200"
          height="200"
          class="md:w-1/2 mx-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none icons pointer-events-none"
        />
        <div class="p-6">
          <h2 class=" mx-auto  lobby-text">
            Express <br />
            Yourself
          </h2>
        </div>
      </div>
    </div>
  );
};
