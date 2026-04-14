
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { PRODUCTS } from '../constants';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".prod-reveal", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, [filter]);

  const categories = ['Todos', 'Vestuário', 'Acessórios', 'Equipamentos', 'Segurança'];
  const filteredProducts = filter === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block prod-reveal">Ação & Tração Gear</span>
          <h1 className="font-display text-5xl md:text-8xl font-black mb-8 prod-reveal">Loja <span className="text-gradient">Oficial</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto prod-reveal">Equipe-se para a sua próxima expedição com produtos que aguentam o tranco.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 prod-reveal">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group glass rounded-[40px] overflow-hidden border-none flex flex-col p-5 prod-reveal">
              <div className="aspect-square rounded-[30px] overflow-hidden mb-8 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur-lg text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-xl">
                  {product.category}
                </div>
              </div>
              <div className="px-2 flex-grow flex flex-col">
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-gray-400 font-mono text-2xl mb-8">{product.price}</p>
                <div className="mt-auto">
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-white text-dark hover:bg-accent hover:text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-black/20"
                  >
                    Eu Quero Este
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Nenhum produto encontrado nesta categoria no momento.</p>
          </div>
        )}

        <div className="mt-24 p-12 md:p-20 glass rounded-[50px] border-accent/10 flex flex-col md:flex-row items-center gap-12 prod-reveal">
           <div className="md:w-1/2">
             <h2 className="font-display text-4xl font-bold mb-6">Pedidos Sob <span className="text-accent">Medida</span></h2>
             <p className="text-gray-400 text-lg leading-relaxed">Não encontrou o que precisava? Desenvolvemos uniformes para grupos e capas de estepe personalizadas para sua equipe ou família.</p>
           </div>
           <div className="md:w-1/2 flex justify-end">
             <a href="https://wa.me/5519971475706" className="bg-accent text-white font-bold py-5 px-10 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-accent/20 uppercase tracking-widest text-sm">Consultar Personalização</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
