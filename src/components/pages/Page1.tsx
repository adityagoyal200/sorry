import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Page1() {
  return (
    <div className="min-h-screen bg-love-dark text-roseDust flex items-center justify-center p-8 animate-fade-in font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-roseDust/20 relative overflow-hidden">
          
          {/* Icons */}
          <div className="absolute top-6 right-6">
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          <div className="absolute bottom-6 left-6">
            <Heart className="w-6 h-6 text-flamingo animate-bounce" />
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-flamingo mb-4">📖 Chapter 1: “The Beginning”</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none text-lilac leading-relaxed space-y-6">
            <p className="text-xl font-light italic text-center mb-8 text-roseDust">
              "I didn’t even realize what was happening... until it already had."
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p>
                  It didn’t begin with a plan. It wasn’t some cinematic moment. It was just late-night calls, inside jokes, and this feeling I couldn’t name. 
                  I was always the guy who didn’t think much of connections through screens — until you.
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

              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full mx-auto shadow-inner border border-pink-500/20">
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-200/20 to-blue-100/20 rounded-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-pink-400 font-serif italic mt-4">
                    "This wasn’t just a phase. It never felt like one."
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="text-center mt-12">
              <p className="text-xl font-serif italic text-pink-300">
                "I didn’t know what we were... I just knew I didn’t want it to stop."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
