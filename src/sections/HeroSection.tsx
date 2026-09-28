import * as React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary text-white p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{subtitle}</p>
        <a href={ctaLink} className="px-6 py-3 bg-accent text-primary rounded hover:bg-opacity-90 transition-colors">
          {ctaText}
        </a>
      </div>
    </section>
  );
};