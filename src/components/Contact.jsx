import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="rounded-3xl bg-stone-900/50 p-6 transition-all hover:bg-stone-900/70">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-stone-800 p-3">
                <Mail className="h-6 w-6 text-stone-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-200">Email</h3>
                <a href="mailto:your.email@example.com" className="text-stone-400 hover:text-stone-300">
                  y.rashan22@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-stone-900/50 p-6 transition-all hover:bg-stone-900/70">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-stone-800 p-3">
                <Phone className="h-6 w-6 text-stone-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-200">Phone</h3>
                <a href="tel:+94771234567" className="text-stone-400 hover:text-stone-300">
                  +94 77 123 4567
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-stone-900/50 p-6 transition-all hover:bg-stone-900/70">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-stone-800 p-3">
                <MapPin className="h-6 w-6 text-stone-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-200">Location</h3>
                <p className="text-stone-400">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="rounded-3xl bg-stone-900/50 p-8">
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-stone-800 px-4 py-2 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-stone-800 px-4 py-2 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg bg-stone-800 px-4 py-2 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400"
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-950"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
