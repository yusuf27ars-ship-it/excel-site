import React, { useState } from 'react';
import { Play, Clock, BarChart, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoTutorials: React.FC = () => {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Mock video IDs for educational content (using generic Microsoft/Excel related placeholders)
  const videoIds = [
    "W8_Kh4872X0", // General Excel
    "T72vJb4Z7C8", // Power BI
    "vv3g_vVv4c0"  // VBA
  ];

  const levels = ['intermediate', 'beginner', 'advanced'];

  return (
    <div id="training-section" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{t.training.subtitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.training.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.training.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.training.videos.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group">
              {/* Thumbnail Container */}
              <div 
                className="relative h-48 bg-slate-900 cursor-pointer overflow-hidden"
                onClick={() => setActiveVideo(index)}
              >
                <img 
                  src={`https://img.youtube.com/vi/${videoIds[index]}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-indigo-600/90 text-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-3">
                   <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${
                     levels[index] === 'beginner' ? 'bg-green-50 text-green-600 border-green-100' :
                     levels[index] === 'intermediate' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                     'bg-purple-50 text-purple-600 border-purple-100'
                   }`}>
                     {levels[index] === 'beginner' ? t.training.beginner : 
                      levels[index] === 'intermediate' ? t.training.intermediate : 
                      t.training.advanced}
                   </span>
                   <span className="text-slate-400 text-xs flex items-center">
                     <BarChart className="w-3 h-3 mr-1" />
                     {t.training.level}
                   </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {video.desc}
                </p>

                <button 
                  onClick={() => setActiveVideo(index)}
                  className="mt-auto w-full py-2 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-lg text-sm font-medium transition-colors border border-slate-200 hover:border-indigo-200"
                >
                  {t.training.watchNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe 
                className="w-full h-[500px]"
                src={`https://www.youtube.com/embed/${videoIds[activeVideo]}?autoplay=1`} 
                title={t.training.videos[activeVideo].title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTutorials;