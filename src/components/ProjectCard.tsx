"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
}

export default function ProjectCard({ title, description, stack }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      style={{
        borderRadius: "12px",
        backgroundColor: "#12121a",
        border: "1px solid #27272a",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "16px",
        textAlign: "left"
      }}
    >
      <div>
        {/* The System Build banner as a styling asset */}
        <div style={{ 
          height: "100px", 
          marginBottom: "16px", 
          borderRadius: "8px", 
          backgroundColor: "rgba(24, 24, 27, 0.4)", 
          border: "1px solid #27272a", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          color: "#4b5563" 
        }}>
          <code style={{ fontSize: "13px", fontFamily: "monospace", letterSpacing: "1px" }}>
            &lt;System Build /&gt;
          </code>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
          {title}
        </h3>

        <p style={{ color: "#a1a1aa", fontSize: "15px", marginTop: "8px", lineHeight: 1.5 }}>
          {description}
        </p>
      </div>

      <div>
        {/* Tech stack badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
          {stack.map((tech) => (
            <span key={tech} style={{ padding: "4px 10px", fontSize: "12px", borderRadius: "6px", backgroundColor: "#18181b", color: "#e4e4e7", border: "1px solid #27272a" }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Clean, honest action system */}
        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <div style={{ 
            flex: 1, 
            padding: "10px 16px", 
            fontSize: "13px", 
            fontWeight: 500, 
            borderRadius: "8px", 
            backgroundColor: "#18181b", 
            color: "#71717a", 
            border: "1px solid #27272a",
            textAlign: "center"
          }}>
            Repo Incoming
          </div>
          <a 
            href="#contact" 
            style={{ 
              flex: 1, 
              padding: "10px 16px", 
              fontSize: "13px", 
              fontWeight: 500, 
              borderRadius: "8px", 
              backgroundColor: "#2563eb", 
              color: "#ffffff", 
              textDecoration: "none",
              textAlign: "center"
            }}
          >
            Request Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}