import { FaGithub, FaLink } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import img1 from "../../../public/fast-website.png";
import img2 from "../../../public/second.png";
import img3 from "../../../public/third.png";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos';

const Projects = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id="project" className=" lg:h-screen">
            <div className='flex mt-4'>
                <div data-aos="fade-right" className='w-1 h-10  bg-black'></div>

                <div data-aos="fade-left" >
                    <h2 className="text-center   text-4xl font-sans font-bold">
                        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-500 to-teal-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
                            My
                        </span>{" "}
                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                            Projects
                        </span>
                    </h2>
                </div>
            </div>


            {/*  */}
            <div data-aos="fade-up"
                data-aos-duration="3000"
                className="px-5 lg:px-28  text-white  py-5 md:py-10">
                <div className="my-10">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
                        {/* 1 */}
                        <div className="card card-compact w-full pb-4 rounded-lg bg-[#00838F]">
                            <figure>
                                <div className="h-72 w-full overflow-hidden">
                                    {/* Auto-scroll on hover */}
                                    <div className="hover:overflow-y-auto h-full w-full">
                                        <LazyLoadImage
                                            src={img1}
                                            alt="Gamer zone"
                                            effect="blur"
                                            className="hover:animate-scrollImage"
                                        />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body px-3 py-2">
                                <h2 className="card-title text-xl font-bold my-3">Gammer Zone</h2>

                                <div className="flex space-x-2 items-center">
                                    <FaLink className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://game-website-assignment.vercel.app/"
                                    >
                                        Live link
                                    </a>
                                    <FaGithub className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/Mdshakhawatsa/game-website-assignment?tab=readme-ov-file"
                                    >
                                        Code link
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="card card-compact w-full pb-4 rounded-lg bg-[#00838F]">
                            <figure>
                                <div className="h-72 w-full overflow-hidden">
                                    {/* Auto-scroll on hover */}
                                    <div className="hover:overflow-y-auto h-full w-full">
                                        <LazyLoadImage
                                            src={img2}
                                            alt="Gamer zone"
                                            effect="blur"
                                            className="hover:animate-scrollImage"
                                        />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body px-3 py-2">
                                <h2 className="card-title text-xl font-bold my-3">Flower</h2>

                                <div className="flex space-x-2 items-center">
                                    <FaLink className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://first-assignment-umber.vercel.app/"
                                    >
                                        Live link
                                    </a>
                                    <FaGithub className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/Mdshakhawatsa/first-assignment"
                                    >
                                        Code link
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* 3*/}
                        <div className="card card-compact w-full pb-4 rounded-lg bg-[#00838F]">
                            <figure>
                                <div className="h-72 w-full overflow-hidden">
                                    {/* Auto-scroll on hover */}
                                    <div className="hover:overflow-y-auto h-full w-full">
                                        <LazyLoadImage
                                            src={img3}
                                            alt="Gamer zone"
                                            effect="blur"
                                            className="hover:animate-scrollImage"
                                        />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body px-3 py-2">
                                <h2 className="card-title text-xl font-bold my-3">Fruit</h2>

                                <div className="flex space-x-2 items-center">
                                    <FaLink className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://game-website-assignment-6nq8.vercel.app/"
                                    >
                                        Live link
                                    </a>
                                    <FaGithub className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/Mdshakhawatsa/assignment_3?tab=readme-ov-file"
                                    >
                                        Code link
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/*  */}






        </div>
    );
};

export default Projects;