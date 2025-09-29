import { motion } from "framer-motion";

export default function NeuralIllustration() {
  // A clean neural-net style SVG with animated flows
  const nodes = [
    // x, y
    [40, 50],[40, 110],[40, 170],[40, 230],
    [160, 80],[160, 140],[160, 200],
    [280, 60],[280, 120],[280, 180],[280, 240],
    [400, 140],
  ];

  const edges = [
    [0,4],[0,5],[0,6],
    [1,4],[1,5],[1,6],
    [2,4],[2,5],[2,6],
    [3,4],[3,5],[3,6],

    [4,7],[4,8],[4,9],
    [5,8],[5,9],[5,10],
    [6,7],[6,9],[6,10],

    [7,11],[8,11],[9,11],[10,11],
  ];

  return (
    <svg width="520" height="300" viewBox="0 0 440 280" role="img" aria-label="Neural network illustration">
      <defs>
        <linearGradient id="glow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff2d55"/>
          <stop offset="50%" stopColor="#ad36ff"/>
          <stop offset="100%" stopColor="#00d4ff"/>
        </linearGradient>
        <filter id="soft">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {edges.map(([a,b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="url(#glow)"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.2, delay: 0.1 + i * 0.02 }}
          vectorEffect="non-scaling-stroke"
          filter="url(#soft)"
        />
      ))}

      {nodes.map(([x,y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r="7.5"
          fill="url(#glow)"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.02 }}
          filter="url(#soft)"
        />
      ))}
    </svg>
  );
}