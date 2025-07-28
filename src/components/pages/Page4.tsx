import React from 'react';
import { Stars, Rainbow, Infinity } from 'lucide-react';

export default function Page4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-night via-plum to-twilight text-stone flex items-center justify-center p-8 animate-fade-in font-body">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-roseDust/10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6">
            <Stars className="w-8 h-8 text-lilac/60 animate-pulse" />
          </div>
          <div className="absolute bottom-6 left-6">
            <Rainbow className="w-6 h-6 text-mutedPink/60 animate-bounce" />
          </div>

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display text-flamingo mb-4">🌅 Chapter 4: “The Us That Can Be”</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mutedPink to-lilac mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none text-lilac leading-relaxed space-y-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-plum via-twilight to-night rounded-full mx-auto relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-purple-100/10 rounded-full flex items-center justify-center">
                    <Infinity className="w-20 h-20 text-roseDust animate-pulse" />
                  </div>
                  {/* Floating hearts */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-mutedPink rounded-full animate-float opacity-40"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '4s',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="bg-twilight p-6 rounded-2xl border border-mutedPink/40">
                  <p className="text-lg font-serif italic text-roseDust text-center">
                    "What if we didn’t try to return to what we were… but built something new?"
                  </p>
                </div>

                <p className="text-lg">
                  I don’t want to rewind. That version of us was real, but it was heavy. Beautiful, but bruised. 
                  What I dream of now is slower safer. Built from respect, space, and clarity. Not urgency.
                </p>

                <p className="text-lg">
                  I imagine us laughing again, but softer. Speaking again, but with pause. Fighting less, not because we’re perfect, 
                  but because we finally listen.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-display text-flamingo">Gentle Promises</h3>

                <div className="space-y-4">
                  <div className="bg-night p-4 rounded-xl border-l-4 border-flamingo">
                    <p className="italic text-stone">"Not forever. Just for today. And then the next. And the next, if we still choose each other."
                    </p>
                  </div>

                  <div className="bg-night p-4 rounded-xl border-l-4 border-roseDust">
                    <p className="italic text-stone">"I won't erase the past. I’ll hold it gently so it can finally rest."
                    </p>
                  </div>

                  <div className="bg-night p-4 rounded-xl border-l-4 border-lilac">
                    <p className="italic text-stone">"Love doesn’t always have to be loud. Sometimes it’s in staying, softly."
                    </p>
                  </div>
                </div>

                <p className="text-lg">
                  We could be the story that didn’t end but evolved. Not because we forced it. But because we grew into it.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 bg-gradient-to-r from-twilight via-night to-plum p-8 rounded-2xl border border-mutedPink/20">
              <p className="text-2xl font-display text-roseDust mb-4">
                "I will make it upto you!"
              </p>
              <p className="text-lg text-mutedPink italic">
                Not to relive what we had. But to build what we never got to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
