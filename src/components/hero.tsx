"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "80vh",
      padding: "0 24px",
      backgroundColor: "#0a0a0f",
      color: "#ffffff"
    }}>
      <span style={{
        color: "#3b82f6",
        fontWeight: 600,
        textTransform: "uppercase",
        fontSize: "14px",
        letterSpacing: "1.5px",
        marginBottom: "16px",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        padding: "6px 16px",
        borderRadius: "9999px",
        border: "1px solid rgba(59, 130, 246, 0.2)"
      }}>
        Hello, I'm Joyce Gracy
      </span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          letterSpacing: "-1px",
          maxWidth: "900px",
          lineHeight: 1.15,
          margin: "0 0 24px 0",
          background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Code that thinks. Built in Chennai.
      </motion.h1>

      <p style={{
        fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
        color: "#e4e4e7",
        maxWidth: "700px",
        fontWeight: 600,
        margin: "0 0 16px 0"
      }}>
        Aspiring AI & Software Engineer · Future Tech Entrepreneur
      </p>

      <p style={{
        fontSize: "16px",
        color: "#a1a1aa",
        maxWidth: "600px",
        lineHeight: 1.6,
        margin: "0 0 32px 0"
      }}>
        Computer Science Engineering Student & Aspiring AI Engineer. I don't just list technologies. I build solutions that solve real problems.
      </p>

<div style={{ display: "flex", gap: "16px" }}>
  <a href="#projects" style={{
    padding: "12px 24px",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: 500,
    textDecoration: "none",
    fontSize: "15px"
  }}>
    View My Work
  </a>
  <a href="#contact" style={{
    padding: "12px 24px",
    borderRadius: "8px",
    backgroundColor: "#18181b",
    color: "#e4e4e7",
    fontWeight: 500,
    textDecoration: "none",
    fontSize: "15px",
    border: "1px solid #27272a"
  }}>
    Let’s Connect
  </a>
</div>    </section>
  );
}