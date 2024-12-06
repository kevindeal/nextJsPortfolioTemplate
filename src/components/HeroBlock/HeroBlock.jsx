import React from 'react';
import './styles.css';

const HeroBlock = ({ title, subtitle, ctaText, ctaUrl, heroImg }) => {
  return (
    <div className="hero-block relative text-white py-10 md:py-20">
      {/* Motion Background */}
      <div className="motion-background"></div>

      {/* Content */}
      <div className="hero-content relative z-10 max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6 text-black px-4 md:px-8">
        <div className="text-left max-w-full">
          {title && (
            <h1 className="hero-title text-4xl md:text-[9.9vh] lg:text-[5.875rem] font-bold mb-4 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="hero-subtitle text-lg sm:text-xl font-medium mb-6">{subtitle}</h2>
          )}
          <a href={ctaUrl} download>
            <button
              aria-label={ctaText}
              className="hero-cta bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300"
            >
              {ctaText}
            </button>
          </a>
        </div>
        <div className="hero-img">
          {heroImg && heroImg.url && (
            <img
              src={heroImg.url}
              alt={heroImg.alt || 'Hero Image'}
              className="max-w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
