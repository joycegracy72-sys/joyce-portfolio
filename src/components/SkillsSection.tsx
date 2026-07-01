"use client";

export default function SkillsSection() {
  const coreTech = ["Python", "C", "C++", "SQL", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js", "Git", "GitHub"];
  const interests = ["Artificial Intelligence Fundamentals", "Prompt Engineering", "Data Science", "Web Development"];

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 24px", textAlign: "left" }}>
      <span style={{ color: "#3b82f6", fontWeight: 700, textTransform: "uppercase", fontSize: "12px", letterSpacing: "2px" }}>
        The Skills
      </span>
      <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", marginTop: "8px", marginBottom: "40px" }}>
        My Expanding Toolkit
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
        <div>
          <h3 style={{ fontSize: "18px", color: "#d4d4d8", marginBottom: "16px", borderBottom: "1px solid #27272a", paddingBottom: "8px" }}>
            Core Technologies
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {coreTech.map(tech => (
              <span key={tech} style={{ padding: "6px 14px", fontSize: "14px", backgroundColor: "#18181b", color: "#d4d4d8", border: "1px solid #27272a", borderRadius: "8px" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "18px", color: "#d4d4d8", marginBottom: "16px", borderBottom: "1px solid #27272a", paddingBottom: "8px" }}>
            Emerging Interests
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {interests.map(interest => (
              <span key={interest} style={{ padding: "10px 16px", fontSize: "14px", backgroundColor: "rgba(30, 58, 138, 0.2)", color: "#60a5fa", border: "1px solid rgba(30, 58, 138, 0.4)", borderRadius: "8px" }}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}