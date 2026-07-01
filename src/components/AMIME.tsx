"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f] to-[#0a0a0f]">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing blobs */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-purple-600/30 blur-[160px] rounded-full animate-pulse"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-blue-500/30 blur-[180px] rounded-full animate-pulse"
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 25 }}
      />
      <motion.div
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-pink-500/20 blur-[140px] rounded-full animate-pulse"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 30 }}
      />
    </div>
  );
}
