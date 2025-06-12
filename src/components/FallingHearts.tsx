import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FallingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FallingHearts = () => {
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Gerar corações aleatórios
    const generateHearts = () => {
      const newHearts: FallingHeart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100, // Posição horizontal (0-100%)
          delay: Math.random() * 3, // Delay inicial (0-3s)
          duration: 3 + Math.random() * 4, // Duração da queda (3-7s)
          size: 16 + Math.random() * 16, // Tamanho (16-32px)
          opacity: 0.3 + Math.random() * 0.4, // Opacidade (0.3-0.7)
        });
      }
      setHearts(newHearts);
    };

    generateHearts();

    // Remover animação após 8 segundos
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            size={heart.size}
            className="text-romantic-rose animate-heartbeat"
            fill="currentColor"
          />
        </div>
      ))}
      
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FallingHearts; 