
import React from 'react';

interface BeginnerCourseProps {
  onMoreInfo: () => void;
}

const BeginnerCourse: React.FC<BeginnerCourseProps> = ({ onMoreInfo }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="rounded-[40px] overflow-hidden bg-gradient-to-br from-darkLighter to-dark border border-white/5 shadow-2xl flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 p-8 md:p-16">
          <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-xs uppercase mb-8">Treinamento Especializado</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Curso Iniciante 4x4 <br /><span className="text-gray-500">São Pedro-SP</span></h2>
          
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Aprenda a ler o terreno, entender o seu veículo, usar corretamente os sistemas de tração e tomar decisões seguras em situações reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://wa.me/5519971475706" 
              className="inline-block bg-white text-dark text-center font-bold py-4 px-10 rounded-2xl hover:bg-accent hover:text-white transition-all transform active:scale-95"
            >
              Inscrição WhatsApp
            </a>
            <button 
              onClick={onMoreInfo}
              className="inline-block glass text-white font-bold py-4 px-10 rounded-2xl hover:bg-white/10 transition-all border border-white/5"
            >
              Detalhes do Curso
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full h-full relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
            alt="Off-road Training" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default BeginnerCourse;
