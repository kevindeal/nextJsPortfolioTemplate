import React from 'react';
import HeroBlock from './HeroBlock';

interface Block {
  name: string;
  attributes: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
    ctaUrl: string;
    heroImg: {
      id: number | null;
      url: string;
      alt: string;
    };
  };
}

const GutenbergRenderer = ({ blocks }: { blocks: Block[] }) => {
  return blocks.map((block, index) => {
    switch (block.name) {
      case 'custom/hero-block':
        return (
          <HeroBlock
            key={index}
            title={block.attributes.title}
            subtitle={block.attributes.subtitle}
            heroImg={block.attributes.heroImg}
            ctaText={block.attributes.ctaText}
            ctaUrl={block.attributes.ctaUrl}
          />
        );
      // Handle other blocks here
      default:
        return null;
    }
  });
};

export default GutenbergRenderer;
