import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CoursePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.course-content', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="course-content text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-xs uppercase mb-6">Curso Completo</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Curso Iniciante 4x4</h1>
          <p className="text-gray-400 text-xl">Domine seu veículo e explore o mundo off-road com segurança.</p>
        </div>

        <div className="course-content glass p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-accent">O que você vai aprender?</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-accent font-bold mt-1">01.</span>
              <div>
                <strong className="text-white block mb-1">Conhecendo seu 4x4</strong>
                <p>Entenda os sistemas de tração, ângulos de ataque e saída, e limites do seu veículo.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent font-bold mt-1">02.</span>
              <div>
                <strong className="text-white block mb-1">Leitura de Terreno</strong>
                <p>Como identificar obstáculos, escolher a melhor rota e evitar situações de risco.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent font-bold mt-1">03.</span>
              <div>
                <strong className="text-white block mb-1">Técnicas de Condução</strong>
                <p>Aceleração, frenagem e uso da embreagem em diferentes tipos de piso (barro, areia, pedra).</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent font-bold mt-1">04.</span>
              <div>
                <strong className="text-white block mb-1">Resgate e Segurança</strong>
                <p>Uso correto de cintas, manilhas e guincho. Procedimentos de segurança em comboio.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="course-content text-center">
          <a 
            href="https://wa.me/5519971475706" 
            className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-2xl hover:bg-accentDark transition-all transform active:scale-95"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
