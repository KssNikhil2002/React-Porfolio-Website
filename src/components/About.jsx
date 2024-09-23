import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa'; // Icons for education, awards, and activities
import { ABOUT_TEXT } from '../constants/index.js'; // About text from constants

const About = () => {
  return (
    <div className="pb-32 px-6 lg:px-16">
      {/* Section Title */}
      <h1 className="my-10 text-center text-4xl font-semibold">
        About 
        <span> Me</span>
      </h1>

      {/* Main Layout: Left and Right Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column: Education and Awards */}
        <div className="space-y-8">

          {/* Education Bubble */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6"
          >
            <FaGraduationCap className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <div className="space-y-4 text-left w-full">

              {/* Second Degree */}
              <div>
                <h4 className="font-semibold">M.Sc in Computer Science @UW-Madison</h4>
                <div className="flex justify-between text-gray-600">
                  <span>2024 - Present</span>
                  <span>CGPA: 4.0/4.0</span>
                </div>
                <span>Specialization - Artificial intelligence</span>
              </div>

              {/* First Degree */}
              <div>
                <h4 className="font-semibold">B.Sc in Computer Science @UW-Madison</h4>
                <div className="flex justify-between text-gray-600">
                  <span>2022 - 2024</span>
                  <span>CGPA: 3.9/4.0</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Awards Bubble */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6"
          >
            <FaTrophy className="text-6xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Awards</h3>
            <div className="space-y-3 text-left w-full">

              {/* Award 1 */}
              <div className="flex justify-between">
                <h4 className="font-semibold">{"Graduating Class Distinction(Top 15 %)"}</h4>
                <span className="text-gray-600">2024</span>
              </div>

              {/* Award 2 */}
              <div className="flex justify-between">
                <h4 className="font-semibold">NCAA National Champion in Cricket</h4>
                <span className="text-gray-600">Spring 2024</span>
              </div>

              {/* Award 2 */}
              <div className="flex justify-between">
                <h4 className="font-semibold">Deans List Honors</h4>
                <span className="text-gray-600">Fall 2022</span>
              </div>

              {/* Award 2 */}
              <div className="flex justify-between">
                <h4 className="font-semibold">Deans List Honors</h4>
                <span className="text-gray-600">Spring 2023</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Right Column: About Me and Clubs & Activities */}
        <div className="space-y-8">

          {/* About Me Text */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 100 }} 
            transition={{ duration: 0.5 }} 
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <div className="flex justify-center">
              <p className="max-w-4xl text-lg text-gray-600 text-justify">
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>

          {/* Clubs & Activities Bubble */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 100 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6"
          >
            <FaUsers className="text-6xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Clubs & Activities</h3>
            <p className="text-gray-600 text-justify">
              Active member of the Wisconsin Robotics Club. <br />
              Active member of the UW Madison Cricket Team. <br />
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;
