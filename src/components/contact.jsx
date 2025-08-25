import { CONTACT } from "../constants"
import { motion } from "framer-motion"
const contact = () => {
  return (
    <div className="pb-32 px-6 lg:px-16">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-3xl font-medium text-gray-800">Get in Touch</motion.h1>
        <motion.div 
            whileInView={{opacity:1, y:0}} 
            initial={{opacity:0, y:20}} 
            transition={{duration:0.4}} 
            className="max-w-2xl mx-auto text-center"
        >
            <div className="space-y-4">
                <p className="text-gray-700 font-medium">{CONTACT.address}</p>
                <p className="text-gray-700 font-medium">{CONTACT.phoneNo}</p>
                <a href={`mailto:${CONTACT.email}`} className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors">{CONTACT.email}</a>
            </div>
        </motion.div>
    </div>
  )
}

export default contact