import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos';


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


            {/* <div class=" flex flex-col items-center justify-center p-10">
                

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-10">

                    <div class="flex flex-col items-center bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                            alt="MongoDB"
                            class="w-20 h-20 hover:scale-110 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">MongoDB</p>
                    </div>


                    <div class="flex flex-col items-center  bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                            alt="Express"
                            class="w-20 h-20 hover:scale-110 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">Express.js</p>
                    </div>


                    <div class="flex flex-col items-center  bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                            alt="React"
                            class="w-20 h-20 hover:scale-110 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">React</p>
                    </div>


                    <div class="flex flex-col items-center  bg-[#00838F] p-5 rounded-lg">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                            alt="Node.js"
                            class="w-20 h-20 hover:scale-110 transition-transform duration-300"
                        />
                        <p class="text-white mt-4">Node.js</p>
                    </div>
                </div>
            </div> */}


            {/* 
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
           
                <div>
                    <h3 class="text-xl font-semibold mb-4">Languages</h3>
                    <div class="grid grid-cols-3 sm:grid-cols-3 gap-6 ">
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md w-44 h-14">
                            <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" class="w-10 h-10" />
                            <span>HTML</span>
                        </div>
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" class="w-10 h-10" />
                            <span>CSS</span>
                        </div>
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" class="w-10 h-10" />
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                
                <div class="mt-8">
                    <h3 class="text-xl font-semibold mb-4">Libraries & Frameworks</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" class="w-10 h-10" />
                            <span>React</span>
                        </div>
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/color/48/000000/tailwind-css.png" alt="Tailwind CSS" class="w-10 h-10" />
                            <span>Tailwind CSS</span>
                        </div>
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/fluency/48/express-js.png" alt="Express.js" class="w-10 h-10" />
                            <span>Express.js</span>
                        </div>
                    </div>
                </div>

                
                <div class="mt-8">
                    <h3 class="text-xl font-semibold mb-4">Tools & Technologies</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" class="w-10 h-10" />
                            <span>MongoDB</span>
                        </div>
                        <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub" class="w-10 h-10" />
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
            </div> */}



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
            </div>






        </div>
    );
};

export default Skills;