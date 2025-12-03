import React from 'react';
import { BarChart, Database, FileText, PieChart, MonitorPlay, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <PieChart className="h-8 w-8 text-white" />,
    <FileText className="h-8 w-8 text-white" />,
    <BarChart className="h-8 w-8 text-white" />,
    <Layers className="h-8 w-8 text-white" />,
    <Database className="h-8 w-8 text-white" />,
    <MonitorPlay className="h-8 w-8 text-white" />
  ];

  return (
    <div className="bg-slate-50 py-24" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{t.services.subtitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.services.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-2xl px-6 pb-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200">
                        {icons[index]}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-slate-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-slate-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;