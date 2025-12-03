import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {t.hero.subtitle}
            </div>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              {t.hero.title} <span className="text-indigo-600">{t.hero.titleHighlight}</span> {t.hero.titleSuffix}
            </h1>
            <p className="mt-6 text-base text-slate-500 sm:text-lg md:mt-10 md:text-xl">
              {t.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-xl shadow-indigo-200 transition-all transform hover:scale-105"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => {
                   const element = document.getElementById('about-section');
                   element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all"
              >
                {t.hero.services}
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 sm:justify-center lg:justify-start">
              <div className="flex items-center">
                <Database className="h-4 w-4 text-indigo-500 mr-2" />
                <span>{t.hero.automation}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden shadow-2xl">
                 <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Data Analytics and Dashboard"
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;