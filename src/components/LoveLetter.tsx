import React from 'react';
import { Heart } from 'lucide-react';

const LoveLetter = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <Heart className="text-romantic-rose mx-auto mb-3 animate-heartbeat" size={32} fill="currentColor" />
              <h2 className="font-dancing text-3xl md:text-4xl text-white mb-2">
                Carta de Amor
              </h2>
              <div className="w-16 h-0.5 bg-white mx-auto"></div>
            </div>

            <div className="space-y-4 text-center">
              <p className="font-caveat text-xl md:text-2xl text-white leading-relaxed italic">
                "Amor da minha vida,"
              </p>
              
              <p className="font-caveat text-lg md:text-xl text-white leading-relaxed">
              A cada novo dia, percebo mais o quanto você é uma resposta das orações que fiz a Deus. 
              Ele, em Sua infinita bondade, me presenteou com o privilégio de caminhar ao lado de alguém
              que reflete o amor dEle em cada gesto. Você é meu lar, minha vida, meu propósito!
.
              </p>
              
              <p className="font-caveat text-xl md:text-2xl text-white leading-relaxed italic font-semibold">
                "Te amo infinitamente!"
              </p>

              <div className="flex items-center justify-center gap-2 pt-3">
                <Heart className="text-romantic-rose animate-heartbeat" size={16} fill="currentColor" />
                <p className="font-dancing text-lg text-white">
                  Para sempre, Gabriel da Danni
                </p>
                <Heart className="text-romantic-rose animate-heartbeat" size={16} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
