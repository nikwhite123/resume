import React from "react";
import "../styles/styles.css"; // подключаем общий файл стилей

export default function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      {/* Левая часть — имя */}
      <div className="header-left">
        <a href="#top" className="brand" aria-label="На верх страницы">
        </a>
      </div>

      {/* Центр — навигация */}
      <nav className="nav" aria-label="Основная навигация">
        {[
          { id: "about", label: "Обо мне" },
          { id: "skills", label: "Навыки" },
          { id: "projects", label: "Проекты" },
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

      {/* Правая часть — полезные действия */}
      <div className="header-right">
        <a
          href="#" // замените на путь к вашему PDF
          download
          className="action-btn ghost-btn"
        >
          Скачать CV
        </a>
      </div>
    </header>
  );
}
