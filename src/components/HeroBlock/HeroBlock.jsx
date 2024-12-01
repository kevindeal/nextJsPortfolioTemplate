import React from 'react';
import './styles.css';

const HeroBlock = ({ title, subtitle, backgroundImage, ctaText, ctaUrl }) => {
  return (
    <div
      className="hero-block relative bg-cover bg-center text-white p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content max-w-screen-lg mx-auto text-center">
        {title && (
          <h1 className="hero-title text-4xl font-bold mb-4">{title}</h1>
        )}
        {subtitle && (
          <h2 className="hero-subtitle text-xl font-medium mb-6">{subtitle}</h2>
        )}
          <a href={ctaUrl} download>
            <button
              aria-label={ctaText}
              className="hero-cta bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              {ctaText}
            </button>
          </a>
      </div>
    </div>
  );
};

export default HeroBlock;
