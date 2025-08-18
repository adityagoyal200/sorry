import React from 'react';
import { Heart, Smile, Star } from 'lucide-react';

export default function Page3() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-pink-400 via-rose-300 to-red-300 animate-gradient font-display text-white">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_15px_#ff1493] animate-pulse">
        Our Caring Moments <Heart className="inline-block text-red-400 animate-bounce" size={48} />
      </h1>

      {/* Caring moments grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Moment 1 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">🤗</div>
          <h3 className="text-xl font-bold mb-3 text-yellow-100">Always There for Each Other</h3>
          <p className="text-white/90 leading-relaxed">
            Through every laugh, every tear, every moment of doubt - we were each other's safe harbor. 
            Your caring words could heal any wound in my heart.
          </p>
        </div>

        {/* Moment 2 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">💕</div>
          <h3 className="text-xl font-bold mb-3 text-yellow-100">Little Acts of Love</h3>
          <p className="text-white/90 leading-relaxed">
            The way you'd send me heart emojis just to brighten my day. 
            Those simple "Adiiiiii ❤️❤️❤️" messages that made everything better.
          </p>
        </div>

        {/* Moment 3 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-bold mb-3 text-yellow-100">Making Each Other Shine</h3>
          <p className="text-white/90 leading-relaxed">
            You believed in me when I couldn't believe in myself. 
            Your love gave me wings to fly higher than I ever imagined.
          </p>
        </div>

        {/* Moment 4 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">🥰</div>
          <h3 className="text-xl font-bold mb-3 text-yellow-100">Pure Happiness</h3>
          <p className="text-white/90 leading-relaxed">
            The joy in your voice, the warmth in your messages, 
            the way you made ordinary moments feel magical.
          </p>
        </div>
      </div>

      {/* Heart cascade */}
      <div className="mt-12 flex justify-center space-x-2">
        {['❤️', '💖', '💕', '💗', '💘', '💝', '💞'].map((heart, idx) => (
          <span 
            key={idx} 
            className="text-3xl animate-bounce" 
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {heart}
          </span>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-8 max-w-2xl">
        <p className="text-lg md:text-xl font-body text-yellow-100 italic leading-relaxed">
          "In a world full of temporary things, our care for each other felt eternal. 
          Every gesture, every word, every moment of tenderness was a promise 
          that love could conquer anything."
        </p>
      </div>

      {/* Floating caring elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['🤗', '💕', '🌟', '🥰', '💖', '✨', '🦋', '🌸'].map((icon, idx) => (
          <span
            key={idx}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDuration: `${Math.random() * 25 + 20}s`,
              fontSize: `${Math.random() * 1.5 + 1.2}rem`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}
