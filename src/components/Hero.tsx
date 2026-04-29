
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { View } from '@/App';

const backgroundImages = [
  "https://i.ibb.co/GS2CLh6/ezgif-frame-001.jpg",
  "https://i.ibb.co/PRfBKd3/ezgif-frame-002.jpg",
  "https://i.ibb.co/G4LxDT4S/ezgif-frame-003.jpg",
  "https://i.ibb.co/nqbrvF4c/ezgif-frame-004.jpg",
  "https://i.ibb.co/4n4mym1m/ezgif-frame-005.jpg",
  "https://i.ibb.co/Nn9YMSdF/ezgif-frame-006.jpg",
  "https://i.ibb.co/k2nLc6ZF/ezgif-frame-007.jpg",
  "https://i.ibb.co/tPqtwnbw/ezgif-frame-008.jpg",
  "https://i.ibb.co/39Fw8CL2/ezgif-frame-009.jpg",
  "https://i.ibb.co/TxmPcSwP/ezgif-frame-010.jpg",
  "https://i.ibb.co/SwJwBvKp/ezgif-frame-011.jpg",
  "https://i.ibb.co/tMtWz16M/ezgif-frame-012.jpg",
  "https://i.ibb.co/TDcxZRZc/ezgif-frame-013.jpg",
  "https://i.ibb.co/DfxsDPfn/ezgif-frame-014.jpg",
  "https://i.ibb.co/v6HYKCGF/ezgif-frame-015.jpg",
  "https://i.ibb.co/9k0k9PbZ/ezgif-frame-016.jpg",
  "https://i.ibb.co/chqTXYnp/ezgif-frame-017.jpg",
  "https://i.ibb.co/tTqCMtdt/ezgif-frame-018.jpg",
  "https://i.ibb.co/gbvx2Ng4/ezgif-frame-019.jpg",
  "https://i.ibb.co/GfBnxHJ1/ezgif-frame-020.jpg",
  "https://i.ibb.co/Fk9bMYwT/ezgif-frame-021.jpg",
  "https://i.ibb.co/yFftLpgD/ezgif-frame-022.jpg",
  "https://i.ibb.co/1G1z8xTs/ezgif-frame-023.jpg",
  "https://i.ibb.co/23w3JkXk/ezgif-frame-024.jpg",
  "https://i.ibb.co/gMY9wSQT/ezgif-frame-025.jpg"
];

interface HeroProps {
  setView: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

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

    let frame = 0;
    const interval = setInterval(() => {
      frame = (frame + 1) % backgroundImages.length;
      setCurrentFrame(frame);
    }, 120);

    return () => { 
      tl.kill(); 
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark z-20" />
        {backgroundImages.map((src, idx) => (
          <img 
            key={src}
            src={src} 
            alt="Expedição Ação e Tração 4x4 background frame" 
            className={`absolute inset-0 z-10 w-full h-full object-cover object-center scale-105 ${
              idx === currentFrame ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
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
