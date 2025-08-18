import React from 'react';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import SkillBar from '../components/SkillBar';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div className="app-container">
      {/* Шапка с именем, фото, контактами */}
      <Header
        name="Ваше Имя"
        title="Frontend Developer"
        photo="/images/guus.gif"
        contacts={{
          email: "email@example.com",
          github: "https://github.com/username",
          linkedin: "https://linkedin.com/in/username"
        }}
      />

      {/* О себе */}
      <Section title="About Me">
        <p>
          Я frontend разработчик с опытом в React и Vite. Люблю создавать
          современные и удобные интерфейсы.
        </p>
      </Section>

      {/* Навыки */}
      <Section title="Skills">
        <SkillBar skill="React" level={90} />
        <SkillBar skill="JavaScript" level={85} />
        <SkillBar skill="CSS / Tailwind" level={80} />
        <SkillBar skill="TypeScript" level={70} />
      </Section>

      {/* Проекты */}
      <Section title="Projects">
        <ProjectCard
          name="Мой сайт-портфолио"
          description="Современный резюме-сайт на React + Vite."
          link="https://github.com/username/portfolio"
        />
        <ProjectCard
          name="Другой проект"
          description="Описание проекта."
          link="#"
        />
      </Section>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Home;
