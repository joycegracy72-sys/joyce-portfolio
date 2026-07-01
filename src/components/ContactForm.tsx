"use client";

export default function ContactForm() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "60px 24px",
      textAlign: "center",
      backgroundColor: "rgba(24, 24, 27, 0.2)",
      border: "1px solid #27272a",
      borderRadius: "16px",
      backdropFilter: "blur(8px)"
    }}>
      <span style={{ color: "#3b82f6", fontWeight: 700, textTransform: "uppercase", fontSize: "12px", letterSpacing: "2px" }}>
        Get In Touch
      </span>
      <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", marginTop: "8px", marginBottom: "16px" }}>
        Build something smarter.
      </h2>
      <p style={{ color: "#a1a1aa", fontSize: "16px", maxWidth: "500px", margin: "0 auto 32px auto", lineHeight: 1.6 }}>
        A quick email is enough to begin. No formal proposals needed—just a real problem to solve.
      </p>
      
      {/* Centered button container with beautiful layout spacing */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <a 
          href="mailto:joycegracy72@gmail.com" 
          style={{
            padding: "12px 28px",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "14px",
            transition: "background-color 0.2s"
          }}
        >
          Email Me
        </a>
        <a 
          href="https://www.linkedin.com/in/joycegracy" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            padding: "12px 28px",
            borderRadius: "8px",
            backgroundColor: "#18181b",
            color: "#e4e4e7",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "14px",
            border: "1px solid #27272a"
          }}
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/joycegracy72-sys" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            padding: "12px 28px",
            borderRadius: "8px",
            backgroundColor: "#18181b",
            color: "#e4e4e7",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "14px",
            border: "1px solid #27272a"
          }}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}