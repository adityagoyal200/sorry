import React from 'react';
import { CloudRain, Droplets } from 'lucide-react';

export default function Page2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-night via-twilight to-black text-roseDust flex items-center justify-center p-8 animate-fade-in font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-roseDust/10 relative overflow-hidden">

          {/* Icons */}
          <div className="absolute top-6 right-6">
            <CloudRain className="w-8 h-8 text-roseDust/40" />
          </div>
          <div className="absolute bottom-6 left-6">
            <Droplets className="w-6 h-6 text-flamingo/50 animate-pulse" />
          </div>

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-flamingo mb-4">🌧️ Chapter 2: “The Storm”</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-flamingo to-roseDust mx-auto rounded-full"></div>
          </div>

          {/* Body */}
          <div className="prose prose-lg prose-invert max-w-none text-lilac leading-relaxed space-y-6">
            <p className="text-xl font-light italic text-center mb-8 border-l-4 border-flamingo/30 pl-6">
              "It’s different when the person you thought would understand… stops trying to."
            </p>

            <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-flamingo/30">
              <div className="space-y-6">
                <p>
                  I kept showing up with answers when all you wanted was to be heard.  
                  You weren’t asking me to fix you  you were asking me to stop adding to your weight.  
                  And I didn’t hear that. Not fully. Not early enough.
                </p>

                <p>
                  You were overwhelmed emotionally, mentally nd I still made it about “why aren’t you like before?”  
                  I wasn’t looking at how much of you was running on empty, how long you were giving without being given to.
                </p>

                <p>
                  You were still choosing me, even when you were tired of repeating yourself.  
                  You were patient even when I made it unsafe for your honesty to breathe.
                </p>

                <p>
                  And I know what that does to a person. It makes them shut down.  
                  Not because they don’t care but because caring starts to cost too much.
                </p>

                <p>
                  <strong>I saw your strength and mistook it for stability.</strong>  
                  But inside, you were breaking. Quietly. Repeatedly.  
                  And I didn’t slow down to see it. I pushed when I should’ve paused.
                </p>

                <p>
                  You deserved someone who saw the storm inside you and chose to be shelter, not wind.  
                  I know I wasn’t that person. Not when you needed me most.
                </p>

                <div className="bg-white/10 p-6 rounded-xl border border-roseDust/10 mt-8">
                  <p className="text-lg font-medium text-center text-pink-200">
                    I'm not here to ask for forgiveness.  
                    I'm here to finally understand the damage I caused without defending it.
                  </p>
                </div>

                <p className="text-lg italic text-center text-lilac">
                  "You didn’t fall apart, Ana you were held together by pieces you shouldn’t have had to carry alone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
