import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">A few pieces from my journey — hover to flip and preview.</p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="card3d"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="card3d-inner">
              <div className="card-face card-front glass">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="card-face card-back"
                style={{ backgroundImage: `url(${p.image})` }}
                aria-label={`Open ${p.title}`}
                title="Open project"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}