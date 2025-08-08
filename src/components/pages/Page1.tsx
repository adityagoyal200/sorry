import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Page1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-love-dark via-purple-900 to-love-dark text-roseDust flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl mx-auto animate-fade-in-slow">
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-pink-200/20 overflow-hidden group">
          
          {/* Floating gradient orbs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float-delay"></div>

          {/* Icons */}
          <div className="absolute top-6 right-6 animate-bounce-slow">
            <Sparkles className="w-8 h-8 text-pink-300 drop-shadow-glow" />
          </div>
          <div className="absolute bottom-6 left-6 hover:scale-125 transition-transform">
            <Heart className="w-6 h-6 text-flamingo animate-pulse drop-shadow-glow" />
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md mb-4">
              📖 Chapter 1: “The Beginning”
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none leading-relaxed space-y-6 text-roseDust/90">
            <p className="text-xl font-light italic text-center mb-8 text-pink-200 animate-fade-up">
              "I didn’t even realize what was happening... until it already had."
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left - Story */}
              <div className="space-y-6 animate-fade-up-delay">
                <p>
                  It didn’t begin with a plan. It wasn’t some cinematic moment. It was just late-night calls, inside jokes, and this feeling I couldn’t name. 
                  I was always the guy who didn’t think much of connections through screens until you.
                </p>

                <p>
                  With you, Ana, it became the most natural part of my day. I’d wait to hear your voice. I’d know exactly what kind of mood you were in just 
                  by how you said “Adiii.” You didn’t even have to explain I’d just know.
                </p>

                <p>
                  There was chaos in the game, in the way we teased, in the way we both liked control. But beneath all that, there was comfort. A strange peace. 
                  I didn’t have to try around you. That scared me a little. But I didn’t run.
                </p>
              </div>

              {/* Right - Heart visual */}
              <div className="text-center animate-float-slow">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full mx-auto shadow-inner border border-pink-500/20 group-hover:scale-105 transition-transform">
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-200/20 to-blue-100/20 rounded-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-pink-300 font-serif italic mt-4">
                    "This wasn’t just a phase. It never felt like one."
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="text-center mt-12 animate-fade-up-slow">
              <p className="text-xl font-serif italic text-pink-200">
                "I didn’t know what we were... I just knew I didn’t want it to stop."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in-slow { animation: fadeIn 1.5s ease forwards; }
        .animate-fade-up { animation: fadeUp 1s ease forwards; }
        .animate-fade-up-delay { animation: fadeUp 1s ease 0.3s forwards; opacity: 0; }
        .animate-fade-up-slow { animation: fadeUp 1.5s ease 0.5s forwards; opacity: 0; }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 6s ease-in-out infinite 3s; }
        .drop-shadow-glow { filter: drop-shadow(0 0 8px rgba(255, 182, 193, 0.8)); }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
