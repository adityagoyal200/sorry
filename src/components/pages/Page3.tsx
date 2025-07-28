import React from 'react';
import { Sunrise, Leaf, ArrowUp } from 'lucide-react';

export default function Page3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-night via-plum to-twilight text-stone flex items-center justify-center p-8 animate-fade-in font-body">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-roseDust/10 relative overflow-hidden">

          {/* Decorative Icons */}
          <div className="absolute top-6 right-6">
            <Sunrise className="w-8 h-8 text-roseDust/50 animate-pulse" />
          </div>
          <div className="absolute bottom-6 left-6">
            <Leaf className="w-6 h-6 text-flamingo/60 animate-bounce" />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display text-flamingo mb-4">🕊️ Chapter 3: “Healing”</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-flamingo to-lilac mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none text-lilac leading-relaxed space-y-6">
            <p className="text-xl font-light italic text-center mb-8 text-mutedPink">
              "This isn’t about proving anything. It’s about learning to be still with what I never faced before."
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Learnings */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-flamingo flex items-center">
                  <ArrowUp className="w-6 h-6 mr-2" />
                  What I’m Understanding Now
                </h3>

                <div className="space-y-4">
                  <div className="bg-twilight p-4 rounded-xl border-l-4 border-flamingo">
                    <p><strong>You were tired, not distant.</strong> I just didn’t know how to ask, “What do you need from me right now?”</p>
                  </div>

                  <div className="bg-twilight p-4 rounded-xl border-l-4 border-roseDust">
                    <p><strong>You didn’t want perfect words.</strong> You just wanted to feel safe saying yours out loud.</p>
                  </div>

                  <div className="bg-twilight p-4 rounded-xl border-l-4 border-lilac">
                    <p><strong>You weren’t asking me to fix everything.</strong> You were asking me to not add to what was already broken.</p>
                  </div>

                  <div className="bg-twilight p-4 rounded-xl border-l-4 border-mutedPink">
                    <p><strong>I used to react out of defense.</strong> Now I pause because silence doesn’t mean disconnection. It means reflection.</p>
                  </div>
                </div>
              </div>

              {/* Inner Work */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-flamingo">What I’m Actually Doing</h3>

                <p className="text-lg">
                  I’m unlearning my default setting where everything had to be solved, defended, explained.  
                  Now I just sit with it. With myself. With the discomfort of not knowing what to say and not needing to say anything.
                </p>

                <p className="text-lg">
                  I don’t want you to believe I’ve changed. I want you to feel that I’m changing, even in the quiet. 
                  Not for a second chance. Just because it’s who I should’ve been all along.
                </p>

                <div className="bg-plum/20 p-6 rounded-2xl border border-flamingo/20">
                  <p className="text-lg font-medium text-center text-roseDust">
                    I still mess up sometimes. I still catch myself thinking too much.  
                    But I will stop running from the parts of me that needed work.  
                    I face them now because you deserved better.
                  </p>
                </div>

                <p className="text-lg italic text-center text-mutedPink">
                  Growth doesn’t make noise. It happens in the small, invisible ways.  
                  That’s where I am. Quiet, but moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
