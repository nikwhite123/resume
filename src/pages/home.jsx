import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import VKPost from "../components/VKPost";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects"; 
import "../styles/styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [darkSection, setDarkSection] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setDarkSection(true);
    } else {
      setDarkSection(false);
    }
  }, [controls, inView]);

  return (
    <>
      <Header />
      <main className={`home ${darkSection ? "dark-bg" : ""}`}>

        <motion.h2
          className="hello"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I am Nikita
        </motion.h2>

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


        <motion.section
          ref={ref} 
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
        <div className="section-wrapper">
          <AboutUs />
        </div>

        <div className="section-wrapper">
          <Projects />
        </div>
      </main>
    </>
  );
}
