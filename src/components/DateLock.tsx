import React, { useState } from 'react';
import { Lock, Heart } from 'lucide-react';

interface DateLockProps {
  onUnlock: () => void;
}

export default function DateLock({ onUnlock }: DateLockProps) {
  const [date, setDate] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (date === '07-03-1987' || date === '7-3-1987') {
      setIsUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-100/20 to-pink-100/30 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/50 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 mb-6 transition-all duration-1000 ${isUnlocking ? 'scale-110 rotate-12' : ''}`}>
            {isUnlocking ? (
              <Heart className="w-10 h-10 text-pink-600 animate-pulse" />
            ) : (
              <Lock className={`w-10 h-10 text-purple-600 transition-all duration-300 ${isWrong ? 'animate-bounce' : ''}`} />
            )}
          </div>
          <h1 className="text-4xl font-serif text-purple-800 mb-2">For Ana</h1>
          <p className="text-purple-600 text-lg">Enter Your Birthdate</p>
          <p className="text-sm text-purple-500 mt-2">(dd-mm-yyyy)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="DD-MM-YYYY"
              className={`w-full px-6 py-4 text-center text-xl border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                isWrong 
                  ? 'border-red-300 bg-red-50/50 animate-shake' 
                  : 'border-purple-200 focus:border-purple-400'
              } focus:outline-none focus:ring-2 focus:ring-purple-200`}
            />
          </div>
          
          <button
            type="submit"
            disabled={isUnlocking}
            className={`w-full py-4 px-8 rounded-2xl font-medium text-lg transition-all duration-300 ${
              isUnlocking
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white scale-105'
                : 'bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white hover:scale-105'
            } shadow-lg hover:shadow-xl`}
          >
            {isUnlocking ? 'Unlocking...' : 'Unlock'}
          </button>
        </form>

        {isWrong && (
          <p className="text-red-500 text-center mt-4 animate-fade-in">
            That's not quite right... try again 💕
          </p>
        )}
      </div>
    </div>
  );
}