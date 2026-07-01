"use client";

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backdropFilter: "blur(12px)",
      backgroundColor: "rgba(10, 10, 15, 0.8)",
      borderBottom: "1px solid #18181b",
      padding: "16px 24px"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <a href="#" style={{ color: "#ffffff", textDecoration: "none", fontWeight: 700, fontSize: "18px" }}>
          Joyce Gracy
        </a>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#about" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>About</a>
          <a href="#skills" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>Skills</a>
          <a href="#projects" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>Projects</a>
          <a href="#contact" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}