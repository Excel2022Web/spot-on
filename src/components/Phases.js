import React from "react";


export const Phases = () => {
  const phaseCardStyle =
    "w-auto flex-1  h-auto p-2 md:p-4 container1  rounded-xl  pt-5 max-w-[500px] max-h-[600px]";
  const phaseNumberStyle =
    "text-center text-[28px] md:text-[30px] font-semibold";
  const phaseNameStyle = "text-center  text-[18px] md:text-[22px]";
  const phaseDescriptionStyle = "p-4 md:p-6 text-[16px] md:text-[18px]";

  return (
    <div className=" phasesbg text-white px-2  md:h-[100vh] ">
        
      <div className="flex flex-row items-center pl-10 ">
       
        <h3 className="text-[32px] py-5 px-2">PHASES 1 -ONLINE</h3>
        
      </div>
      <div className="flex flex-col md:flex-row justify-center pb-4 px-10 gap-10 md:gap-10">
        <div className={phaseCardStyle}>
          <h4 className={phaseNumberStyle}>Track 1</h4>
          
          
          <p className={phaseDescriptionStyle}>
           Write a short essay, revolving around any historical or ongoing human rights violation issue. Analyse the facts, lay out the view points of the various stakeholders, and present your own opinions on how things turned out or possible actions that can now be taken. Ex. the Holocaust.
<br/>
<br/>

Rules:
<br/>
<br/>

1. The essay must not exceed 1000 words in length.
<br/>

2. Prefer issues that have multiple valid (opposing) viewpoints.
<br/>

3. Avoid speculation when initially presenting the issue.

          </p>
        </div>

        <div className={phaseCardStyle}>
          <h4 className={phaseNumberStyle}>Track 2</h4>
         
          
          <p className={phaseDescriptionStyle}>

            Write a short story, the main character of which is an inanimate object. Go wild with quirky, humourous, insightful or deep plots of your liking, so long as it is from the object's perspective. Ex. A coffin wishing it were a cupboard instead.
<br/>
<br/>
Rules:
<br/>
<br/>

1. The story must not exceed 800 words in length.
<br/>

2. The story must have at least two characters.
<br/>

3. The main character of the story must be an inanimate object.
<br/>

            
          </p>
        </div>
   
      </div>
    </div>
  );
};