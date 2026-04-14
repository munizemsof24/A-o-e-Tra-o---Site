
import React from 'react';
import { PARTNERS } from '@/constants';

const AuthorityBar: React.FC = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-dark overflow-hidden">
      <div className="marquee-content">
        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
          <div key={index} className="flex items-center mx-12">
            <span className="text-2xl md:text-4xl font-display font-extrabold text-white/20 whitespace-nowrap uppercase tracking-tighter hover:text-accent transition-colors cursor-default">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorityBar;
