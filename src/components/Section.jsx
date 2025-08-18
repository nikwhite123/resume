import React from 'react';
import '../styles/styles.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
