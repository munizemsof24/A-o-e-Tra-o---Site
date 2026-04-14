
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { PARTNER_DETAILS } from '@/constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".about-reveal", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block about-reveal">Nossa História</span>
          <h1 className="font-display text-5xl md:text-8xl font-black mb-8 about-reveal">Mais que uma Equipe, <br /><span className="text-gradient">Uma Família</span></h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto about-reveal">
            Nascida da paixão pelo off-road e do desejo de conectar pessoas com a natureza de forma segura e inesquecível.
          </p>
        </div>

        {/* Founder Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 about-reveal">
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border border-white/5 group">
             <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
              alt="Fundador Ação e Tração" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-10 left-10">
                <h4 className="font-display text-3xl font-bold">Wanderley</h4>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">Fundador & Explorador Líder</p>
             </div>
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">A Visão do <span className="text-accent">Fundador</span></h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                "Sempre acreditei que o 4x4 é a ferramenta definitiva de liberdade. Mas essa liberdade só é plena quando compartilhada com segurança e respeito à natureza."
              </p>
              <p>
                Com mais de 15 anos de experiência em trilhas pelo Brasil e América do Sul, Wanderley fundou a Ação e Tração para transformar o passeio off-road tradicional em uma experiência de imersão completa.
              </p>
              <p>
                Seu foco sempre foi a inclusão: mostrar que qualquer pessoa, com qualquer veículo 4x4 original, pode viver momentos extraordinários ao lado de sua família, desde que bem guiado e instruído.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-24 about-reveal">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Nossos <span className="text-accent">Parceiros</span></h2>
            <p className="text-gray-400 text-xl">Marcas que compartilham nossa paixão por excelência e aventura.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNER_DETAILS.map((partner, idx) => (
              <div key={idx} className="glass p-10 rounded-[40px] border-none flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
                <div className="h-24 flex items-center justify-center mb-8">
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-[200px] object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{partner.name}</h3>
                <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                  {partner.description}
                </p>
                <a 
                  href={partner.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-white/5 hover:bg-accent text-white font-bold py-4 px-10 rounded-2xl transition-all w-full md:w-auto"
                >
                  Falar com o parceiro
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-darkLighter p-12 md:p-20 rounded-[50px] border border-white/5 relative overflow-hidden about-reveal text-center">
           <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Faça parte da nossa <br /><span className="text-gradient">Próxima Jornada</span></h2>
           <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Estamos prontos para te guiar pelo desconhecido. O próximo horizonte te espera.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button onClick={() => window.location.href = '#'} className="bg-accent text-white font-black py-5 px-12 rounded-2xl text-lg hover:scale-105 transition-all shadow-2xl shadow-accent/20">Ver Expedições</button>
             <a href="https://wa.me/5519971475706" className="glass text-white font-bold py-5 px-12 rounded-2xl text-lg hover:bg-white/10 transition-all border border-white/10">Falar com Consultor</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
