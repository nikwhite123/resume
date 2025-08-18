import React from 'react';
import '../styles/styles.css';

const Header = ({ name, title, photo, contacts }) => {
  return (
    <header className="header">
      <img src={photo} alt={name} className="header-photo" />
      <h1 className="header-name">{name}</h1>
      <h2 className="header-title">{title}</h2>
      <div className="header-contacts">
        {contacts.email && <a href={`mailto:${contacts.email}`}>{contacts.email}</a>}
        {contacts.github && <a href={contacts.github} target="_blank">GitHub</a>}
        {contacts.linkedin && <a href={contacts.linkedin} target="_blank">LinkedIn</a>}
      </div>
    </header>
  );
};

export default Header;
