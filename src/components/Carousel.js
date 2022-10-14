import React from 'react'
import $ from 'jquery'

export const Carousel = () => {
   const phaseCardStyle =
    "w-auto flex-1 align-center content-center  h-auto p-2 md:p-4  container1 rounded-xl border-[0.5px] pt-5 h-[100vh] ";
  const phaseNumberStyle =
    "text-center text-[28px] md:text-[30px]  font-semibold";
  const phaseNameStyle = "text-center  text-[18px] md:text-[22px]";
  const phaseDescriptionStyle = "p-4 text-[16px] md:text-[18px]";
  return (
    <div className='phasesbg h-[100vh] text-white'>
      <div id="carouselExampleControls" class="carousel slide relative align-center p-5" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
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
    </div>
    <div class="carousel-item relative float-left w-full">
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
    </div>
    <div class="carousel-item relative float-left ">
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
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
  

    </div>
    
  )
}
