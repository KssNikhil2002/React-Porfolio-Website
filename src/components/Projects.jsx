import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='pb-32 px-6 lg:px-16'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-3xl font-medium text-gray-800'
      >
        Projects
      </motion.h1>
      <div className="max-w-5xl mx-auto space-y-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="pb-12"
          >
            <div className="flex flex-col lg:flex-row lg:gap-16 mb-4">
              <div className="lg:w-1/4 mb-4 lg:mb-0">
                <p className="text-sm text-gray-500 font-medium">{project.dates}</p>
              </div>
              <div className="lg:flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-medium text-gray-800 text-lg">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline'
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <p className="text-blue-600 font-medium mb-4">{project.type}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
