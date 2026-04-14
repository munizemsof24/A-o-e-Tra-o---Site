
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { DESTINATIONS } from '../constants';

interface DestinationsPageProps {
  onSelect: (id: string) => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onSelect }) => {
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".dest-reveal", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, [filter]);

  const categories = ['Todos', 'São Paulo', 'Sul', 'Sudeste', 'Internacional'];

  return (
    <div className="pt-32 pb-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block dest-reveal">Nosso Mapa</span>
          <h1 className="font-display text-5xl md:text-8xl font-black mb-8 dest-reveal">Roteiros <span className="text-gradient">Lendários</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto dest-reveal">Escolha o seu próximo desafio. De passeios de um dia a travessias continentais.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 dest-reveal">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${filter === cat ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'glass text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <div key={i} className="group relative rounded-[40px] overflow-hidden glass border-none h-[500px] dest-reveal">
               <img 
                src={dest.image} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-50" 
                alt={dest.city} 
               />
               <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                     <span className="px-3 py-1 bg-accent/80 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest">4x4 Requisitado</span>
                     <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-300">Família</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">{dest.city}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {dest.description} Explore terrenos técnicos, cachoeiras escondidas e a culinária local com total suporte da nossa equipe.
                  </p>
                  <button 
                    onClick={() => onSelect(dest.id)}
                    className="w-full bg-white text-dark font-bold py-4 rounded-2xl text-center opacity-0 group-hover:opacity-100 transition-all delay-100 hover:bg-accent hover:text-white"
                  >
                    Ver Detalhes do Roteiro
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
