import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/styles.css";

const links = {
  economicPulse: "#",  // вставишь свои ссылки на GitHub
  pirateCart: "#",
  resume: "#",
};

export default function Projects() {
  return (
    <section className="projects-section">
      {/* Левая колонка: заголовок + карточки */}
      <div className="projects-wrap">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Мои проекты
        </motion.h2>

        <div className="project-list">
          {/* 1 */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-card-header">
              <h3>Economic Pulse</h3>
              <button
                className="open-btn"
                aria-label="Открыть GitHub: Economic Pulse"
                onClick={() => window.open(links.economicPulse, "_blank")}
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <p>Короткое описание проекта. Ты заменишь этот текст позже.</p>
          </motion.article>

          {/* 2 */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="project-card-header">
              <h3>Pirate-cart</h3>
              <button
                className="open-btn"
                aria-label="Открыть GitHub: Pirate-cart"
                onClick={() => window.open(links.pirateCart, "_blank")}
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <p>Короткое описание проекта. Ты заменишь этот текст позже.</p>
          </motion.article>

          {/* 3 */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-card-header">
              <h3>Resume</h3>
              <button
                className="open-btn"
                aria-label="Открыть GitHub: Resume"
                onClick={() => window.open(links.resume, "_blank")}
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <p>Короткое описание проекта. Ты заменишь этот текст позже.</p>
          </motion.article>
        </div>
      </div>

      {/* Правая колонка — пустое пространство для баланса композиции */}
      <div className="projects-right-spacer" />
    </section>
  );
}
