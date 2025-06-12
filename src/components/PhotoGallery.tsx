import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fotos do casal Dannieli & Gabriel
  const photos = [
    {
      id: 1,
      src: "/fotos/Inicio.jpeg",
      caption: "Nosso início de namoro ❤️",
      date: "Novembro 2015"
    },
    {
      id: 2,
      src: "/fotos/Casamento.jpeg",
      caption: "Nosso casamento 💒",
      date: "O dia mais feliz"
    },
    {
      id: 3,
      src: "/fotos/Lua de Mel.jpeg",
      caption: "Lua de mel romântica 🌙",
      date: "Momento inesquecível"
    },
    {
      id: 4,
      src: "/fotos/Nossa Casinha.jpeg",
      caption: "Nossa casinha 🏠",
      date: "Nosso lar"
    },
    {
      id: 5,
      src: "/fotos/Monte Verde.jpeg",
      caption: "Viagem a Monte Verde 🏔️",
      date: "Aventura juntos"
    },
    {
      id: 6,
      src: "/fotos/Natal e Doguinho.jpeg",
      caption: "Natal com o doguinho 🐕",
      date: "Família completa"
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="text-romantic-rose animate-heartbeat" size={32} fill="currentColor" />
            <h2 className="font-dancing text-4xl md:text-5xl text-white">
              Nossas Memórias
            </h2>
            <Heart className="text-romantic-rose animate-heartbeat" size={32} fill="currentColor" />
          </div>
          <p className="font-caveat text-xl text-white opacity-80">
            Momentos especiais que guardamos no coração
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30">
            <div className="aspect-[4/3] relative">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].caption}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{
                  objectPosition: (() => {
                    switch(currentIndex) {
                      case 0: return 'center 25%'; // Nosso início de namoro
                      case 1: return 'center 35%'; // Nosso casamento
                      case 2: return 'center center'; // Lua de mel
                      case 3: return 'center 25%'; // Nossa casinha
                      case 4: return 'center center'; // Monte Verde
                      case 5: return 'center 80%'; // Natal e Doguinho
                      default: return 'center center';
                    }
                  })()
                }}
                onClick={() => setIsModalOpen(true)}
              />
              
              {/* Overlay with caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="font-caveat text-2xl text-white mb-2">
                  {photos[currentIndex].caption}
                </p>
                <p className="font-dancing text-lg text-romantic-gold">
                  {photos[currentIndex].date}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-romantic-coral scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => goToPhoto(index)}
              className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 border-3 ${
                index === currentIndex 
                  ? 'border-romantic-coral shadow-lg shadow-romantic-coral/30' 
                  : 'border-white/30 hover:border-romantic-rose/50'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className={`w-full h-full object-cover ${
                  index === 0 || index === 1 || index === 3 
                    ? 'object-center' 
                    : 'object-center'
                }`}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-romantic-coral/20 flex items-center justify-center">
                  <Heart className="text-white animate-heartbeat" size={24} fill="currentColor" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          
        </div>
      </div>

      {/* Modal para visualização completa */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-4">
            {/* Botão fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Imagem em tamanho completo */}
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />

            {/* Legenda */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="font-caveat text-2xl text-white mb-2">
                  {photos[currentIndex].caption}
                </p>
                <p className="font-dancing text-lg text-romantic-gold">
                  {photos[currentIndex].date}
                </p>
              </div>
            </div>

            {/* Navegação no modal */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </>
            )}
          </div>

          {/* Clique fora para fechar */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
