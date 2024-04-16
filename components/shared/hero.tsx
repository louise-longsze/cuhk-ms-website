import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <section>
      <div
        className="hero min-h-screen bg-cover bg-center flex items-center pl-5 lg:pl-48"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-2 lg:p-10 hero-content bg-gradient-to-tr from-blue-400 to-cyan-200 relative w-5/6 lg:w-2/5 max-w-full rounded-lg shadow-2xl overflow-hidden">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
