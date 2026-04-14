
import React, { useState } from 'react';
import { FAQ } from '@/constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Dúvidas <span className="text-gradient">Frequentes</span></h2>
        <p className="text-gray-400">Tudo o que você precisa saber antes de ligar a chave.</p>
      </div>

      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <div 
            key={index} 
            className={`glass overflow-hidden rounded-[24px] border transition-all duration-300 ${openIndex === index ? 'border-accent/40 bg-white/5' : 'border-white/5'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-8 flex items-center justify-between text-left"
            >
              <span className="font-bold text-lg md:text-xl pr-8">{item.question}</span>
              <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-400 leading-relaxed text-lg">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">Ainda tem dúvidas?</p>
        <a 
          href="https://wa.me/5519971475706" 
          className="text-accent hover:text-white font-bold text-lg flex items-center justify-center gap-2 group transition-colors"
        >
          Falar diretamente no WhatsApp
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
