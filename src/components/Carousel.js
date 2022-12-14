import React, { useState } from "react";

import Flickity from "react-flickity-component";
import { BsX } from "react-icons/bs";

import Modal from 'react-modal';
import { motion } from "framer-motion";

export function Carousel() {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#8D0A0A",

    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      border: "none",
     

      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
   const [modalIsOpen1, setIsOpen1] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModa1l() {
    setIsOpen1(false);
  }
  const phaseCardStyle =
    "w-auto flex-1  h-auto p-2 md:p-4  container1  rounded-xl pt-4 md:pt-5 max-w-[500px]  ";
  const phaseNumberStyle =
    "text-center text-[28px] md:text-[30px] font-semibold";

  const phaseDescriptionStyle = "p-4 md:p-6 text-[16px] md:text-[18px]";

  return (
    <div className="phasesbg h-[100vh]">
      <div className="flex flex-col text-white   py-5">
        <h3 className="text-[32px] text-center items-center   px-2">
          PHASE 1 - ONLINE
        </h3>
        <h2 className="text-center items-center font-light ">
          Submit in one or both of the following tracks
        </h2>
      </div>
      <Flickity>
        <div className="carousel-cell ">
          <div className={phaseCardStyle}>
            <h4 className={phaseNumberStyle}>Track 1</h4>

            <p className={phaseDescriptionStyle}>
              Write a short essay, revolving around any historical or ongoing
              human rights violation issue. Analyse the facts, lay out the view
              points of the various stakeholders, and present your own opinions
              on how things turned out or possible actions that can now be
              taken. Ex. the Holocaust.
              <br />
              <div className="pt-5">
                <button
                  className="button btn outline outline-1 outline-white text-white "
                  onClick={openModal}
                >
                  Rules
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-row justify-end "
                  >
                    <button
                      className=" close justify-end rounded-full border text-xl text-white  "
                      onClick={closeModal}
                    >
                      <BsX />
                    </button>
                  </motion.div>
                  <motion.div
                    animate={{ scale: 1, height: "100%" }}
                    initial={{ scale: 0, height: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={phaseCardStyle}
                  >
                    <h4 className={phaseNumberStyle}>Track 1</h4>

                    <p className={phaseDescriptionStyle}>
                      Rules:
                      <br />
                      <br />
                      1. The essay must not exceed 1000 words in length.
                      <br />
                      2. Prefer issues that have multiple valid (opposing)
                      viewpoints.
                      <br />
                      3. Avoid speculation when initially presenting the issue.
                    </p>
                  </motion.div>
                </Modal>
              </div>
            </p>
          </div>
        </div>

        <div className="carousel-cell ">
          <div className={phaseCardStyle}>
            <h4 className={phaseNumberStyle}>Track 2</h4>

            <p className={phaseDescriptionStyle}>
              Write a short story, the main character of which is an inanimate
              object. Go wild with quirky, humourous, insightful or deep plots
              of your liking, so long as it is from the object's perspective.
              Ex. A coffin wishing it were a cupboard instead.
              <br />
              <br />
              <div className="pt-5">
                <button
                  className="button btn outline outline-1 outline-white text-white "
                  onClick={openModal1}
                >
                  Rules
                </button>
                <Modal
                  isOpen={modalIsOpen1}
                  onAfterOpen={afterOpenModal1}
                  onRequestClose={closeModa1l}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-row justify-end  "
                  >
                    <button
                      className=" close justify-end rounded-full border text-xl text-white  "
                      onClick={closeModa1l}
                    >
                      <BsX />
                    </button>
                  </motion.div>
                  <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={phaseCardStyle}
                  >
                    <h4 className={phaseNumberStyle}>Track 1</h4>

                    <p className={phaseDescriptionStyle}>
                      Rules:
                      <br />
                      <br />
                      1. The essay must not exceed 1000 words in length.
                      <br />
                      2. Prefer issues that have multiple valid (opposing)
                      viewpoints.
                      <br />
                      3. Avoid speculation when initially presenting the issue.
                    </p>
                  </motion.div>
                </Modal>
              </div>
            </p>
          </div>
        </div>
      </Flickity>
    </div>
  );
}


