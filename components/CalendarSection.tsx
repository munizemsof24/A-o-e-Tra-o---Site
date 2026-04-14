
import React from 'react';
import { CALENDAR } from '../constants';

const CalendarSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Calendário <span className="text-gradient">2026</span></h2>
        <p className="text-gray-400">Marque no seu GPS e venha fazer história conosco.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CALENDAR.map((monthData, idx) => (
          <div key={idx} className="glass p-8 rounded-[32px] hover:border-accent/20 transition-colors group">
            <h3 className="text-accent font-display text-3xl font-bold mb-8">{monthData.month}</h3>
            <div className="space-y-8">
              {monthData.events.map((event, eIdx) => (
                <div key={eIdx} className="relative pl-6 border-l border-white/10 group-hover:border-accent/30 transition-colors">
                  <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                  <p className="text-white font-bold text-lg leading-tight mb-1">{event.location}</p>
                  <p className="text-gray-400 text-sm">Dias {event.dates}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 glass rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 border-accent/10">
        <div>
          <h4 className="font-display text-2xl font-bold mb-2">Julho: Expedição Internacional</h4>
          <p className="text-gray-400">Argentina e Chile - 05 a 20 de Julho. Paisagens surreais e montanhas nevadas.</p>
        </div>
        <a 
          href="https://wa.me/5519971475706" 
          className="bg-accent text-white font-bold py-4 px-8 rounded-xl whitespace-nowrap"
        >
          Saber Mais sobre a Internacional
        </a>
      </div>
    </div>
  );
};

export default CalendarSection;
