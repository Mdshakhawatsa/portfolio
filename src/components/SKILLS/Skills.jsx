
const Skills = () => {
    return (
        <div id="skill" className="h-screen">
            <div className='flex mt-4'>
                <div data-aos="fade-right" className='w-1  bg-black'></div>
                <h2 className="text-center  text-4xl font-sans font-bold">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-500 to-teal-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ml-2">
                       My
                    </span>{" "}
                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                        Skills
                    </span>
                </h2>
            </div>
    
        </div>
    );
};

export default Skills;