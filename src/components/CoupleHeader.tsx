import React, { useState } from 'react';

const CoupleHeader = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.open('https://www.exemplo.com', '_blank'); // Troque pelo link desejado
    }, 400);
  };

  return (
    <header className="text-center py-8 relative z-10">
      <div className="animate-fadeInUp">
        <h1 className="font-kaushan text-5xl md:text-7xl text-white mb-6">
          Dannieli & Gabriel
        </h1>
        <div className="w-32 h-1 bg-white mx-auto rounded-full mb-6"></div>
        <p className="font-dancing text-xl md:text-2xl text-white opacity-90 mb-4">
          Nossa história de amor infinito
        </p>
      </div>
    </header>
  );
};

export default CoupleHeader;
