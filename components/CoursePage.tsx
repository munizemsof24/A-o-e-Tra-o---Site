
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CoursePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".course-reveal", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, []);

  const curriculum = [
    { 
      time: "08:30", 
      title: "Recepção e Café", 
      desc: "Credenciamento e café da manhã premium com a equipe e outros alunos." 
    },
    { 
      time: "09:30", 
      title: "Teoria Aplicada", 
      desc: "Sistemas de tração, mecânica básica, ângulos de entrada/saída e dinâmica de solo." 
    },
    { 
      time: "11:00", 
      title: "Prática em Campo I", 
      desc: "Abordagem de subidas, descidas e inclinações laterais controladas." 
    },
    { 
      time: "13:00", 
      title: "Almoço Off-Road", 
      desc: "Pausa para integração e troca de experiências entre os participantes." 
    },
    { 
      time: "14:30", 
      title: "Prática em Campo II", 
      desc: "Travessia de atoleiros, erosões e técnicas avançadas de condução." 
    },
    { 
      time: "16:30", 
      title: "Resgate e Segurança", 
      desc: "Uso de cintas, manilhas e técnicas seguras de desatolagem." 
    },
    { 
      time: "17:30", 
      title: "Encerramento", 
      desc: "Entrega de certificados e confraternização final." 
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1594911771143-6c7c093a1290?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400"
  ];

  const videoShorts = [
    { id: "dQw4w9WgXcQ", title: "Experiência Incrível" },
    { id: "dQw4w9WgXcQ", title: "Segurança Total" },
    { id: "dQw4w9WgXcQ", title: "Aprendizado Real" },
    { id: "dQw4w9WgXcQ", title: "Família no Offroad" }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Bloco 1: Hero do Curso */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block course-reveal">O Próximo Nível</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 course-reveal">Domine seu 4x4 com <span className="text-gradient">Segurança</span></h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 course-reveal">
              Mais que um curso, um dia de imersão total no universo off-road em São Pedro-SP. Ideal para proprietários de SUVs e Picapes que querem explorar o potencial máximo de seus veículos sem riscos.
            </p>
            <div className="flex gap-4 course-reveal">
               <a href="https://wa.me/5519971475706" className="bg-accent text-white font-bold py-5 px-10 rounded-2xl hover:scale-105 transition-transform">Inscrever-se Agora</a>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden aspect-video shadow-2xl course-reveal">
            <img 
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover" 
              alt="Course Practice"
            />
            <div className="absolute inset-0 bg-accent/10 hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        {/* Bloco 2: Vídeo Institucional */}
        <div className="mb-24 course-reveal">
          <div className="aspect-video w-full rounded-[40px] overflow-hidden glass border-none shadow-2xl relative">
             <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Curso 4x4 Ação e Tração"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
        </div>

        {/* Bloco 3: Cronograma do Curso */}
        <div className="mb-24 course-reveal">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Cronograma do <span className="text-accent">Dia</span></h2>
            <p className="text-gray-400">Uma jornada planejada do básico ao avançado.</p>
          </div>
          <div className="glass p-8 md:p-12 rounded-[40px] border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculum.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent font-bold text-sm border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                      {item.time}
                    </div>
                    {i !== curriculum.length - 1 && <div className="w-px h-full bg-white/10 mt-4" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco 4: Galeria de Fotos (Densa) */}
        <div className="mb-24 course-reveal">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Galeria <span className="text-gradient">Explosiva</span></h2>
            <p className="text-gray-400">Pequenos flagras de grandes momentos.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group border border-white/5">
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
                  alt={`Treinamento 4x4 - Foto ${i+1}`} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 5: Depoimentos Shorts (Vertical) */}
        <div className="mb-24 course-reveal">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">O que dizem os <span className="text-accent">Alunos</span></h2>
            <p className="text-gray-400">Depoimentos reais gravados direto da trilha.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {videoShorts.map((video, i) => (
              <div key={i} className="aspect-[9/16] rounded-3xl overflow-hidden glass border-none shadow-xl relative group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="bg-accent/80 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Depoimento</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 6: Preço e CTA Final */}
        <div className="bg-darkLighter p-12 md:p-20 rounded-[50px] border border-white/5 relative overflow-hidden course-reveal">
           <div className="relative z-10 flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="font-display text-4xl font-bold mb-6">O que está incluso?</h2>
                <ul className="space-y-4">
                  {["Apostila Digital de Condução", "Coffee Break Premium", "Certificado de Conclusão", "Suporte VIP via WhatsApp", "Adesivo Exclusivo da Turma"].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-300">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 flex items-center">
                 <div className="glass p-8 rounded-3xl border-accent/20 w-full">
                    <p className="text-gray-500 text-sm uppercase font-bold tracking-widest mb-2">Investimento</p>
                    <p className="text-5xl font-black mb-4">R$ 890,00</p>
                    <p className="text-gray-400 mb-8">Valor por veículo (inclui acompanhante). Próxima turma: 20 de Junho.</p>
                    <a href="https://wa.me/5519971475706" className="block text-center bg-white text-dark font-black py-4 rounded-xl hover:bg-accent hover:text-white transition-all">Garantir minha Vaga</a>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
