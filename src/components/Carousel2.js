import React from "react";

import Flickity from "react-flickity-component";

export function Carousel2() {

  const phaseCardStyle =
    "w-auto flex-1  h-auto p-2 md:p-4  container1  rounded-xl pt-4 md:pt-5 max-w-[500px]  ";
  const phaseNumberStyle =
    "text-center text-[28px] md:text-[30px] font-semibold";

  const phaseDescriptionStyle = "p-2 mb-0 md:p-6 text-[14px] md:text-[18px]";

  return (
    <div className="phasesbg min-h-[100vh]">
      <div className="flex flex-col text-white py-4 px-2">
        {/* <h3 className="text-[32px] text-center items-center py-1">
          PHASE 1 - ONLINE
        </h3> */}
        <div
          className="flex flex-row items-center pl-5 md:pl-10 "
        >
        <div className="w-[6px] h-[38px] bg-[#D70F0F] overflow-x-hidden"></div>
        <h3 className="text-[32px] py-2 px-2">Phase 2 - Offline</h3>
        </div>
        <h5 className="text-center items-center font-light ">
          This phase will consist of two rounds as specified below and will be held on March 10th, with the venue being Govt. Model Engineering College.
        </h5>
      </div>
      <Flickity>
        <div className="carousel-cell ">
          <div className={phaseCardStyle}>
            <h4 className={phaseNumberStyle}>Round 1: Tell A Photo Story</h4>

            <p className={phaseDescriptionStyle}>
                Attention all storytellers and imagination enthusiasts! Are you ready to take on the challenge of crafting a captivating narrative on the spot? 
                <br /><br />
                Well, get ready to put your creative abilities to the ultimate test as we provide you with a photo that will transport you to a world of unknown characters, unfamiliar settings, and unforeseen circumstances. Your task is to unravel the mystery behind the photo, and craft a story that is so intriguing, so compelling, that it will leave us begging for more.
                <br /><br />
                Do you have what it takes to create a world from a single snapshot?
            </p>
          </div>
        </div>

        <div className="carousel-cell ">
          <div className={phaseCardStyle}>
            <h4 className={phaseNumberStyle}>Round 2: Knockout Debate</h4>

            <p className={phaseDescriptionStyle}>
                Once you’ve gotten through, it will be time to prove your grit in a classic knockout debate competition, where things will likely begin to heat up! In this round, we're challenging you to bring your best arguments and show us what you're made of.
                <br /><br />
                Don't worry, though, because while the competition may be fierce, the atmosphere is light and playful. We want you to have fun, be creative, and think outside the box. You'll be presented with interesting and thought-provoking topics that are sure to spark your imagination and lead to some lively discussions.
                <br /><br />
                So grab a seat, relax, and get ready to engage in some friendly banter with your fellow debaters. Remember, while we're looking for the strongest argument, we're also looking for creativity and originality. You never know, you might even learn something new or change your mind on a topic you thought you knew all there was to know about!
            </p>
          </div>
        </div>
      </Flickity>
    </div>
  );
}


