import React from "react";
import Header from "../components/Header";
import "../styles/styles.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        {/* Приветствие */}
        <motion.h2
          className="hello"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I am Nikita
        </motion.h2>

        {/* Большая жирная надпись */}
        <div className="title-block">
          <motion.h1
            className="title-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Nikita Stenechkin
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
              жизнь проще. Всегда ищу баланс между функциональностью и эстетикой.
            </p>
          </div>

          <div className="about-center">
            {/* Здесь вставишь своё фото */}
            <img src="/images/my-photo.jpg" alt="Nikita" className="profile-img" />
          </div>

          <div className="about-right">
            <p>
              В свободное время изучаю новые технологии, вдохновляюсь дизайном и
              работаю над личными проектами. Всегда открыт к новым вызовам.
            </p>
          </div>
        </motion.section>
      </main>
    </>
  );
}
