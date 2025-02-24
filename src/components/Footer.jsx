import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6" // Corrected the icon import

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className="mt-20 border-t border-stone-800/10 pt-10 pb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {/* About Section */}
          <motion.div 
            className="max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-stone-600">About</h3>
            <p className="mt-4 text-sm leading-6 text-stone-500">
              Passionate software engineer and full-stack developer dedicated to creating innovative solutions and delivering exceptional user experiences.
            </p>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-stone-600">Connect</h3>
            <div className="mt-4 flex gap-4 text-xl">
              {[
                { href: "https://www.linkedin.com/in/yasith-rashan-a44b54295/", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://github.com/yasithrashan2003", icon: FaGithub, label: "GitHub" },
                { href: "https://www.instagram.com/yxsiya?igsh=MXowbGZyZjNlNXlx&utm_source=qr", icon: FaInstagram, label: "Instagram" },
                { href: "https://www.facebook.com/profile.php?id=100087673762639", icon: FaFacebook, label: "Facebook" },
                { href: "https://x.com/yxsiya", icon: FaSquareXTwitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-stone-500 transition-transform hover:scale-110 hover:text-stone-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* New Section (e.g., Services or Support) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-stone-600">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-500">
              {['Web Development', 'Software Engineering'].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="transition-colors hover:text-stone-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 border-t border-stone-800/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-sm text-stone-500">
            © {currentYear} Yasith Rashan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
