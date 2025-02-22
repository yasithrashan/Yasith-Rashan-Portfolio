import { motion } from "framer-motion";
import { Code2, Brain, Coffee, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend technologies, creating seamless web applications."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong analytical skills with a focus on efficient and scalable solutions."
    },
    {
      icon: Coffee,
      title: "Clean Code",
      description: "Committed to writing maintainable, well-documented, and efficient code."
    },
    {
      icon: Rocket,
      title: "Quick Learner",
      description: "Adaptable and eager to learn new technologies and methodologies."
    }
  ];

  return (
    <section className="py-16" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </motion.div>
      
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src="src\assets\ProfileImg.jpeg"
              alt="Profile Picture"
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="rounded-3xl bg-stone-900/50 p-8">
            <p className="text-lg leading-relaxed text-stone-300">
              I am Yasith Rashan, a passionate Computer Science student with a keen interest in software development
              and emerging technologies. My journey in tech began with simple coding projects and has
              evolved into developing full-scale applications. I believe in writing clean, efficient
              code and creating user-centric solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with fellow developers. I'm always excited to take on new
              challenges and push the boundaries of what's possible in software development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-3xl bg-stone-900/50 p-6 transition-all hover:bg-stone-900/70"
              >
                <div className="mb-4 rounded-full bg-stone-800 p-3 w-fit">
                  <skill.icon className="h-6 w-6 text-stone-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-stone-200">{skill.title}</h3>
                <p className="text-stone-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;