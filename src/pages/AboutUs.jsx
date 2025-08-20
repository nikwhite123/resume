import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Левая часть */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Обо мне
        </motion.h2>

        {/* Правая часть */}
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className=".about-text">
          <p>Меня зовут Никита, я фронтенд-разработчик с увлечением к созданию аккуратного и понятного кода. Люблю экспериментировать с UI/UX и создавать проекты, которыми приятно пользоваться. За время работы я реализовал несколько веб-проектов на React + Vite, уделяя внимание удобству интерфейсов и адаптивности.</p>
        </div>
        </motion.p>
      </div>
    </section>
  );
}
