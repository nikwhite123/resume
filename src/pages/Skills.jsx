import React from "react";
import "../styles/styles.css";

const skills = [
  { name: "HTML", img: "/images/html.png", level: "Уверенное владение" },
  { name: "CSS", img: "/images/css3.svg", level: "Хорошее знание" },
  { name: "JavaScript", img: "/images/javascript.png", level: "Средний уровень" },
  { name: "React", img: "/images/react.png", level: "Уверенное владение" },
  { name: "React + Vite", img: "/images/vite.png", level: "Рабочий опыт" },
  { name: "GitHub", img: "/images/github.png", level: "Использую для проектов" },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title">Навыки</div>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-img-wrapper">
              <img src={skill.img} alt={skill.name} className="skill-img" />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-line"></div>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
