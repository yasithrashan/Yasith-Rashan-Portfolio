import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import portfolio from "../assets/projects/portfolio.png";


/** @type {Array<{ name: string, description: string, technologies: string[], github: string, demo: string, image: string }>} */
const projects = [
  {
    name: "University Management App - Spacefix",
    description: "A comprehensive university management system enabling seamless student enrollment, course management, and faculty administration.",
    technologies: ["React", "Node.js", "Firebase", "JavaScript"],
    github: "https://github.com/yasithrashan/Spacefix-app",
    demo: "https://www.spacefix.lk/",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Real-Time Event Ticketing System",
    description: "A dynamic event ticketing platform that provides real-time seat availability, secure bookings.",
    technologies: ["Java", "OOP", "Spring Boot", "React"],
    github: "https://github.com/yasithrashan/Real-Time-Event-Ticketing-System",
    demo: "",
    image: "https://images.unsplash.com/photo-1606021643583-b707947f1f02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Personal Portfolio",
    description: "A sleek and responsive personal portfolio website showcasing my projects, skills, and experience, built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yasithrashan/Yasith-Rashan-Portfolio",
    demo: "https://www.yasithrashan.online/",
    image: portfolio
  },
  {
    name: "Network Flow Algorithm Implementation",
    description: "An implementation of the Ford-Fulkerson algorithm with the Edmonds-Karp improvement for finding maximum flow in a network. Handles integer capacities and follows the conservation of flow principle.",
    technologies: ["Java", "OOP", "Algorithms", "Data Structures", "Graph Theory"],
    github: "https://github.com/yasithrashan/network-flow-algorithm",
    demo: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bookstore RESTful API",
    description: "A comprehensive JAX-RS API for a bookstore application with endpoints for managing books, authors, customers, shopping carts, and orders following REST architectural principles.",
    technologies: ["Java", "JAX-RS", "REST API", "JSON", "Maven", "Java 21"],
    github: "https://github.com/yasithrashan/BookStoreAPIWebApplication",
    demo: "",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Projects = () => {
  return (
    <section className="py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
    

      </motion.div>

      {/* Flexbox Layout */}
      <div className="flex flex-col items-center gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full max-w-4xl rounded-3xl bg-stone-900/50 p-6 transition-all hover:bg-stone-900/70"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-60 w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-stone-200">{project.name}</h3>
                <p className="mt-3 text-stone-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-stone-800 px-3 py-1 text-sm text-stone-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-stone-800 px-4 py-2 text-sm font-medium text-stone-200 transition-colors hover:bg-stone-700"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* GitHub Button at the bottom */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: projects.length * 0.2 }}
        className="mt-12 text-center"
      >
        <h3 className="text-lg font-medium text-stone-300 mb-4">
          Explore my GitHub to discover more innovative projects and solutions.
        </h3>
        <a
          href="https://github.com/yasithrashan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Visit My GitHub
          <FaGithub className="text-lg" />
        </a>
      </motion.div>








      </div>
    </section>
  );
};

export default Projects;
