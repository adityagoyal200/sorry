import React from 'react';
import { Cloud, CloudRain, Heart } from 'lucide-react';

export default function Page4() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-gray-600 via-slate-700 to-gray-800 font-display text-white">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_15px_#4a5568] mb-8">
        When Things Fell Apart <CloudRain className="inline-block text-blue-300" size={40} />
      </h1>

      {/* Story content */}
      <div className="max-w-3xl space-y-8">
        <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/30">
          <p className="text-lg md:text-xl font-body text-gray-200 leading-relaxed mb-6">
            Even the strongest love stories have their storms. 
            There came a time when misunderstandings clouded our skies, 
            when words were misheard and hearts felt distant.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-600/40 rounded-xl p-6">
              <div className="text-3xl mb-3">💔</div>
              <h3 className="text-lg font-bold mb-2 text-blue-200">Miscommunication</h3>
              <p className="text-gray-300 text-sm">
                Words lost their meaning, messages felt cold, 
                and the warmth we once shared seemed to fade.
              </p>
            </div>
            
            <div className="bg-gray-600/40 rounded-xl p-6">
              <div className="text-3xl mb-3">🌧️</div>
              <h3 className="text-lg font-bold mb-2 text-blue-200">Distance</h3>
              <p className="text-gray-300 text-sm">
                Not just physical, but emotional distance grew. 
                The closeness we cherished felt like a distant memory.
              </p>
            </div>
            
            <div className="bg-gray-600/40 rounded-xl p-6">
              <div className="text-3xl mb-3">😔</div>
              <h3 className="text-lg font-bold mb-2 text-blue-200">Doubt</h3>
              <p className="text-gray-300 text-sm">
                Questions arose where certainty once lived. 
                Were we meant to be? Could we find our way back?
              </p>
            </div>
            
            <div className="bg-gray-600/40 rounded-xl p-6">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-bold mb-2 text-blue-200">Time Apart</h3>
              <p className="text-gray-300 text-sm">
                Sometimes love needs space to breathe, 
                to understand what it truly means to miss someone.
              </p>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-gradient-to-r from-gray-700/60 to-slate-600/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20">
          <p className="text-lg font-body text-gray-100 italic leading-relaxed">
            "In the darkness of our separation, we learned that love isn't just about 
            the beautiful moments. It's about choosing each other even when it's hard, 
            even when the path isn't clear. Sometimes we have to fall apart 
            to understand how much we need each other."
          </p>
        </div>

        {/* Hope element */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-600/30 px-6 py-3 rounded-full border border-blue-400/30">
            <Heart className="text-pink-300" size={20} />
            <span className="text-blue-200 font-medium">But love finds a way...</span>
            <Heart className="text-pink-300" size={20} />
          </div>
        </div>
      </div>

      {/* Floating storm elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['☁️', '🌧️', '💧', '⛈️', '🌫️'].map((icon, idx) => (
          <span
            key={idx}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDuration: `${Math.random() * 30 + 25}s`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}
