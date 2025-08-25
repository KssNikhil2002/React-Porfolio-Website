import profilepic from "../assets/image.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter"; // Import the useTypewriter hook
//import 'react-simple-typewriter/dist/index.css'; // Optional styling for the typing cursor

const Hero = () => {
  // Using the typewriter hook to manage the words to cycle through
  const [text] = useTypewriter({
    words: ["Software Engineer", "ML Engineer", "AI Enthusiast", "Cricket Player"],
    loop: true, // Loop infinitely
    typeSpeed: 100, // Typing speed
    deleteSpeed: 50, // Speed at which text gets deleted
    delaySpeed: 1500, // Delay between typing and deletion
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 pt-32 lg:py-28 lg:pt-32 lg:flex-row lg:justify-center lg:space-x-16">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-10 lg:mb-0"
      >
        <img
          src={profilepic}
          alt="Nikhil Kruthiventi"
          className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-white shadow-lg"
        />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg font-normal text-gray-600 mb-3">Hello, I am</p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800 mt-2">Kruthiventi Nikhil</h1>
        <h2 className="text-2xl lg:text-3xl text-gray-700 font-normal mt-5">
          {/* Typing animation */}
          <span>{text}</span>
          <span className="text-gray-800">|</span> {/* Cursor effect */}
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center">
          <a
            href="https://drive.google.com/file/d/102_OJVSzwp5X7M2tzc3n9pUrmevXLDSA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 border border-gray-300 rounded-lg font-medium bg-white hover:bg-gray-50 transition-colors text-gray-700 text-center"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors text-center"
          >
            Contact Info
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/nikhil-kruthiventi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/KssNikhil2002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
