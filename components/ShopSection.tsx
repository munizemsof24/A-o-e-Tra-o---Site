
import React from 'react';
import { PRODUCTS } from '../constants';

interface ShopSectionProps {
  onExplore: () => void;
}

const ShopSection: React.FC<ShopSectionProps> = ({ onExplore }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Store</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Equipamentos <span className="text-gradient">Oficiais</span></h2>
          <p className="text-gray-400 mt-4">Leve a marca da aventura com você. Produtos exclusivos desenvolvidos para quem vive o off-road.</p>
        </div>
        <button onClick={onExplore} className="text-accent hover:text-white font-bold flex items-center gap-2 group transition-all">
          Ver Loja Completa
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group glass rounded-[32px] overflow-hidden border-none flex flex-col p-4 hover:border-accent/20 transition-all">
            <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 bg-accent/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                {product.category}
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
              <p className="text-gray-400 font-mono text-lg mb-6">{product.price}</p>
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center glass border-white/10 hover:bg-white hover:text-dark font-bold py-3 rounded-xl transition-all"
              >
                Comprar via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
