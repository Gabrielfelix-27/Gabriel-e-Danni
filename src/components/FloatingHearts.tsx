
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 15
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        >
          <Heart 
            size={heart.size} 
            fill="hsl(var(--romantic-rose))" 
            color="hsl(var(--romantic-rose))"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
