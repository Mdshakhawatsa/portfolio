import { FaFacebook, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import About from "../ABOUT/About";
import Skills from "../SKILLS/Skills";
import Projects from "../PROJECTS/Projects";
import Contact from "../CONTACT/Contact";
import Footer from "../FOOTER/Footer";
import "../BANNER/style.css"
const Banner = () => (
    <div>
        <div id="banner" className="lg:flex justify-around items-center h-screen ">
            {/* left side  text*/}
            <div className="    justify-center  items-center">
                <img className=" border rounded-lg w-80 hover:scale-105 transition-transform duration-300" src="https://i.ibb.co.com/bPXn2hv/shakhawat-Photoroom.jpg" alt="" />

                <h1 className=" text-center text-2xl font-semibold text-cyan-800">MD.SHAKHAWAT HOSSEN</h1>
                <h1 className="  text-center text-slate-600 text-1xl font-semibold">Mern Stack Developer</h1>
                <div>
                    <h1 className="flex gap-3 text-2xl mt-2 justify-center ">
                        <a href="https://www.facebook.com/profile.php?id=100071934219435"><FaFacebook className="text-blue-500 hover:scale-150 transition-transform duration-300" />   </a>
                        <a href="https://www.linkedin.com/in/shakhawat-undefined-29a680319/"><FaLinkedin className="hover:scale-150 transition-transform duration-300text-blue-900" /></a>
                        <a href="https://github.com/Mdshakhawatsa"><FaGithub className="hover:scale-150 transition-transform duration-300" /></a>
                    </h1>
                </div>
            </div>

            {/* right side image */}
            <div className="">
                <div className="color-blin-background">
                    <h1 className="text-6xl font-serif ">I'm <span className="text-cyan-800  ">Shakhawat </span> </h1>

                    {/* <h1 className="floting-text">
                        <span className="word">I'm </span>
                        <span className="word">s</span>
                        <span className="word">h</span>
                        <span className="word">a</span>
                        <span className="word">k</span>
                        <span className="word">h</span>
                        <span className="word">a</span>
                        <span className="word">w</span>
                        <span className="word">a</span>
                        <span className="word">t</span>
                    </h1> */}
                </div>
                <h1 className="text-4xl font-serif mt-4">MERN Stack Developer</h1>
                <p className="text-sm font-medium text-gray-600 mt-6">I’m a Front-End Developer with MERN stack expertise. <br /> I have completed some project and over six personal projects.</p>

                <div className="flex items-center justify-center  rounded-lg h-10  w-28 lg:ml-32 mt-7 bg-[#00838F] gap-3  transition-transform duration-300 shadow-lg  hover:shadow-[0_0_20px_5px_rgba(51,130,122,0.7)] hover:scale-125">
                    <button className="uppercase font-semibold  text-white   text-center ">rusume</button>

                    <FaFileDownload className="animate-floating text-white text-lg" />
                </div>


            </div>
        </div>


        <About />
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        {/* <Footer/> */}
    </div>

);

export default Banner;