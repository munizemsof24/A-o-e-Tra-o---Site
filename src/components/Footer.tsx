
import React from 'react';
import { View } from '@/App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const logoUrl = "https://i.ibb.co/0pdH9fcW/logotipoacaoetracao.png";

  return (
    <footer className="bg-dark pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
             <button onClick={() => setView('home')} className="flex items-center gap-2 mb-8 group">
              <img 
                src={logoUrl} 
                alt="Ação & Tração Logo" 
                className="h-20 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
            </button>
            <p className="text-gray-400 text-lg max-w-sm mb-8 leading-relaxed">
              Mais que um passeio, uma jornada inesquecível em família. Experiência off-road real com total segurança e conexão com a natureza.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/acaoetracao/" target="_blank" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.youtube.com/@CanalA%C3%A7%C3%A3oeTra%C3%A7%C3%A3o" target="_blank" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-xl uppercase tracking-tighter">Navegação</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => setView('home')} className="hover:text-accent transition-colors">Home</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-accent transition-colors">Sobre a Empresa</button></li>
              <li><button onClick={() => setView('destinations')} className="hover:text-accent transition-colors">Expedições</button></li>
              <li><button onClick={() => setView('course')} className="hover:text-accent transition-colors">Curso 4x4</button></li>
              <li><button onClick={() => setView('shop')} className="hover:text-accent transition-colors">Loja Oficial</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-xl uppercase tracking-tighter">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="text-white font-bold font-mono text-lg tracking-tight">(19) 97147-5706</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-gray-500 text-sm font-medium">© 2026 Ação e Tração - Expedições Off-Road. | CNPJ: 36.927.621/0001-62</p>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Políticas de Segurança</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
