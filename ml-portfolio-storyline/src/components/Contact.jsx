import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="container contact">
      <motion.div
        className="glass"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: 28 }}
      >
        <h2 className="section-title">Let’s collaborate</h2>
        <p className="section-subtitle">
          Open to ML engineering, research, and data science roles — or just say hi.
        </p>
        <div className="socials">
          <a href="mailto:hello@samarajit.dev">
            <HiOutlineMail size={18} />
            Email
          </a>
          <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer">
            <FaLinkedin size={18} />
            LinkedIn
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub
          </a>
          <a href="https://www.kaggle.com/your-kaggle" target="_blank" rel="noreferrer">
            <SiKaggle size={18} />
            Kaggle
          </a>
        </div>
      </motion.div>
    </section>
  );
}