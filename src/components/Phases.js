import React from 'react'

export const Phases = () => {
  return (
<div>
<h2 className='about-title ml-10 p-3  text-white'>PHASES</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-10 h-auto'>
        <div className='container1 rounded-lg p-4 w-[340px]'>
            <h3 className='text-center  text-white phase-title'>PHASE 1 </h3>
            <h4 className='text-white text-center uppercase'>Group Jam </h4>
            <hr className='solid bg-white'></hr>
            <p className='text-white phase-text'>
            Participants will be organized into groups for a structured group discussion.<br/><br/> Each group will be provided with a topic beforehand & each participant should present their points at their turns.<br/><br/> Time for discussion prior to the presentation will be provided.
            </p>
        </div>
        <div className='container1 rounded-lg p-4 w-[340px]'>
            <h3 className='text-center  text-white phase-title'>PHASE 2 </h3>
            <h4 className='text-white text-center uppercase'>Turncoat Debate </h4>
            <hr className='solid bg-white'></hr>
            <p className='text-white phase-text'>
            Those participants who have qualified from the previous round are eligible for this phase.<br/><br/>

Speak for and against a topic for one-minute intervals.<br/><br/>

Time for preparation prior to the presentation will be provided.
            </p>
        </div>
        <div className='container1 rounded-lg p-4 w-[340px]'>
            <h3 className='text-center  text-white phase-title'>PHASE 3 </h3>
            <h4 className='text-white text-center uppercase'>Image Interpretation </h4>
            <hr className='solid bg-white'></hr>
            <p className='text-white phase-text'>
            Those participants who have qualified from the previous round are eligible for this phase.<br/><br/>

Analyze & interpret an image shown on the screen & prepare your points within 3 mins.<br/><br/>

Present your insights & points about the image for the allotted time duration.
            </p>
        </div>
        
    </div>
</div>
  )
}
