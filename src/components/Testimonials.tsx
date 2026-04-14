
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { TESTIMONIALS } from '@/constants';

const Testimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoData = [
    {
      id: "intl-2025",
      title: "Expedição Internacional 2025",
      subtitle: "Destaques e Aventuras nos Andes",
      thumbnail: "https://images.unsplash.com/photo-1544627710-7f294df62602?auto=format&fit=crop&q=80&w=1200",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemplo: Substituir pelo ID real do canal
    },
    {
      id: "depoimento-geral",
      title: "Relatos da Estrada",
      subtitle: "A experiência vista por nossos clientes",
      thumbnail: "https://images.unsplash.com/photo-1594911771143-6c7c093a1290?auto=format&fit=crop&q=80&w=1200",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemplo
    }
  ];

  const openVideo = (url: string) => {
    setActiveVideo(url);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Prova Social</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Quem foi, <span className="text-gradient">recomenda!</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="glass p-10 rounded-[40px] relative group hover:border-accent/20 transition-all">
            <div className="absolute top-[-20px] left-10 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-dark font-black text-4xl shadow-xl shadow-accent/20">"</div>
            <p className="text-gray-300 italic mb-8 pt-4 leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-white/5 group-hover:border-accent/50 transition-colors" />
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-accent text-sm font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videoData.map((video) => (
          <div 
            key={video.id}
            className={`aspect-video glass rounded-[40px] overflow-hidden group relative flex items-center justify-center cursor-pointer border-none shadow-2xl ${video.id === 'intl-2025' ? 'ring-2 ring-accent/30 ring-offset-4 ring-offset-dark' : ''}`}
            onClick={() => openVideo(video.videoUrl)}
          >
             <img 
              src={video.thumbnail} 
              className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" 
              alt={video.title}
             />
             
             {/* Dynamic Play Button */}
             <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-all transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
             </div>

             <div className="absolute bottom-8 left-8 z-10">
                <p className="text-sm font-bold uppercase tracking-wider text-accent mb-1">{video.subtitle}</p>
                <h4 className="text-2xl font-bold font-display">{video.title}</h4>
             </div>

             {/* Highlight badge for International Expedition */}
             {video.id === 'intl-2025' && (
               <div className="absolute top-8 right-8 z-10 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                 Destaque 2025
               </div>
             )}
          </div>
        ))}
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-dark/95 backdrop-blur-3xl" onClick={closeVideo} />
          
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-scaleIn">
            <button 
              onClick={closeVideo}
              className="absolute top-4 right-4 z-[110] w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe 
              src={`${activeVideo}?autoplay=1`} 
              title="Ação e Tração Video Player"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
