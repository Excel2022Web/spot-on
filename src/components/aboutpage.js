import React from "react";
import mic from "../assets/mic2.svg";
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
export const Aboutpage = () => {
  return (
    <>
      <div className="flex flex-row items-center pl-10 ">
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5 md:py-5 px-2">ABOUT</h3>
      </div>
      <div className="flex flex-row">
        <div>
          <img src={mic} className="mic -z-10 overflow-hidden top-0 relative" />
        </div>
        <div className="about-text-box md:right-0 md:p-5  md:w-[1028px] md:h-[535px]">
          <p className="about-text text-[18px] leading-[25px] md:leading-[30px] md:text-[24px] ">
            <span className="italic ">“Communication works for those who work at it “</span><br />
            <span className="font-bold">- John Powell</span>
            <br />
            <br />
            Welcome to Spot On, an oratory competition for students, organized
            by Excel 2021 in collaboration with Toastmasters International. Spot
            On is a one-of-a-kind platform for the aspiring orator in you, to
            test your communicative prowess and your ability to conjure minds
            with the magic of words. Showcase your talent to speak creatively,
            your ability to counter logically and conquer people with
            confidence! Register for Spot On before Dec 1st 2021, for a mere fee
            of ₹30 and win exciting prizes!
          </p>
          <button class="button2 text-white font-bold py-2 px-4 mt-2 rounded ">
            RULES AND GUIDELINES
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};