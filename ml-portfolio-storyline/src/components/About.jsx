import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container">
      <motion.div
        className="about glass"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ padding: 24 }}
      >
        <h2 className="section-title">About me</h2>
        <p>
          I’m Samarajit — a builder at heart. My path into ML started with
          curiosity about patterns in messy, real-world data. I’ve since shipped models
          that detect anomalies, classify images, and interpret language; turning prototypes
          into reliable, monitored systems. I care about clarity, reproducibility, and impact.
          My north star is simple: models that matter, shipped responsibly.
        </p>
      </motion.div>
    </section>
  );
}