import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import wso2Logo from "../assets/experience/WSO2.png"; 

const experienceData = [
  {
    position: "Engineering Intern",
    company: "WSO2",
    logo: wso2Logo, 
    period: "Jun 2025 - Present",
    description: "Worked with the Engineering team to develop and enhance enterprise middleware solutions. Gained hands-on experience with WSO2's open-source integration platform, microservices architecture, and API management tools. Participated in agile development processes including daily stand-ups, sprint planning, and retrospectives.",
    achievements: [
      "Onboarded to the Engineering team and familiarized with WSO2's products and development environment",
      "Collaborating with mentors and senior engineers to understand project workflows and codebases"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
      </motion.div>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="rounded-3xl bg-stone-900/50 p-8 transition-all hover:bg-stone-900/70"
          >
            <div className="flex items-start gap-6">
              {exp.logo && (
                <div className="hidden sm:block h-16 w-16 overflow-hidden rounded-lg bg-white p-2 flex-shrink-0">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {exp.logo && (
                    <div className="sm:hidden h-12 w-12 overflow-hidden rounded-lg bg-white p-2 flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-stone-200">{exp.position}</h3>
                </div>
                <div className="mt-2 flex items-center gap-2 text-stone-400">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                <p className="mt-2 text-lg font-medium text-stone-300">{exp.company}</p>
                <p className="mt-3 text-stone-400">{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-2 text-stone-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;