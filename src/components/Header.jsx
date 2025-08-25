import React from "react";
import "../styles/styles.css";

export default function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="#top" className="brand" aria-label="На верх страницы">
        </a>
      </div>
      <nav className="nav" aria-label="Основная навигация">
        {[
          { id: "about", label: "Обо мне" },
          { id: "projects", label: "Проекты" },
          { id: "experience", label: "Опыт работы" },
          { id: "skills", label: "Навыки" },
          { id: "contact", label: "Контакты" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="nav-btn"
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
