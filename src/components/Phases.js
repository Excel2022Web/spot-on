import React from "react";


export const Phases = () => {
  const phaseCardStyle =
    "w-auto flex-1  h-auto p-2 md:p-4 container1  rounded-xl border-[0.5px] pt-5 ";
  const phaseNumberStyle =
    "text-center text-[28px] md:text-[30px] font-semibold";
  const phaseNameStyle = "text-center  text-[18px] md:text-[22px]";
  const phaseDescriptionStyle = "p-4 md:p-6 text-[16px] md:text-[18px]";

  return (
    <div className=" phasesbg text-white px-2  md:h-[100vh] ">
        
      <div className="flex flex-row items-center pl-10 ">
        <div className="w-[6px] h-[38px] bg-[#D70F0F] pt-2 overflow-x-hidden"></div>
        <h3 className="text-[32px] py-5 px-2">PHASES</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center pb-4 px-10 gap-10 md:gap-10">
        <div className={phaseCardStyle}>
          <h4 className={phaseNumberStyle}>PHASE 1</h4>
          <h5 className={phaseNameStyle}>GROUP JAM</h5>
          <hr className="solid bg-white  mx-auto w-50" />
          <p className={phaseDescriptionStyle}>
            Participants will be organized into groups for a structured group
            discussion.
            <br />
            <br />
            Each group will be provided with a topic beforehand & each
            participant should present their points at their turns.
            <br />
            <br />
            Time for discussion prior to the presentation will be provided.
          </p>
        </div>

        <div className={phaseCardStyle}>
          <h4 className={phaseNumberStyle}>PHASE 2</h4>
          <h5 className={phaseNameStyle}>TURNCOAT DEBATE</h5>
          <hr className="solid bg-white  mx-auto w-50" />
          <p className={phaseDescriptionStyle}>
            Those participants who have qualified from the previous round are
            eligible for this phase.
            <br />
            <br />
            Speak for and against a topic for one-minute intervals.
            <br />
            <br />
            Time for preparation prior to the presentation will be provided.
          </p>
        </div>
        <div className={phaseCardStyle}>
          <h4 className={phaseNumberStyle}>PHASE 3</h4>
          <h5 className={phaseNameStyle}>IMAGE INTERPRETATION</h5>
          <hr className="solid bg-white mx-auto w-50" />
          <p className={phaseDescriptionStyle}>
            Those participants who have qualified from the previous round are
            eligible for this phase.
            <br />
            <br />
            Analyze & interpret an image shown on the screen & prepare your
            points within 3 mins.
            <br />
            <br />
            Present your insights & points about the image for the allotted time
            duration.
          </p>
        </div>
      </div>
    </div>
  );
};