import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
    return (
        <div id="project" className="h-screen">
            <div className='flex mt-4'>
                <div data-aos="fade-right" className='w-1 h-10  bg-black'></div>
                <h2 className="text-center   text-4xl font-sans font-bold">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-500 to-teal-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
                        My
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                        Projects
                    </span>
                </h2>
            </div>


            {/*  */}
            <div className="px-5 lg:px-28 text-white py-5 md:py-10">
                <div className="my-10">
                    {/* <h2 className="text-center my-5 text-xl md:text-4xl font-sans font-bold">
                        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
                            My
                        </span>{" "}
                        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                            Projects
                        </span>
                    </h2> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-2">

                        <div className="card card-compact w-full pb-4 rounded-md bg-gray-200 shadow-xl">

                            <div className="card-body px-3 py-2">
                                <h2 className="card-title text-xl font-bold my-3">
                                    Fitness Tracking
                                </h2>
                                <p className=" font-bold">Team Project</p>
                                <div className="flex space-x-3 items-center">
                                    <FaGithub className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-client-side"
                                    >
                                        client
                                    </a>
                                    <FaGithub className="w-8 h-7" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-server-site"
                                    >
                                        Server
                                    </a>
                                    <FaLink className="w-7 h-6" />
                                    <a
                                        className="link underline-offset-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://fitness-studio.surge.sh"
                                    >
                                        live
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