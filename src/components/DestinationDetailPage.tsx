
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { DESTINATIONS, PARTNERS } from '@/constants';

interface DestinationDetailPageProps {
  destinationId: string;
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ destinationId }) => {
  const dest = DESTINATIONS.find(d => d.id === destinationId);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".dest-detail-reveal", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, [destinationId]);

  if (!dest) return <div className="pt-32 text-center">Destino não encontrado.</div>;

  return (
    <div className="pt-32 pb-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Bloco 1: Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block dest-detail-reveal">Expedição Exclusiva</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 dest-detail-reveal">{dest.city} <br /><span className="text-gradient">Off-Road</span></h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 dest-detail-reveal">
              {dest.description} Uma jornada imersiva onde a natureza dita o ritmo e a aventura é garantida para toda a família.
            </p>
            <div className="flex gap-4 dest-detail-reveal">
               <a href="https://wa.me/5519971475706" className="bg-accent text-white font-bold py-5 px-10 rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-accent/20">Quero Participar</a>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] lg:aspect-video shadow-2xl dest-detail-reveal">
            <img 
              src={dest.image} 
              className="w-full h-full object-cover" 
              alt={dest.city}
            />
            <div className="absolute inset-0 bg-accent/10" />
          </div>
        </div>

        {/* Bloco 2: Vídeo */}
        {dest.videoUrl && (
          <div className="mb-24 dest-detail-reveal">
            <div className="aspect-video w-full rounded-[40px] overflow-hidden glass border-none shadow-2xl relative">
               <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={dest.videoUrl} 
                  title={`Expedição ${dest.city}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
        )}

        {/* Bloco 3: Itinerário */}
        {dest.itinerary && (
          <div className="mb-12 dest-detail-reveal">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Itinerário da <span className="text-accent">Aventura</span></h2>
              <p className="text-gray-400">Cada curva uma nova história.</p>
            </div>
            <div className="glass p-8 md:p-12 rounded-[40px] border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {dest.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-accent font-bold border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                        {item.day}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bloco 4: Galeria (Aumentada e com Layout mais denso) */}
        {dest.gallery && (
          <div className="mb-24 dest-detail-reveal">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Galeria <span className="text-gradient">do Destino</span></h2>
              <p className="text-gray-400">Flagras inesquecíveis das nossas passagens por {dest.city}.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {dest.gallery.map((img, i) => (
                <div key={i} className="aspect-square rounded-[24px] overflow-hidden group border border-white/5 shadow-lg">
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={`${dest.city} - Foto ${i + 1}`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloco 5: Shorts/Depoimentos */}
        {dest.shorts && (
          <div className="mb-24 dest-detail-reveal">
             <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Destaques da <span className="text-accent">Trilha</span></h2>
              <p className="text-gray-400">Momentos de pura adrenalina capturados em vídeo.</p>
            </div>
            <div className={`grid grid-cols-2 gap-4 md:gap-8 ${dest.shorts.length === 3 ? 'md:grid-cols-3 lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
              {dest.shorts.map((v, i) => (
                <div key={i} className="aspect-[9/16] rounded-3xl overflow-hidden glass shadow-xl relative group border-none">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloco 6: CTA Final */}
        <div className="bg-darkLighter p-12 md:p-20 rounded-[50px] border border-white/5 relative overflow-hidden dest-detail-reveal text-center">
           <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Partiu <span className="text-gradient">{dest.city}?</span></h2>
           <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">As vagas para este roteiro são limitadas para garantir a melhor experiência e segurança do comboio.</p>
           <a href="https://wa.me/5519971475706" className="inline-block bg-white text-dark font-black py-6 px-16 rounded-2xl text-xl hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95">Consultar Disponibilidade</a>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
