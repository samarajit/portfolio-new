import { motion } from "framer-motion";

const sections = [
  {
    title: "Programming & Tools",
    items: ["Python", "R", "Git", "Jupyter", "Docker"],
  },
  {
    title: "Machine Learning",
    items: ["Regression", "Classification", "Clustering", "Neural Networks"],
  },
  {
    title: "Deep Learning Frameworks",
    items: ["TensorFlow", "PyTorch", "Keras"],
  },
  {
    title: "Data Science Stack",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Core skills</h2>
      <p className="section-subtitle">Tools and methods I use to build, evaluate, and deploy models.</p>
      <div className="skills-grid">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className="skill-card glass"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: i * 0.06 }}
          >
            <h3>{sec.title}</h3>
            <div className="chips">
              {sec.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}