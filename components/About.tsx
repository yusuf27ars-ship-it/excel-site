import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="about-section" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              {t.about.description}
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex border-l-4 border-indigo-600 pl-4 py-2 bg-slate-50">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{t.about.specialtiesTitle}</h4>
                  <p className="text-slate-600">{t.about.specialties}</p>
                </div>
              </div>
               <div className="flex border-l-4 border-indigo-600 pl-4 py-2 bg-slate-50">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{t.about.approachTitle}</h4>
                  <p className="text-slate-600">{t.about.approach}</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-slate-500">
              {t.about.goal}
            </p>
          </div>
          <div className="mt-12 lg:mt-0 relative">
             <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
             <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <img
              className="relative rounded-2xl shadow-2xl w-full object-cover z-10"
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Data Expert"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;