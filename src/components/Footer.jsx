import React from 'react';
import '../styles/styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ваше Имя. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
