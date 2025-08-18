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
          Никита
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

        {/* Иконки — заглушки со ссылками */}
        <a
          href="#" // замените на ссылку на GitHub
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2.12c-3.26.7-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.8 1.2 1.8 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.26.73-1.55-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.1-3.17 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.62 1.65.22 2.87.1 3.17.75.82 1.2 1.87 1.2 3.15 0 4.52-2.73 5.5-5.34 5.8.42.36.79 1.07.79 2.16v3.2c0 .3.22.67.8.55A11.5 11.5 0 0 0 12 .5Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="#" // замените на ссылку на LinkedIn/Telegram
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="Связаться"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9l-5.5 3.3A1 1 0 0 1 2 21.5V4Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
