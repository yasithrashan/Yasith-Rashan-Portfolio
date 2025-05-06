import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "BSc (Hons) in Computer Science",
    institution: "IIT in partnership with University of Westminster",
    period: "2023 - Present",
    description: "Focusing on Computer Science, algorithms, and full-stack development. Maintaining a strong academic record while participating in various coding competitions and hackathons.",
    achievements: [
      "Completed first year with an average 79%"
      
    ]
  },
  {
    degree: " Foundation Certificate in Higher Education",
    institution: " Informatics Institute of Technology",
    period: "2023 Jan - 2023 Sep",
    description: "Successfully completed a foundation program focused on fundamental concepts in Computer Science, Mathematics, and Engineering. Gained hands-on experience in problem-solving, coding, and research methodologies.",
    achievements: [
      "Achieved a Merit Pass"
      
    ]
  }
];

const Education = () => {
  return (
    <section className="py-16" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
      </motion.div>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="rounded-3xl bg-stone-900/50 p-8 transition-all hover:bg-stone-900/70"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-stone-800 p-3">
                <GraduationCap className="h-6 w-6 text-stone-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-stone-200">{edu.degree}</h3>
                <div className="mt-2 flex items-center gap-2 text-stone-400">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="mt-2 text-lg font-medium text-stone-300">{edu.institution}</p>
                <p className="mt-3 text-stone-400">{edu.description}</p>
                <ul className="mt-4 space-y-2">
                  {edu.achievements.map((achievement) => (
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

export default Education;