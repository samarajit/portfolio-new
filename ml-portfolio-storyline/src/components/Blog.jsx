import { motion } from "framer-motion";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <section id="blog" className="container">
      <h2 className="section-title">Notes & Writing</h2>
      <p className="section-subtitle">Short articles, reflections, and learning notes on ML.</p>

      <div className="blog-grid">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.link}
            className="post glass"
            initial={{ y: 22, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h4>{post.title}</h4>
            <small style={{ color: "#9aa3ad" }}>
              {new Date(post.date).toLocaleDateString()}
            </small>
            <p>{post.excerpt}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}