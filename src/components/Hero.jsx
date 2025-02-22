"use client"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="pb-4 pt-10 lg:mb-36 lg:pt-20">
      <div className="flex flex-wrap items-center lg:flex-row-reverse">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center lg:p-8">
            <img
              src="https://images.unsplash.com/photo-1654375408506-d46c2b43308f?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero Image"
              className="rounded-3xl border border-stone-700 shadow-lg transition-transform hover:scale-105"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl font-bold tracking-tighter lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                Software Engineer and Full Stack Developer
              </span>
            </h2>
            <p className="my-6 max-w-lg text-lg leading-relaxed tracking-wide text-stone-400">
              Computer Science student pursuing BSc Hons degree at IIT in partnership with University of Westminster.
              Equipped with full-stack development skills and Java programming experience. Seeking opportunities to
              apply academic knowledge and technical abilities in a professional software engineering environment.
            </p>
            <a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="rounded-full bg-white px-8 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

