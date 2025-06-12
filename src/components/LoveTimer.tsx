import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface TimeUnit {
  value: number;
  label: string;
}

const LoveTimer = () => {
  const [allTimeUnits, setAllTimeUnits] = useState<TimeUnit[]>([]);
  
  const startDate = new Date('2015-11-22T00:00:00');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      // Cálculo de anos, meses e dias
      const years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let remainingDays = now.getDate() - startDate.getDate();

      if (remainingDays < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        remainingDays += lastMonth.getDate();
      }

      if (months < 0) {
        months += 12;
      }

      setAllTimeUnits([
        { value: years, label: 'Anos' },
        { value: months, label: 'Meses' },
        { value: totalDays, label: 'Total de Dias' }
      ]);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Heart className="text-romantic-rose animate-heartbeat" size={24} fill="currentColor" />
            <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-white">
              Tempo Juntos
            </h2>
            <Heart className="text-romantic-rose animate-heartbeat" size={24} fill="currentColor" />
          </div>
          <p className="font-caveat text-lg sm:text-xl text-white opacity-80">
            Desde 22 de Novembro de 2015
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {allTimeUnits.map((unit, index) => (
            <div 
              key={unit.label}
              className="bg-white/30 backdrop-blur-md rounded-2xl p-2 sm:p-4 md:p-6 border border-white/40 hover:bg-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="font-dancing text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                  {unit.value.toLocaleString()}
                </div>
                <div className="font-caveat text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-caveat text-2xl text-white italic">
            "E cada segundo que passa, meu amor por você só cresce..."
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveTimer;
