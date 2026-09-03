import { useState, useCallback } from 'react';
import { audioSynth } from '../utils/audio';

export function useAudioEffects() {
  const [isMuted, setIsMuted] = useState<boolean>(audioSynth.getMuted());

  const toggleSound = useCallback(() => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
  }, []);

  const playHover = useCallback(() => {
    audioSynth.playHover();
  }, []);

  const playClick = useCallback(() => {
    audioSynth.playClick();
  }, []);

  const playModalOpen = useCallback(() => {
    audioSynth.playModalOpen();
  }, []);

  return {
    isMuted,
    toggleSound,
    playHover,
    playClick,
    playModalOpen,
  };
}
