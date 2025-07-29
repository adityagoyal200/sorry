import React from 'react';
import { HeartHandshake, Moon, Power } from 'lucide-react';

export default function Page5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-night via-twilight to-black text-stone flex items-center justify-center p-8 animate-fade-in font-body">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-roseDust/10 relative overflow-hidden">

          {/* Icons */}
          <div className="absolute top-6 right-6">
            <Moon className="w-7 h-7 text-mutedPink animate-pulse" />
          </div>
          <div className="absolute bottom-6 left-6">
            <HeartHandshake className="w-6 h-6 text-flamingo animate-bounce" />
          </div>

          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display text-flamingo mb-2">🔚 Final Chapter: “Still, Always”</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-roseDust to-lilac mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none text-lilac leading-relaxed space-y-8">
            <p className="text-center italic text-mutedPink">
              "Still here. Still yours. Just without the noise this time."
            </p>

            <p>
              I'm not stepping away to let go. I'm stepping back so you don’t feel pushed. Not because I want distance but because you deserve space that feels light and safe.
            </p>

            <p>
              You’re still the first thought when I wake up and the one I carry quietly through every ordinary moment. No matter how heavy things got, that never changed. It won't.
            </p>

            <p>
              I know you’ve been overwhelmed, tired, hurt. I made mistakes that tightened the weight instead of lifting it. But I never once stopped wanting to make you feel held not cornered.
            </p>

            <div className="bg-night p-6 rounded-xl border border-roseDust/20 text-center">
              <p className="text-xl font-medium text-roseDust font-display">
                I’m not asking for old love back. I’m asking to build something much better stronger, slower, safer, with more listening and less noise.
              </p>
              <p className="text-mutedPink italic mt-2">
                No perfect promises. Just a steadier heart.
              </p>
            </div>

            <p>
              I’ll be here, your Adi. Living. Growing. Loving you quietly forever.
            </p>

            <p>
              If this is the chapter we turn slowly together, I’ll walk it with softness. I Will Always Love you &lt;3.
            </p>

            <div className="mt-8 flex justify-center">
              <img
                src="/chat-screenshot.jfif"
                alt="Chat Screenshot"
                className="rounded-xl shadow-lg border border-roseDust/10 max-w-full w-[80%]"
              />
            </div>
            <p className="text-center text-mutedPink italic mt-2">
              Can we fulfill this promise?.
            </p>
          </div>

          {/* Footer icon */}
          <div className="text-center mt-10">
            <Power className="w-6 h-6 mx-auto text-mutedPink" />
            <p className="mt-2 text-mutedPink text-sm italic">
              Page closed? Maybe. But the story's still breathing.<br />
              I LOVE YOU. PLEASE FORGIVE ME!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
