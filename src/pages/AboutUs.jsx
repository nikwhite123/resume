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
          <p>Помимо фронтенда, у меня есть опыт в разработке графических интерфейсов с использованием Qt Designer и настройке аппаратного взаимодействия с датчиками по SPI, включая регулировку линейных энкодеров. Я также знаком с проектированием в Altium Designer.</p>

          <p>В своей работе я использую языки C, C++, JavaScript, а также технологии веб-разработки: HTML и CSS. Мне нравится объединять навыки в программировании и электронике, чтобы создавать проекты, которые одновременно функциональны и приятны пользователю.</p>
        </div>
        </motion.p>
      </div>
    </section>
  );
}
