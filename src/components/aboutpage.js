import React from 'react'
import mic from '../assets/mic.png'

export const Aboutpage = () => {
  return (
    <div>
         <h2 className='about-title ml-10 p-3 mt-10'>ABOUT</h2>
         <div className='flex flex-row'>
        <img src={mic} className='mic'/>
      
      <div className='pr-10 pt-5'>
        <p className='about-text mt-10 mr-5 '>
        “Communication works for those who work at it “<br/>
<span className='font-bold text-black'>- John Powell</span><br/><br/>

Welcome to Spot On, an oratory competition for students, organized by Excel 2021 in collaboration with Toastmasters International. Spot On is a one-of-a-kind platform for the aspiring orator in you, to test your communicative prowess and your ability to conjure minds with the magic of words. Showcase your talent to speak creatively, your ability to counter logically and conquer people with confidence! Register for Spot On before Dec 1st 2021, for a mere fee of ₹30 and win exciting prizes!


        </p>
        <button class="button2 text-white font-bold py-2 px-4 mt-6 rounded">
  RULES AND GUIDELINES
</button>
      </div>
      </div>


    </div>
  )
}
