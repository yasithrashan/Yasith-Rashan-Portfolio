import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

// Import Certificates
import dataAnalytics from "../assets/certificates/DataAnalytics.png";
import foundationAward from "../assets/certificates/FoundationAward.jpg";
import greatLearning from "../assets/certificates/GreatLearning.png";
import java from "../assets/certificates/Java.png";
import javaoop from "../assets/certificates/Javaoop.png";
import learningGitHub from "../assets/certificates/LearningGitHub.png";
import linkdinDatabaseFoundation from "../assets/certificates/LinkedinDatabaseFoundations.png";
import linkdinXML from "../assets/certificates/LinkedinXML.png";
import linkdinITSecurity from "../assets/certificates/LinkedinITSecurity.png";
import linkdinJavaScriptEnhancing from "../assets/certificates/LinkedinJavaScriptEnhancingtheDOM.png";
import linkdinJavaScript from "../assets/certificates/LinkedinJavaScript.png";
import moratuwaPython from "../assets/certificates/MoratuwaPython.jpg";
import powerBI from "../assets/certificates/PowerBi.jpg";
import sqlHR from "../assets/certificates/SQLHR.png";
import tableauCertificate from "../assets/certificates/Tableau-Certificate.png";


/** @type {Array<{ title: string, provider: string, date: string, link: string, image: string }>} */
const certificates = [
  {
    title: "Java Object Oriented Programming",
    provider: "LinkedIn Learning",
    date: "August 2024",
    link: "",
    image: javaoop
  },
  {
    title: "Analyzing and Visualization Data with MS Power BI",
    provider: "Informatics Institute of Technology",
    date: "June 2024",
    link: "",
    image: powerBI
  },
  {
    title: "Java Beginners",
    provider: "LinkedIn Learning",
    date: "August 2024",
    link: "",
    image: java
  }
];

const Certificates = () => {
  return (
    <section className="py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full rounded-3xl bg-stone-900/50 p-6 transition-all hover:bg-stone-900/70"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-2xl font-semibold text-stone-200">{cert.title}</h3>
              <img src={cert.image} alt={cert.title} className="w-48 h-48 rounded-xl object-cover" />
              <p className="text-stone-400">Issued by {cert.provider} - {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-200"
              >
                <ExternalLink className="h-4 w-4" />
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
