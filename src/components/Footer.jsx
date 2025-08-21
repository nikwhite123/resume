import React from "react";
import { FaVk, FaTelegramPlane, FaGithub } from "react-icons/fa";
import "../styles/styles.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id ="contact" className="footer-section">
      <div className="footer-left">
        <h3>Ресурсы</h3>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Документация</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Блог</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Контакты</a>
      </div>

      <div className="footer-center">
        <button className="scroll-top-btn" onClick={scrollToTop}>↑</button>
        <span className="scroll-top-text">Назад</span>
      </div>

      <div className="footer-right">
        <h3>Следите за мной здесь</h3>
        <div className="social-buttons">
          <div className="social-item">
            <span>ВКонтакте</span>
            <a href="https://vk.com/jjjustice" target="_blank" rel="noopener noreferrer">
              <FaVk size={20} />
            </a>
          </div>
          <div className="social-item">
            <span>Телеграм</span>
            <a href="https://t.me/nikwhite3" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={20} />
            </a>
          </div>
          <div className="social-item">
            <span>GitHub</span>
            <a href="https://github.com/nikwhite123" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
