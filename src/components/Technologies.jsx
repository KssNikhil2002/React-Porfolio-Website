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
    <div className=" pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(5)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(4)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-5xl text-blue-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFirebase className="text-5xl text-orange-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(6)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPytorch className="text-5xl text-red-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-5xl text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
