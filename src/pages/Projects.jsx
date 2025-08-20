import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/styles.css";

const links = {
  economicPulse: "https://github.com/nikwhite123/EconomicPulse",
  pirateCart: "https://github.com/nikwhite123/PirateCart",
  resume: "https://github.com/nikwhite123/resume",
};

export default function Projects() {
  return (
    <section id = "projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Мои проекты</h2>
      </motion.div>

      <motion.div
        className="project-list"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <div className="project-card">
        <div className="project-card-header">
          <h3>Economic Pulse</h3>
          <button
            className="arrow-btn"
            onClick={() => window.open(links.economicPulse, "_blank")}
            aria-label="Открыть GitHub: Economic Pulse"
          >
            →
          </button>
        </div>
        <p>Сайт для отслеживания финансов и бюджета.</p>
      </div>

      <div className="project-card">
        <div className="project-card-header">
          <h3>Pirate-cart</h3>
          <button
            className="arrow-btn"
            onClick={() => window.open(links.pirateCart, "_blank")}
            aria-label="Открыть GitHub: Pirate-cart"
          >
            →
          </button>
        </div>
        <p>Учебный интернет-магазин.</p>
      </div>

      <div className="project-card">
        <div className="project-card-header">
          <h3>Resume</h3>
          <button
            className="arrow-btn"
            onClick={() => window.open(links.resume, "_blank")}
            aria-label="Открыть GitHub: Resume"
          >
            →
          </button>
        </div>
        <p>Личный сайт-портфолио.</p>
      </div>
      </motion.div>
    </section>
  );
}