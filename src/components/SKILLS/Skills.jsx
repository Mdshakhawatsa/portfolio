import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos';
import React from "react";
import styled from "styled-components";



const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id="skill" className="mt-20 lg:h-screen">
            <div className='flex mt-4'>
                <div data-aos="fade-right" className='w-1  bg-black'></div>
                <h2 data-aos="fade-left" className="text-center  text-4xl font-sans font-bold">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-500 to-teal-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
                        My
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                        Skills
                    </span>
                </h2>
            </div>

            {/* 
            <div class="max-w-7xl mx-auto lg:mt-28 py-12 px-4 sm:px-6 lg:px-8">


                <div data-aos="fade-up"
                    data-aos-duration="3000" class="grid grid-cols-2 sm:grid-cols-4 gap-10">

                    <div className='hover:scale-90  transition-transform duration-300 '>
                        <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F]  p-5 rounded-lg">
                            <img
                                src="https://img.icons8.com/color/48/000000/html-5.png"
                                alt="HTML"
                                class="w-20 h-20  "
                            />
                            <p class="text-white mt-4">HTML</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://img.icons8.com/color/48/000000/css3.png"
                            alt="CSS"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">CSS</p>
                    </div>

                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://img.icons8.com/color/48/000000/javascript.png"
                            alt="JavaScript"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">JavaScript</p>
                    </div>
                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://img.icons8.com/color/48/000000/github.png"
                            alt="GitHub"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">GitHub</p>
                    </div>


                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                            alt="MongoDB"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">MongoDB</p>
                    </div>


                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                            alt="Express.js"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">Express.js</p>
                    </div>


                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                            alt="React"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">React</p>
                    </div>


                    <div data-aos="zoom-in" class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                            alt="Node.js"
                            class="w-20 h-20 hover:scale-150 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">Node.js</p>
                    </div>




                </div>
            </div> */}
            <div data-aos="fade-up"
                    data-aos-duration="3000" className='max-w-7xl mx-auto lg:mt-28 py-12 px-4 sm:px-6 lg:px-8'>
                <StyledWrapper>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
                        {/* Express.js Button */}
                        <button className="brutalist-button express">
                            <div className="node-logo ">
                                <img className="w-24" src="https://cdn.worldvectorlogo.com/logos/express-109.svg" alt="" />

                            </div>
                            <div className="button-text text-white">
                                <span>Express.js</span>
                            </div>
                        </button>

                        {/* Node.js Button */}
                        <button className="brutalist-button node">
                            <div className="node-logo">
                                <img className="h-14" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt=" " />
                            </div>
                            <div className="button-text text-white">
                                <span>Node.js</span>
                            </div>
                        </button>

                        {/* MongoDB Button */}
                        <button className="brutalist-button mongodb">
                            <div className="mongodb-logo">
                                <img className="h-20" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt=" " />
                            </div>
                            <div className="button-text text-white">
                                <span>MongoDB</span>
                            </div>
                        </button>

                        {/* JavaScript Button */}
                        <button className="brutalist-button js">
                            <div className="js-logo">
                                <img className="w-14" src="https://img.icons8.com/color/48/000000/javascript.png" alt="" />
                            </div>
                            <div className="button-text text-white">
                                <span>JavaScript</span>
                            </div>
                        </button>

                        {/* React Button */}
                        <button className="brutalist-button react">
                            <div className="react-logo">
                                <img className="w-14" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React Logo" />
                            </div>
                            <div className="button-text text-white ">

                                <span>React</span>
                            </div>
                        </button>

                        {/* HTML Button */}
                        <button className="brutalist-button html">
                            <div className="html-logo">
                                <img className="w-14" src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML Logo" />
                            </div>
                            <div className="button-text text-white">
                                {/* <span>Powered By</span> */}
                                <span>HTML</span>
                            </div>
                        </button>

                        {/* CSS Button */}
                        <button className="brutalist-button css">
                            <div className="css-logo">
                                <img className="w-14" src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS Logo" />
                            </div>
                            <div className="button-text text-white">
                                {/* <span>Powered By</span> */}
                                <span>CSS</span>
                            </div>
                        </button>

                        {/* GitHub Button */}
                        <button className="brutalist-button github">
                            <div className="github-logo ">
                                <img className="w-14" src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub Logo" />
                            </div>
                            <div className="button-text text-white">
                                <span>GitHub</span>
                            </div>
                        </button>
                    </div>
                </StyledWrapper>
            </div>
        </div>
    );
};

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
  }

  .brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 3px solid #000000;
    border-radius: 12px;
    padding: 0;
    text-decoration: none;
    // color: #000000;
    font-weight: bold;
    position: relative;
    // box-shadow: 4px 4px 0px #000000;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 130px;
    width: 130px;
    cursor: pointer;
  }

  .brutalist-button::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -150%;
    width: 300%;
    height: 300%;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
  }

  .brutalist-button:hover::before {
    transform: translateX(-50%) scale(1);
  }

  .brutalist-button:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px 0px #97e7ff;
  }

  .brutalist-button:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.3;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    z-index: 2;
    position: absolute;
    bottom: 18px;
    left: 0;
    right: 0;
  }

  .brutalist-button:hover .button-text {
    opacity: 1;
    transform: translateY(0);
  }

  /* Express.js Button */
  .brutalist-button.express {
    background-color: #00838F;
  }

  .brutalist-button.express .express-logo {
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
  }

  /* Node.js Button */
  .brutalist-button.node {
    background-color: #00838F;
  }

  /* MongoDB Button */
  .brutalist-button.mongodb {
    background-color: #00838F;
  }

  /* JavaScript Button */
  .brutalist-button.js {
    background-color: #00838F;
  }

  /* React Button */
  .brutalist-button.react {
    background-color: #00838F;
  }

  /* HTML Button */
  .brutalist-button.html {
    background-color: #00838F;
  }

  /* CSS Button */
  .brutalist-button.css {
    background-color: #00838F;
  }

  /* GitHub Button */
  .brutalist-button.github {
    background-color: #00838F;
  }
`;

export default Skills;