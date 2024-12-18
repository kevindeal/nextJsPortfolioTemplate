import React, { useEffect } from 'react';
// import HeroBlock from './HeroBlock';
import XboxHeroBlock from './XboxHeroBlock';


interface BlockAttributes {
  referenceId?: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaUrl?: string;
  heroImg?: {
    id: number | null;
    url: string;
    alt: string;
  };
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  secondCtaText?: string;
  secondCtaUrl?: string;
  ctaImg?: {
    id: number | null;
    url: string;
    alt: string;
  };
}

interface Block {
  name: string;
  clientId: string;
  attributes: BlockAttributes;
}

const GutenbergRenderer = ({ blocks }: { blocks: Block[] }) => {
  useEffect(() => {
    blocks.forEach(block => {
      if (block.clientId && !block.attributes.referenceId) {
        block.attributes.referenceId = block.clientId;
      }
    });
  }, [blocks]);

  const renderBlock = (block: Block, index: number) => {
    switch (block.name) {
      case 'custom/xbox-hero-block':
        return (
          <XboxHeroBlock
            key={index}
            title={block.attributes.title}
            subtitle={block.attributes.subtitle}
            heroImg={block.attributes.heroImg}
            ctaText={block.attributes.ctaText}
            ctaUrl={block.attributes.ctaUrl}
            referenceId={block.attributes.referenceId}
            anchorId={block.attributes.referenceId}
          />
        );
      default:
        return null;
    }
  };

  return <>{blocks.map(renderBlock)}</>;
};

export default GutenbergRenderer;
