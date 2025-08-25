import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript, SiJavascript, SiPython, SiFirebase, SiPytorch, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-32 px-6 lg:px-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl font-medium text-gray-800"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-12 flex-wrap">
      
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <RiReactjsLine className="text-4xl text-cyan-500 hover:text-cyan-600 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
        >
          <TbBrandNextjs className="text-4xl text-gray-800 hover:text-black transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2)}
        >
          <BiLogoPostgresql className="text-4xl text-blue-600 hover:text-blue-700 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiTypescript className="text-4xl text-blue-600 hover:text-blue-700 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(5)}
        >
          <SiJavascript className="text-4xl text-yellow-500 hover:text-yellow-600 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(4)}
        >
          <SiPython className="text-4xl text-blue-500 hover:text-blue-600 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiFirebase className="text-4xl text-orange-500 hover:text-orange-600 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(6)}
        >
          <SiPytorch className="text-4xl text-red-600 hover:text-red-700 transition-colors" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
        >
          <SiTailwindcss className="text-4xl text-cyan-500 hover:text-cyan-600 transition-colors" />
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
