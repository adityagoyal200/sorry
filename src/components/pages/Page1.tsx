import React from 'react';
import { Heart, Star } from 'lucide-react';

export default function Page1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-rose-400 via-pink-300 to-purple-400 animate-gradient font-display text-white">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_15px_#ff69b4] animate-pulse">
        How We Met <Heart className="inline-block text-red-300 animate-bounce" size={48} />
      </h1>

      <div className="mt-8 max-w-2xl space-y-6">
        <p className="text-xl md:text-2xl font-body drop-shadow-[0_0_8px_#000] leading-relaxed">
          In a world full of ordinary moments, 
          <span className="text-yellow-200 font-bold"> destiny </span>
          had something extraordinary planned...
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
          <p className="text-lg md:text-xl font-body text-white/90 leading-relaxed">
            Two hearts, two souls, finding each other in the vast digital universe.
            What started as a simple conversation became the beginning of something beautiful.
            Every message, every laugh, every shared moment was building the foundation
            of a love story that would change everything.
          </p>
        </div>

        <p className="text-lg md:text-xl font-body drop-shadow-[0_0_6px_#000] italic">
          "Sometimes the best love stories begin with the simplest hello..."
        </p>
      </div>

      {/* Floating romantic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['💕', '✨', '🌟', '💖', '🦋', '🌸'].map((emoji, idx) => (
          <span
            key={idx}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              fontSize: `${Math.random() * 1.5 + 1.5}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Next page hint */}
      <div className="mt-12 text-lg md:text-xl font-bold animate-bounce text-rose-800 bg-white/80 px-6 py-3 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">
        💫 Continue Our Story
      </div>
    </div>
  );
}
