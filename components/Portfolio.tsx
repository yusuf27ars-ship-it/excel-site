import React, { useState } from 'react';
import { ExternalLink, BarChart2, Table, Layout, Database, X, CheckCircle, ArrowRight, AlertTriangle, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const projectMeta = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Power BI", "DAX", "SQL"],
      icon: <BarChart2 className="w-5 h-5" />,
      category: "Power BI"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Excel", "VBA", "UserForm"],
      icon: <Table className="w-5 h-5" />,
      category: "Excel VBA"
    },
    {
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Star Schema", "Data Warehouse", "SQL"],
      icon: <Network className="w-5 h-5" />,
      category: "Veri Mimarisi"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["SQL", "ETL", "Python"],
      icon: <Database className="w-5 h-5" />,
      category: "Veri Analizi"
    }
  ];

  const handleOpenModal = (index: number) => {
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/475569?text=Gorsel+Yuklenemedi";
  };

  const selectedProject = selectedProjectIndex !== null ? t.portfolio.items[selectedProjectIndex] : null;
  const selectedMeta = selectedProjectIndex !== null ? projectMeta[selectedProjectIndex] : null;

  return (
    <div id="projects-section" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{t.portfolio.subtitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.portfolio.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.portfolio.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {t.portfolio.items.map((project, index) => (
            <div 
                key={index} 
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handleOpenModal(index)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={projectMeta[index].image} 
                  alt={project.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-indigo-700 shadow-lg backdrop-blur-sm">
                    {projectMeta[index].icon}
                    <span className="ml-2">{projectMeta[index].category}</span>
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {projectMeta[index].tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                  {t.portfolio.details} <ExternalLink className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <p className="text-slate-500 mb-6">{t.portfolio.cta}</p>
             <button 
                onClick={() => {
                   const element = document.getElementById('contact-section');
                   element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
             >
                {t.portfolio.ctaButton}
             </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && selectedMeta && (
        <div 
            className="fixed inset-0 z-[60] overflow-y-auto" 
            aria-labelledby="modal-title" 
            role="dialog" 
            aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" 
            onClick={handleCloseModal}
          ></div>

          <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-2xl shadow-2xl text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-4xl w-full">
              
              {/* Close Button */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-slate-600 hover:text-slate-900 rounded-full p-2 transition-colors backdrop-blur-md"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80">
                 <img 
                    src={selectedMeta.image} 
                    alt={selectedProject.title} 
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                     <h3 className="text-3xl font-bold text-white shadow-sm" id="modal-title">
                        {selectedProject.title}
                     </h3>
                     <div className="mt-2 flex flex-wrap gap-2">
                        {selectedMeta.tags.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                  </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 sm:p-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Challenge */}
                    <div className="space-y-4">
                        <div className="flex items-center text-amber-600 font-semibold uppercase tracking-wider text-sm">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            {t.portfolio.modal.challenge}
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            {selectedProject.challenge}
                        </p>
                    </div>

                    {/* Middle Column: Solution */}
                    <div className="space-y-4 relative md:border-l md:border-r border-slate-100 md:px-6">
                        <div className="flex items-center text-indigo-600 font-semibold uppercase tracking-wider text-sm">
                            <Layout className="w-5 h-5 mr-2" />
                            {t.portfolio.modal.solution}
                        </div>
                         <p className="text-slate-600 leading-relaxed">
                            {selectedProject.solution}
                        </p>
                    </div>

                    {/* Right Column: Result */}
                    <div className="space-y-4">
                         <div className="flex items-center text-green-600 font-semibold uppercase tracking-wider text-sm">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            {t.portfolio.modal.outcome}
                        </div>
                         <p className="text-slate-600 leading-relaxed">
                            {selectedProject.outcome}
                        </p>
                    </div>
                </div>

                <div className="mt-10 border-t border-slate-100 pt-8 flex justify-end">
                     <button
                        onClick={() => {
                           handleCloseModal();
                           const element = document.getElementById('contact-section');
                           element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all"
                      >
                        {t.portfolio.ctaButton}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;