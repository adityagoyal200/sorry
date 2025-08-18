import React from 'react';
import { MessageCircle, Heart, User } from 'lucide-react';

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 animate-gradient font-display text-white">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_20px_#ec4899] animate-pulse mb-8">
        First Time You Called Me Adi <Heart className="inline-block text-pink-200 animate-bounce" size={48} />
      </h1>

      {/* Real Chat Recreation */}
      <div className="max-w-md w-full bg-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-pink-300/30 shadow-2xl">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-sm">Ana</h3>
            </div>
          </div>
          <div className="text-xs text-gray-400">You're Viewing Older Messages</div>
        </div>

        {/* Authentic Chat Messages */}
        <div className="p-4 space-y-3 max-h-96 overflow-y-auto bg-gray-800">
          {/* Ana: You feel better? */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">Ana 27-04-2025 05:01</div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                You feel better?
              </div>
            </div>
          </div>

          {/* AKari: Nope */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">AKari 27-04-2025 05:01</div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                Nope
              </div>
            </div>
          </div>

          {/* Ana: Adiiiiii with hearts */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">Ana 27-04-2025 05:25</div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                Adiiiiii
              </div>
              <div className="flex space-x-1 mt-1">
                <span className="text-red-400 text-lg">❤️</span>
                <span className="text-red-400 text-lg">❤️</span>
                <span className="text-red-400 text-lg">❤️</span>
              </div>
            </div>
          </div>

          {/* AKari: What happened ana */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">AKari 27-04-2025 07:52</div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                What happened ana
              </div>
            </div>
          </div>

          {/* Ana: Tequila 😂 */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">Ana 27-04-2025 12:04</div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                Tequila 😂
              </div>
            </div>
          </div>

          {/* AKari: Aaaa I get it because not everyone calls me adi */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">AKari 27-04-2025 12:50</div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm max-w-xs">
                Aaaa I get it because not everyone calls me adi
              </div>
              <div className="mt-1">
                <span className="text-yellow-400 text-lg">😂</span>
              </div>
            </div>
          </div>

          {/* Ana: I will call you Adi - THE MOMENT */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-gray-400 mb-1">Ana 27-04-2025 13:04</div>
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm max-w-xs border-2 border-yellow-300 shadow-lg animate-pulse">
                <span className="font-bold">I will call you Adi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight section */}
      <div className="mt-8 max-w-2xl bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-pink-300/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-200">
          The Moment Everything Changed ✨
        </h2>
        <p className="text-lg md:text-xl font-body text-white/90 leading-relaxed italic">
          "April 27th, 2025 at 13:04 - the exact moment Ana decided to call me 'Adi'. 
          It wasn't just a nickname, it was the beginning of something special. 
          From that day forward, I became 'Adi' to the person who mattered most."
        </p>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {['💕', '💖', '💗', '💝', '💘', '💞', '❤️'].map((heart, idx) => (
          <span
            key={idx}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
            }}
          >
            {heart}
          </span>
        ))}
      </div>
    </div>
  );
}
