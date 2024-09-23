import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl font-bold'
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            {/* Project Dates */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm font-bold text-slate-600'>{project.dates}</p>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>
                {project.title} 
                {/* GitHub link next to the project title */}
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ml-4 text-sm font-bold text-black hover:underline'
                  >
                    View on GitHub
                  </a>
                )}
              </h6>
              <p className='mb-2 text-sm text-purple-400'>{project.type}</p>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              
              {/* Technologies with flex-wrap */}
              <div className='flex flex-wrap'>
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className='mr-2 mb-2 rounded bg-slate-300 px-2 py-1 text-sm font-medium text-black'
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
