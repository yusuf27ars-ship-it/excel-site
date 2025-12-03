import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const DVCLogo = () => (
  <svg viewBox="0 0 110 44" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* D - Data */}
    <path 
      d="M12 8V36H24C34 36 34 8 24 8H12Z" 
      stroke="#4338ca" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* V - Vera */}
    <path 
      d="M44 8L54 36L64 8" 
      stroke="#6366f1" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* C - Consulting */}
    <path 
      d="M96 12C92 6 78 6 78 22C78 38 92 38 96 32" 
      stroke="#818cf8" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, value: Section.HOME },
    { label: t.nav.about, value: Section.ABOUT },
    { label: t.nav.services, value: Section.SERVICES },
    { label: t.nav.ai_automation, value: Section.AI_AUTOMATION },
    { label: t.nav.projects, value: Section.PROJECTS },
    { label: t.nav.training, value: Section.TRAINING },
    { label: t.nav.contact, value: Section.CONTACT },
  ];

  const handleNav = (section: Section) => {
    onNavigate(section);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNav(Section.HOME)}>
            <div className="transform transition-transform group-hover:scale-105 duration-300">
              <DVCLogo />
            </div>
            <span className="ml-3 text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              DataVera <span className="text-indigo-600">Consulting</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.value
                    ? 'text-indigo-600'
                    : 'text-slate-600 hover:text-indigo-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
                onClick={toggleLanguage}
                className="flex items-center text-slate-600 hover:text-indigo-600 text-sm font-medium px-2"
            >
                <Globe className="h-4 w-4 mr-1" />
                {language === 'tr' ? 'EN' : 'TR'}
            </button>

            <button
              onClick={() => handleNav(Section.CONTACT)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              {t.nav.getQuote}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleLanguage} className="mr-4 text-slate-600 font-medium text-sm">
                 {language === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.value
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;