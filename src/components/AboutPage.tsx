
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
              src="https://i.ibb.co/hxJLJKDK/Whats-App-Image-2026-05-05-at-15-26-13.jpg" 
              alt="Fundador Ação e Tração" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-10 left-10">
                <h4 className="font-display text-3xl font-bold">Rodrigo Salvato</h4>
                <p className="text-accent font-bold uppercase tracking-widest text-xs">Fundador</p>
             </div>
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8"><span className="text-accent">Sobre a</span> Ação e Tração</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                O principal objetivo das expedições é proporcionar uma experiência única em trilhas off-road, promovendo aventura, contato com a natureza e valorização dos patrimônios culturais e históricos das regiões.
              </p>
              <p>
                As expedições são planejadas para oferecer segurança e diversão, com foco na preservação ambiental e cultural. Com trilhas em áreas exclusivas, belas paisagens e desbravamento de caminhos pouco explorados, é perfeito para criar memórias duradouras, cultivando a cultura off-road.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Bio section */}
        <div className="mb-32 about-reveal bg-darkLighter/50 p-10 md:p-16 rounded-[40px] border border-white/5 backdrop-blur-sm">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8"><span className="text-accent">Sobre o</span> fundador</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p className="text-xl text-white">
              <strong>Rodrigo Salvato</strong> é empresário e Jipeiro raiz, com diversas expedições pelo Brasil e mundo. Com experiência nas expedições:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 pt-4 ml-6 list-disc marker:text-accent">
              <li>BR319 - Rodovia Fantasma</li>
              <li>BR230 - Transamazônica</li>
              <li>BR163 - Transgarimpeira</li>
              <li>Serras Catarinense</li>
              <li>Caminho da Fé</li>
              <li>Estrada Real</li>
              <li>Trilhas da Mata Atlântica</li>
              <li>Expedição Buraco do Camel</li>
              <li>Expedições internacionais Chile, Argentina e Panamá.</li>
            </ul>
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
