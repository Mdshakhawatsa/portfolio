
const Contact = () => {
    return (
        <div id="contact" className=" ">
            <div className='flex  gap-2'>
                <div data-aos="fade-right" className='w-1  bg-black'></div>
                <h2 className="text-center  text-4xl  font-bold">
                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-indigo-600 via-teal-800 to-slate-800 dark:from-sky-800 dark:via-pink-300 dark:to-red-100">
                         Contuct
                    </span>
                </h2>
            </div>
            <section  class=" text-white py-10 px-5 md:px-0">
                <div class="max-w-5xl mx-auto text-center">
                    <p class="text-gray-600 text-xl mb-12">
                        I'm always open to new opportunities and would love to connect. Whether you have a question, project idea, or just want to chat, feel free to reach out!
                    </p>
                </div>

                <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 class="text-2xl font-semibold mb-4">Contact Information</h3>
                        <p class="text-black mb-4">
                            <span class="font-bold">Email:</span> <a href="mailto:youremail@example.com" class="text-indigo-400">mdffsa999@gmail.com</a>
                        </p>
                        <p class="text-black mb-4">
                            <span class="font-bold">Phone:</span> +880-1781646455
                        </p>
                        <p class="text-black">
                            <span class="font-bold">Location:</span> cumilla, Bangladesh
                        </p>
                    </div>

                    <div>
                        <form action="#" class="bg-cyan-800 p-6 rounded-lg shadow-lg">
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-200 mb-2">Name</label>
                                <input type="text" id="name" placeholder="Your Name" class="w-full  border p-3 rounded-lg bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>

                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium text-gray-200 mb-2">Email</label>
                                <input type="email" id="email" placeholder="Your Email" class="w-full border p-3 rounded-lg bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>

                            <div class="mb-4">
                                <label for="message" class="block text-sm font-medium text-gray-200 mb-2">Message</label>
                                <textarea id="message" rows="4" placeholder="Your Message" class="  border w-full p-3 rounded-lg bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>

                            <button type="submit" class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition duration-300">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;