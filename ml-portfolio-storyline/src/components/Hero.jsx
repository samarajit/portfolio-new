import { motion } from "framer-motion";
import NeuralIllustration from "./NeuralIllustration";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <motion.div
          className="hero-card glass"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            <AnimatedText
              text="Samarajit"
              as="span"
              variant="letters"
              delay={0.02}
            />
            <span className="accent"> — Machine Learning Engineer</span>
          </h1>
          <p className="tagline">
            I build intelligent systems that turn data into decisions —
            from rapid prototyping to production-grade ML.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn">Explore my work</a>
            <a href="#about" className="btn ghost">My story</a>
          </div>
        </motion.div>

        <motion.div
          className="illustration-card glass"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <NeuralIllustration />
        </motion.div>
      </div>
    </section>
  );
}