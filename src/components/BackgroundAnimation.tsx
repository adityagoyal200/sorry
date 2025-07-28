import React from 'react';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-night via-plum to-black" />

      {/* Subtle radial memory pulse */}
      <div className="absolute inset-0 bg-radial-at-center from-white/5 via-transparent to-transparent animate-pulse-slow" />

      {/* Animated soft wave 1 */}
      <svg
        className="absolute bottom-0 w-full h-64 text-flamingo/10 animate-wave"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Animated soft wave 2 */}
      <svg
        className="absolute bottom-0 w-full h-64 text-lilac/10 animate-wave-slower"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C300,140 600,0 900,80 C1050,120 1150,40 1200,80 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      {/* Floating glowing particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 blur-sm animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            opacity: `${Math.random() * 0.4 + 0.2}`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
    </div>
  );
}
