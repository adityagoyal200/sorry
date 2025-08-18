// /components/BackgroundAnimation.tsx
import React, { useEffect, useState } from 'react';

const emojis = ['🚀', '🔥', '🌈', '🐒', '🦄', '💥', '🍕', '🎉'];

export default function BackgroundAnimation() {
  const [floaters, setFloaters] = useState<
    { id: number; emoji: string; x: number; y: number; size: number; speed: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // rem
      speed: Math.random() * 20 + 10, // seconds per loop
    }));
    setFloaters(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 animate-gradient">
      {floaters.map((f) => (
        <div
          key={f.id}
          className="absolute animate-float"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            fontSize: `${f.size}rem`,
            animationDuration: `${f.speed}s`,
          }}
        >
          {f.emoji}
        </div>
      ))}
    </div>
  );
}
