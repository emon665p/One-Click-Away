'use client';

import { useEffect, useRef, useState } from 'react';
import { useMusic } from '@/components/music/MusicProvider';

const LOCAL_TRACK = '/music/romantic-lofi.wav';
const FALLBACK_TRACK = 'https://cdn.pixabay.com/audio/2023/03/16/audio_67ed6a6203.mp3';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { enabled, volume } = useMusic();
  const [src, setSrc] = useState(LOCAL_TRACK);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    if (enabled) {
      audio.play().catch(() => {
        // user gesture required; ignore silently
      });
    } else {
      audio.pause();
    }
  }, [enabled, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (!audio) return;
      audio.pause();
      audio.src = '';
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      preload="auto"
      aria-hidden="true"
      className="hidden"
      onError={() => {
        if (src !== FALLBACK_TRACK) {
          setSrc(FALLBACK_TRACK);
        }
      }}
    />
  );
}
