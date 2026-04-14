
import React from 'react';
import { DESTINATIONS } from '../constants';

interface DestinationsProps {
  onExplore: () => void;
}

const Destinations: React.FC<DestinationsProps> = ({ onExplore }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Roteiros Imperdíveis</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Cidades que <span className="text-gradient">Exploramos</span></h2>
        </div>
        <button onClick={onExplore} className="text-accent hover:text-white font-bold flex items-center gap-2 group transition-all">
          Explorar Tudo
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.slice(0, 3).map((dest, index) => (
          <div key={index} className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass border-none">
            <img 
              src={dest.image} 
              alt={dest.city} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-50"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-display text-3xl font-bold mb-2">{dest.city}</h3>
              <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm leading-relaxed">
                {dest.description}
              </p>
              <button onClick={onExplore} className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
