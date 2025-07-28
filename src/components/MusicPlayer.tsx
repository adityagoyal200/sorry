import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Audio autoplay blocked');
        });
      }s
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/50"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-purple-600" />
        ) : (
          <VolumeX className="w-5 h-5 text-purple-400" />
        )}
      </button>
      <audio
        ref={audioRef}
        preload="none"
      >
        {/* Using a gentle nature sound - you can replace with any ambient track */}
        <source src="https://cdn.pixabay.com/audio/2023/03/30/audio_0ef98dc1cd.mp3" type="audio/mp3" />
        </audio>
    </div>
  );
}