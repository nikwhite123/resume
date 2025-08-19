import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Левая часть */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Правая часть */}
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Меня зовут Никита, я фронтенд-разработчик.  
          Люблю писать аккуратный код, экспериментировать с UI/UX 
          и делать проекты, которыми приятно пользоваться.
        </motion.p>
      </div>
    </section>
  );
}
