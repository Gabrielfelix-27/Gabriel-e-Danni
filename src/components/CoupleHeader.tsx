
import React from 'react';

const CoupleHeader = () => {
  return (
    <header className="text-center py-16 relative z-10">
      <div className="animate-fadeInUp">
        <h1 className="font-kaushan text-5xl md:text-7xl text-transparent bg-gradient-to-r from-romantic-rose via-romantic-gold to-romantic-coral bg-clip-text mb-6">
          Dannieli & Gabriel
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-romantic-rose to-romantic-gold mx-auto rounded-full mb-6"></div>
        <p className="font-dancing text-xl md:text-2xl text-romantic-coral opacity-90">
          Nossa história de amor infinito
        </p>
      </div>
    </header>
  );
};

export default CoupleHeader;
