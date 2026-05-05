
import React, { useState, useEffect } from 'react';
import { View } from '@/App';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  setView: (view: View) => void;
  currentView: View;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://i.ibb.co/0pdH9fcW/logotipoacaoetracao.png";

  const handleNavClick = (view: View) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'py-2 glass shadow-2xl shadow-black/50' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setView('home')} className="flex items-center gap-4 transition-all duration-300 hover:scale-105 active:scale-95 group">
          <div className="relative flex items-center gap-3">
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={logoUrl} 
              alt="Ação & Tração 4x4" 
              className="h-12 md:h-16 w-auto object-contain relative z-10"
            />
          </div>
        </button>
        
        <nav className="hidden lg:flex items-center gap-10">
          <button onClick={() => setView('home')} className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 relative group ${currentView === 'home' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button onClick={() => setView('about')} className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 relative group ${currentView === 'about' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Sobre
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${currentView === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button onClick={() => setView('destinations')} className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 relative group ${currentView === 'destinations' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Expedições
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${currentView === 'destinations' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button onClick={() => setView('course')} className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 relative group ${currentView === 'course' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Curso 4x4
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${currentView === 'course' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button onClick={() => setView('shop')} className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 relative group ${currentView === 'shop' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Loja
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${currentView === 'shop' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
        </nav>

        <div className="flex items-center gap-4 lg:gap-8">
          <a 
            href="https://wa.me/5519971475706" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-accent hover:bg-accentDark text-white font-black py-3 px-6 md:px-8 rounded-xl text-[10px] md:text-xs uppercase tracking-wider transition-all transform hover:translate-y-[-2px] active:scale-95 shadow-xl shadow-accent/20"
          >
            Agendar Agora
          </a>
          
          <button 
            className="lg:hidden text-white hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[72px] md:top-[88px] bg-dark/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center p-8 gap-8 h-full pb-32">
          <button onClick={() => handleNavClick('home')} className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${currentView === 'home' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Home
          </button>
          <button onClick={() => handleNavClick('about')} className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${currentView === 'about' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Sobre
          </button>
          <button onClick={() => handleNavClick('destinations')} className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${currentView === 'destinations' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Expedições
          </button>
          <button onClick={() => handleNavClick('course')} className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${currentView === 'course' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Curso 4x4
          </button>
          <button onClick={() => handleNavClick('shop')} className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${currentView === 'shop' ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>
            Loja
          </button>
          
          <a 
            href="https://wa.me/5519971475706" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 bg-accent hover:bg-accentDark text-white font-black py-4 px-10 rounded-xl text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-accent/20"
          >
            Agendar Agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
