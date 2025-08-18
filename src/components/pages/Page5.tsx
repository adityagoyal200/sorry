import React from 'react';
import { Sunrise, Heart, Star, Sparkles } from 'lucide-react';

export default function Page5() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-300 to-pink-400 animate-gradient font-display text-white">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_20px_#fbbf24] animate-pulse mb-8">
        Rebuilding Together <Sunrise className="inline-block text-yellow-200 animate-bounce" size={48} />
      </h1>

      {/* Main content */}
      <div className="max-w-4xl space-y-10">
        {/* Opening message */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
          <p className="text-xl md:text-2xl font-body text-white leading-relaxed mb-6">
            After the storm comes the rainbow. After the darkness comes the dawn. 
            And after falling apart, we found our way back to each other - 
            stronger, wiser, and more in love than ever before.
          </p>
        </div>

        {/* Rebuilding journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-yellow-400/30 to-orange-400/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🌅</div>
            <h3 className="text-xl font-bold mb-3 text-yellow-100">New Beginnings</h3>
            <p className="text-white/90 leading-relaxed">
              We chose to start fresh, leaving behind the hurt and embracing 
              the possibility of something even more beautiful.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-400/30 to-red-400/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-3 text-pink-100">Stronger Foundation</h3>
            <p className="text-white/90 leading-relaxed">
              Built on understanding, forgiveness, and the knowledge 
              that love is a choice we make every single day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-400/30 to-blue-400/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="text-xl font-bold mb-3 text-purple-100">Renewed Hope</h3>
            <p className="text-white/90 leading-relaxed">
              Every challenge became a stepping stone, every tear became 
              a testament to how much we truly mean to each other.
            </p>
          </div>
        </div>

        {/* Love declaration */}
        <div className="bg-gradient-to-r from-rose-400/40 to-pink-400/40 backdrop-blur-sm rounded-3xl p-8 border border-rose-300/40">
          <div className="flex justify-center mb-6">
            {['💖', '✨', '💖', '✨', '💖'].map((icon, idx) => (
              <span 
                key={idx} 
                className="text-3xl mx-2 animate-bounce" 
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                {icon}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-100">
            Our Love Story Continues...
          </h2>
          
          <p className="text-lg md:text-xl font-body text-white/95 leading-relaxed italic">
            "What we have now is not the same love we started with - it's deeper, 
            more resilient, more real. We've seen each other at our worst and chosen 
            to love anyway. We've fallen apart and rebuilt something even more beautiful. 
            This is our forever, Ana and Adi, stronger together."
          </p>
        </div>

        {/* Future together */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/30 to-pink-400/30 px-8 py-4 rounded-full border border-yellow-300/40">
            <Heart className="text-red-300 animate-pulse" size={24} />
            <span className="text-xl font-bold text-white">Forever & Always</span>
            <Heart className="text-red-300 animate-pulse" size={24} />
          </div>
        </div>
      </div>

      {/* Floating celebration elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['🌟', '✨', '💫', '🎉', '🌈', '💕', '🦋', '🌸', '🌺', '💖'].map((icon, idx) => (
          <span
            key={idx}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDuration: `${Math.random() * 25 + 20}s`,
              fontSize: `${Math.random() * 1.8 + 1.2}rem`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}
