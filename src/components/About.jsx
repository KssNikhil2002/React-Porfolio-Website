import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants/index.js'; // About text from constants

const About = () => {
  return (
    <div className="pb-32 px-6 lg:px-16">
      {/* Section Title */}
      <h1 className="my-20 text-center text-3xl font-medium text-gray-800">
        About Me
      </h1>

      {/* Main Content - Notion-like Layout */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* About Me Text - Ultra minimal */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }} 
          transition={{ duration: 0.4 }} 
          className="text-center"
        >
          <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {ABOUT_TEXT}
          </p>
        </motion.div>

        {/* Simple Grid Layout - Centered */}
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-24 max-w-4xl mx-auto">

          {/* Education */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 20 }} 
            transition={{ duration: 0.4, delay: 0.1 }} 
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-6">Education</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-medium text-gray-800">M.Sc in Computer Science</h4>
                <p className="text-sm text-gray-600 mt-1">UW-Madison</p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>2024 - Present</span>
                  <span>CGPA: 4.0/4.0</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Specialization - Artificial Intelligence</p>
              </div>
              <div className="pt-3">
                <h4 className="font-medium text-gray-800">B.Sc in Computer Science</h4>
                <p className="text-sm text-gray-600 mt-1">UW-Madison</p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>2022 - 2024</span>
                  <span>CGPA: 3.9/4.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 20 }} 
            transition={{ duration: 0.4, delay: 0.2 }} 
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-6">Awards</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-800">Graduating Class Distinction (Top 15%)</h4>
                <p className="text-sm text-gray-500 mt-1">2024</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-800">NCAA National Champion in Cricket</h4>
                <p className="text-sm text-gray-500 mt-1">Spring 2024</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-800">Deans List Honors</h4>
                <p className="text-sm text-gray-500 mt-1">Fall 2022</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-800">Deans List Honors</h4>
                <p className="text-sm text-gray-500 mt-1">Spring 2023</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;
