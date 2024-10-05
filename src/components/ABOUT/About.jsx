import React from 'react';
// import Banner from '../BANNER/Banner';
import { FaCalendar, FaBookOpen, FaLocationArrow, FaAtom, FaCommentAlt, FaGraduationCap } from "react-icons/fa";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos';



const About = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (

        <div id='about' className=''>

            <div className='flex lg:mt-4'>
                <div data-aos="fade-right" className='w-1  bg-black'></div>
                <h2 data-aos="fade-left" className="text-center  text-4xl font-sans font-bold">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-500 to-teal-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
                        Personal
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                        Details
                    </span>
                </h2>
            </div>


            <div data-aos="fade-up"
                data-aos-duration="3000" className=' mt-12'>
                <h1 className='hover:scale-110  transition-transform duration-300 text-[17px] text-slate-800   lg:w-3/4 '>My name is <b>Md.Shakhawat Hossen</b>, a skilled <b>MERN stack developer</b> from <b>Bangladesh</b> with a deep passion for web development.
                    I am committed to crafting seamless and intuitive user experiences by designing user-friendly interfaces and ensuring every
                    feature operates smoothly. My dedication to perfection drives me to meticulously address bugs and errors, delivering
                    high-quality  results in every project.
                </h1>

                {/*personal details  */}
                <div >

                    <div className='flex gap-2 mt-10 text-[18x]'>
                        <div className='  gap-5'>
                            <div className='flex  items-center h-10 gap-5'>
                                <FaCalendar />
                                <h1 className='font-semibold'>BIRTHDAY</h1>
                            </div>
                            <div className='flex h-10 items-center gap-5'>
                                <FaBookOpen />
                                <h1 className='font-semibold'>STUDY</h1>
                            </div>

                            <div className='flex  h-10 items-center gap-5'>
                                <FaLocationArrow />
                                <h1 className='font-semibold'>LOCATION</h1>
                            </div>

                            <div className='flex h-10  items-center gap-5'>
                                <FaAtom />
                                <h1 className='font-semibold'>INTEREST</h1>
                            </div>

                            <div className='flex h-10  items-center gap-5'>
                                <FaCommentAlt />
                                <h1 className='font-semibold'>EMAIL</h1>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className=''>

                            <div className='flex h-10 items-center   gap-5'>
                                <h1 className='font-semibold'>:</h1>
                                <h1 className='lg:font-semibold text-gray-700  '> Feni Polytechnic Institute(8th semester) </h1>
                            </div>
                            <div className='flex h-10 items-center  gap-5'>
                                <h1 className='font-semibold'>:</h1>
                                <h1 className='lg:font-semibold text-gray-700 '> 20th-May-2002 </h1>
                            </div>
                            <div className='flex  h-10 items-center  gap-5'>
                                <h1 className='font-semibold'>:</h1>
                                <h1 className='lg:font-semibold text-gray-700 '> Laksam, Cumilla ,Bangladesh</h1>
                            </div>
                            <div className='flex  h-10 items-center  gap-5'>
                                <h1 className='font-semibold'>:</h1>
                                <h1 className='lg:font-semibold text-gray-700  '> Taking Challenge, Creativity, Design </h1>
                            </div>
                            <div className='flex  h-10 items-center  gap-5'>
                                <h1 className='font-semibold'>:</h1>
                                <h1 className='lg:font-semibold text-gray-700  '> mdffsa999@gmail.com </h1>
                            </div>
                        </div>
                    </div>

                    {/* education */}
                    {/* <div className="flex ">
                        <FaSchool />
                        <h1 className=''>SSC</h1>
                        </div> */}
                </div>
            </div>

            {/* eduaction */}
            <div className='mt-20'>
                <div className='flex'>
                    <div className='w-1 bg-black'></div>
                    <h2 className="text-center  text-3xl font-sans font-bold">
                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-indigo-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                            Education
                        </span>
                    </h2>
                </div>

                <div className='lg:flex justify-around'>
                    {/* 1 */}
                    <div className='hover:scale-110  transition-transform duration-300 '>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className='mt-10  bg-slate-300 rounded-lg p-8'>
                            <div className='flex gap-1 underline '>
                                <FaGraduationCap className='text-3xl' />
                                <h1 className='text-xl font-bold'>SSC</h1>
                            </div>
                            <h1 className='text-[15px]   font-semibold mt-3 max-w-[600px] text-gray-700'>I successfully completed my SSC exam in 2020, achieving a commendable GPA of 4.67  in the Science Group. My strong performance in Mathematics and Physics, where I earned A+ grades, reflects my dedication and passion for these subjects.</h1>
                        </div>
                    </div>

                    {/* 2 */}
                    <div data-aos="fade-down" className='w-1 mt-4 bg-black'></div>

                    <div className='hover:scale-110  transition-transform duration-300 '>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className='mt-10 bg-slate-300 rounded-lg p-8'>
                            <div className='flex gap-1 underline'>
                                <FaGraduationCap className='text-3xl' />
                                <h1 className='text-xl font-bold'>Diploma in Engineering</h1>
                            </div>
                            <h1 className='text-[15px]   font-semibold  mt-3 max-w-[600px] text-gray-700'>Currently, I am pursuing a Diploma in Engineering at Feni Polytechnic Institute, specializing in Computer Science and Technology. This path was a natural choice for me as it aligns with my deep passion for technology and innovation. It offers me the perfect opportunity to expand my knowledge and skills. </h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;