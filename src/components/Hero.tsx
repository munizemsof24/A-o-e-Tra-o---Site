
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { View } from '@/App';

interface HeroProps {
  setView: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    )
    .fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
      '-=0.5'
    )
    .fromTo(ctaRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, 
      '-=0.3'
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark z-10" />
        <img 
          src="https://res.cloudinary.com/dnr6vszvt/image/upload/v1740058253/WhatsApp_Image_2025-02-17_at_16.09.28_sh06s2.jpg" 
          alt="Expedição Ação e Tração 4x4" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-bold tracking-widest uppercase">Expedições 2026 Abertas</span>
          </div>
          
          <h1 ref={titleRef} className="font-display text-5xl md:text-8xl font-black leading-tight mb-8">
            VOCÊ TEM UM 4X4?<br />
            <span className="text-gradient">VIVA ESSA AVENTURA!</span>
          </h1>
          
          <p ref={subtitleRef} className="text-gray-200 text-lg md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-lg">
            A Ação e Tração organiza expedições off-road de alto padrão que unem aventura, contato com a natureza e o ambiente familiar que você busca.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView('destinations')}
              className="bg-accent hover:bg-accentDark text-white text-center font-bold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-accent/40"
            >
              Ver Expedições
            </button>
            <button 
              onClick={() => setView('course')}
              className="glass hover:bg-white/10 text-center font-bold py-5 px-12 rounded-2xl transition-all border border-white/20 backdrop-blur-xl"
            >
              Curso Iniciante 4x4
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
