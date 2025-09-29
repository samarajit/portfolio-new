import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  // hue rotates from 0 -> 360 deg across the page for seamless color shift
  const hue = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const filter = useMotionTemplate`hue-rotate(${hue}deg)`;

  return (
    <motion.div className="dynamic-bg" style={{ filter }}>
      {/* SVG goo filter (optional if you want stronger liquid blending) */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -7" result="goo"/>
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="blobs" style={{ filter: "url(#goo) blur(52px)" }}>
        <AnimBlob className="blob b1" x={[-300, 200, -150, 0]} y={[0, -180, 120, 0]} />
        <AnimBlob className="blob b2" x={[200, -150, 250, 0]} y={[80, -120, 140, 0]} />
        <AnimBlob className="blob b3" x={[-120, 240, -90, 0]} y={[-80, 100, -150, 0]} />
        <AnimBlob className="blob b4" x={[100, -200, 160, 0]} y={[-40, 160, -100, 0]} />
        <AnimBlob className="blob b5" x={[-180, 120, -240, 0]} y={[120, -140, 160, 0]} />
      </div>
    </motion.div>
  );
}

function AnimBlob({ className, x, y }) {
  return (
    <motion.div
      className={className}
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{ x, y, scale: [1, 1.1, 0.9, 1] }}
      transition={{
        duration: 22,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}