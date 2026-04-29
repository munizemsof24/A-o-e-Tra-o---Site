import React from 'react';

const BentoDifferentials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full">
      {/* Large Card */}
      <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl glass p-8 min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200" 
          alt="Family Off-road" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="relative z-10 flex flex-col h-full justify-end">
          <div className="bg-accent text-white font-bold text-xs uppercase px-3 py-1 rounded-full w-fit mb-4">Exclusivo</div>
          <h3 className="font-display text-4xl font-bold mb-4">Aventura e Conexão para Toda a Família</h3>
          <p className="text-gray-300 max-w-lg">
            Nossas expedições são planejadas para todas as idades. Criamos um ambiente acolhedor onde a adrenalina encontra a harmonia familiar em meio à natureza exuberante.
          </p>
        </div>
      </div>

      {/* Side Card 1 */}
      <div className="relative group overflow-hidden rounded-3xl glass p-8 min-h-[250px] flex flex-col justify-center">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-accent">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">Comboio de Segurança</h3>
        <p className="text-gray-400 text-sm">Monitoramento e suporte técnico constante em todas as trilhas percorridas.</p>
      </div>

      {/* Side Card 2 */}
      <div className="relative group overflow-hidden rounded-3xl glass p-8 min-h-[250px] flex flex-col justify-center">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-accent">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">Carros Originais</h3>
        <p className="text-gray-400 text-sm">Você não precisa de um carro preparado. Seu 4x4 original está pronto para nossos roteiros.</p>
      </div>
    </div>
  );
};

export default BentoDifferentials;