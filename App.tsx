import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIAutomation from './components/AIAutomation';
import VideoTutorials from './components/VideoTutorials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import { Section } from './types';
import { Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const { t } = useLanguage();

  const navigateTo = (section: Section) => {
    setActiveSection(section);
    
    // Smooth scroll handling for non-router SPA
    let elementId = '';
    switch (section) {
      case Section.HOME:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      case Section.ABOUT:
        elementId = 'about-section';
        break;
      case Section.SERVICES:
        elementId = 'services-section';
        break;
      case Section.AI_AUTOMATION:
        elementId = 'ai-automation-section';
        break;
      case Section.PROJECTS:
        elementId = 'projects-section';
        break;
      case Section.TRAINING:
        elementId = 'training-section';
        break;
      case Section.CONTACT:
        elementId = 'contact-section';
        break;
    }

    if (elementId) {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => navigateTo(Section.CONTACT)} />
        <About />
        <Services />
        <AIAutomation />
        <Portfolio />
        <VideoTutorials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold text-white tracking-tight">DataVera <span className="text-indigo-500">Consulting</span></span>
              <p className="mt-4 text-sm">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo(Section.HOME)} className="hover:text-indigo-400">{t.nav.home}</button></li>
                <li><button onClick={() => navigateTo(Section.ABOUT)} className="hover:text-indigo-400">{t.nav.about}</button></li>
                <li><button onClick={() => navigateTo(Section.SERVICES)} className="hover:text-indigo-400">{t.nav.services}</button></li>
                <li><button onClick={() => navigateTo(Section.AI_AUTOMATION)} className="hover:text-indigo-400">{t.nav.ai_automation}</button></li>
                <li><button onClick={() => navigateTo(Section.PROJECTS)} className="hover:text-indigo-400">{t.nav.projects}</button></li>
                <li><button onClick={() => navigateTo(Section.TRAINING)} className="hover:text-indigo-400">{t.nav.training}</button></li>
                <li><button onClick={() => navigateTo(Section.CONTACT)} className="hover:text-indigo-400">{t.nav.contact}</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">{t.footer.solutions}</h3>
              <ul className="space-y-2 text-sm">
                {t.footer.solutionItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">{t.footer.follow}</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">&copy; {new Date().getFullYear()} DataVera Consulting. {t.footer.rights}</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 md:mt-0 flex items-center text-sm hover:text-white transition-colors"
            >
              {t.footer.backToTop} <ArrowUp className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Overlay */}
      <ChatBot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;