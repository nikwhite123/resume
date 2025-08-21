import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

export default function Experience() {
  const experiences = [
    {
      position: 'Junior Frontend Dev',
      company: 'Компания "РИФ"',
      duration: '2024 - по сегодняшний день',
    },
    {
      position: 'Junior Frontend Dev',
      company: 'Стартап проект испытательный стенд',
      duration: '2023 - 2024',
    },
    {
      position: 'Junior Frontend Dev',
      company: 'Стартап проект ИИ медицина',
      duration: '2024',
    },
  ];

  return (
    <section id ="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Мой опыт работы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="experience-positions"
          >
          </motion.p>
        </div>

        <div className="experience-right">
          {experiences.map((exp, index) => (
            <motion.div
              className="experience-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-header">
                <span className="experience-position">{exp.position}</span>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-duration">{exp.duration}</div>
              <hr className="experience-divider" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
