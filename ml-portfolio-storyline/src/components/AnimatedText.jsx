import { motion } from "framer-motion";

export default function AnimatedText({ text, as = "h2", variant = "words", delay = 0.04 }) {
  const Tag = motion[as] || motion.h2;
  const items = variant === "letters" ? text.split("") : text.split(" ");

  return (
    <Tag style={{ display: "inline-block" }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ y: "100%", opacity: 0, rotate: 4 }}
          whileInView={{ y: "0%", opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.6, delay: i * delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {item}
        </motion.span>
      ))}
    </Tag>
  );
}