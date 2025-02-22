import logo from "../assets/Logo.svg"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="transition-transform hover:scale-110">
          <img src={logo || "/placeholder.svg"} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-6 text-2xl">
        {[
          { href: "https://www.linkedin.com/in/yasith-rashan-a44b54295/", icon: FaLinkedin, label: "LinkedIn" },
          { href: "https://github.com/yasithrashan2003", icon: FaGithub, label: "GitHub" },
          { href: "https://www.instagram.com/yxsiya?igsh=MXowbGZyZjNlNXlx&utm_source=qr", icon: FaInstagram, label: "Instagram" },
          { href: "https://www.facebook.com/share/14h4MaeF3u/?mibextid=wwXIfr", icon: FaFacebook, label: "Facebook" },
          { href: "https://twitter.com/yourusername", icon: FaSquareXTwitter, label: "Twitter" },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors hover:text-stone-400"
          >
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

