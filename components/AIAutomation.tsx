import React from 'react';
import { Workflow, Bot, BrainCircuit, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AIAutomation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="ai-automation-section" className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
         <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-indigo-600 blur-[120px]"></div>
         <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">{t.aiAutomation.subtitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {t.aiAutomation.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto">
            {t.aiAutomation.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* n8n Workflow */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors group">
            <div className="bg-indigo-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Workflow className="h-7 w-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.aiAutomation.workflowTitle}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t.aiAutomation.workflowDesc}
            </p>
            <div className="w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-50"></div>
          </div>

          {/* AI Chatbots */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors group">
            <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Bot className="h-7 w-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.aiAutomation.chatbotTitle}</h3>
             <p className="text-slate-400 leading-relaxed mb-6">
              {t.aiAutomation.chatbotDesc}
            </p>
            <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50"></div>
          </div>

          {/* Smart Analysis */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors group">
             <div className="bg-emerald-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit className="h-7 w-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t.aiAutomation.analysisTitle}</h3>
             <p className="text-slate-400 leading-relaxed mb-6">
              {t.aiAutomation.analysisDesc}
            </p>
            <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => {
                const element = document.getElementById('contact-section');
                element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-indigo-900 bg-indigo-100 hover:bg-white transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            {t.aiAutomation.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutomation;