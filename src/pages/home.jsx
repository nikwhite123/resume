import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import VKPost from "../components/VKPost";
import "../styles/styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // Для смены фона
  const [darkSection, setDarkSection] = useState(false);

  // Хук Intersection Observer для анимации
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Header />
      <main className={`home ${darkSection ? "dark-bg" : ""}`}>
        {/* Приветствие */}
        <motion.h2
          className="hello"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I am Nikita
        </motion.h2>

        {/* Большой заголовок */}
        <div className="title-block">
          <motion.h1
            className="title-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Nikita Stenechkin -
          </motion.h1>

          <motion.h1
            className="title-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Frontender
          </motion.h1>
        </div>

        {/* Блок с фото и текстами */}
        <motion.section
          className="about-block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="about-left">
            <p>
              Я люблю создавать красивые и удобные интерфейсы, которые делают
              жизнь проще. Всегда ищу баланс между функциональностью и
              эстетикой.
            </p>
          </div>

          <div className="about-center">
            <img
              src="/images/homepage1.jpg"
              alt="Nikita"
              className="profile-img"
            />
          </div>

          <div className="about-right">
            <VKPost />
          </div>
        </motion.section>

        {/* Черный блок About Us */}
        <section
          className="about-us-section"
          ref={ref}
          onMouseEnter={() => setDarkSection(true)}
        >
          <motion.div
            className="about-us-container"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2 }}
          >
            <div className="about-us-left">
              <h2>About Us</h2>
            </div>
            <div className="about-us-right">
              <p>
                Я фронтенд разработчик, создаю современные веб-приложения с
                красивым дизайном и удобным интерфейсом. Люблю React, Vite,
                TailwindCSS и анимации на сайте.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="extra-info"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <p>✨ Также увлекаюсь UI/UX дизайном и открытым исходным кодом.</p>
          </motion.div>
        </section>

        {/* Следующий белый блок */}
        <section className="white-next-section" onMouseEnter={() => setDarkSection(false)}>
          <div className="projects-placeholder">
            <h2>Projects Section (будет здесь)</h2>
          </div>
        </section>
      </main>
    </>
  );
}
