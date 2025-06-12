import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
            <Heart className="text-romantic-rose animate-heartbeat" size={28} fill="currentColor" />
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
          </div>
          
          <blockquote className="font-dancing text-3xl md:text-4xl text-white mb-8 italic leading-relaxed max-w-3xl mx-auto">
            "Desde o primeiro olhar, para sempre em meu coração."
          </blockquote>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart className="text-romantic-rose animate-heartbeat" size={18} fill="currentColor" />
            <p className="font-caveat text-xl text-white">
              Feito com amor para Dannieli
            </p>
            <Heart className="text-romantic-rose animate-heartbeat" size={18} fill="currentColor" />
          </div>

          <div className="text-center">
            <p className="font-caveat text-base text-white opacity-70">
              2015 ∞
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
