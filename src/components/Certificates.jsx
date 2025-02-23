import { motion } from "framer-motion";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { useState } from "react";

// Import Certificates
import dataAnalytics from "../assets/certificates/DataAnalytics.png";
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

const certificates = [
  {
    title: "Data Analytics Professional Certificate",
    provider: "Google",
    date: "September 2024",
    link: "",
    image: dataAnalytics,
    category: "Data Analytics"
  },
  {
    title: "Java Object Oriented Programming",
    provider: "LinkedIn Learning",
    date: "August 2024",
    link: "",
    image: javaoop,
    category: "Programming"
  },
  {
    title: "Analyzing and Visualization Data with MS Power BI",
    provider: "Informatics Institute of Technology",
    date: "June 2024",
    link: "",
    image: powerBI,
    category: "Data Analytics"
  },
  {
    title: "Java Programming Fundamentals",
    provider: "LinkedIn Learning",
    date: "August 2024",
    link: "",
    image: java,
    category: "Programming"
  },
  {
    title: "Learning GitHub",
    provider: "LinkedIn Learning",
    date: "July 2024",
    link: "",
    image: learningGitHub,
    category: "Development Tools"
  },
  {
    title: "Database Foundations",
    provider: "LinkedIn Learning",
    date: "July 2024",
    link: "",
    image: linkdinDatabaseFoundation,
    category: "Database"
  },
  {
    title: "XML Essential Training",
    provider: "LinkedIn Learning",
    date: "July 2024",
    link: "",
    image: linkdinXML,
    category: "Development Tools"
  },
  {
    title: "IT Security Foundations",
    provider: "LinkedIn Learning",
    date: "July 2024",
    link: "",
    image: linkdinITSecurity,
    category: "IT Security"
  },
  {
    title: "JavaScript: Enhancing the DOM",
    provider: "LinkedIn Learning",
    date: "June 2024",
    link: "",
    image: linkdinJavaScriptEnhancing,
    category: "Programming"
  },
  {
    title: "JavaScript Essential Training",
    provider: "LinkedIn Learning",
    date: "June 2024",
    link: "",
    image: linkdinJavaScript,
    category: "Programming"
  },
  {
    title: "Python for Beginners",
    provider: "University of Moratuwa",
    date: "May 2024",
    link: "",
    image: moratuwaPython,
    category: "Programming"
  },
  {
    title: "SQL for HR Analytics",
    provider: "Great Learning",
    date: "April 2024",
    link: "",
    image: sqlHR,
    category: "Database"
  },
  {
    title: "Tableau Desktop Specialist",
    provider: "Tableau",
    date: "March 2024",
    link: "",
    image: tableauCertificate,
    category: "Data Analytics"
  },
  {
    title: "Data Analytics Certification",
    provider: "Great Learning",
    date: "February 2024",
    link: "",
    image: greatLearning,
    category: "Data Analytics"
  }
];

const CertificateCard = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group rounded-3xl overflow-hidden border border-stone-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/70 to-stone-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div 
        className="relative h-full overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-stone-900/50 backdrop-blur-sm rounded-2xl p-4">
            <span className="inline-flex items-center gap-1 text-sm text-stone-300 mb-2">
              <Award className="w-4 h-4" />
              {certificate.provider}
            </span>
            <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-sm text-stone-400">
                <Calendar className="w-4 h-4" />
                {certificate.date}
              </span>
              {certificate.link && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white/90 hover:bg-white text-stone-900 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                >
                  View
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(certificates.map(cert => cert.category))].sort();

  const filteredCertificates = selectedCategory === "All"
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(120,120,120,0.1)_0%,transparent_50%)] rounded-2xl" />

        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(120,120,120,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto mb-12">
            Showcasing continuous learning and professional development in technology and data analysis
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-white text-stone-900"
                    : "bg-stone-800/50 text-stone-300 hover:bg-stone-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Masonry Layout */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              layout
              className="break-inside-avoid"
            >
              <CertificateCard certificate={certificate} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;