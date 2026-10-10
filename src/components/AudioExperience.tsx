import { useEffect, useRef } from 'react';

type SoundName = 'intro' | 'transition' | 'success';
const AUDIO_ROOT = '/assets/audio/';

/** Cinematic audio starts only after the visitor's first deliberate interaction. */
export default function AudioExperience() {
  const ambientRef = useRef<HTMLAudioElement>(null);
  const effectRefs = useRef<Record<SoundName, HTMLAudioElement | null>>({ intro: null, transition: null, success: null });
  const ambientStarted = useRef(false);

  useEffect(() => {
    const startAmbient = () => {
      const ambient = ambientRef.current;
      if (!ambient || ambientStarted.current) return;
      ambientStarted.current = true;
      ambient.loop = true;
      ambient.volume = 0.42;
      void ambient.play().catch(() => { ambientStarted.current = false; });
    };

    const onSound = (event: Event) => {
      const name = (event as CustomEvent<SoundName>).detail;
      if (!['intro', 'transition', 'success'].includes(name)) return;
      // Any deliberate interaction can unlock background audio when the opening was already skipped.
      startAmbient();
      const audio = effectRefs.current[name];
      if (!audio) return;
      audio.currentTime = 0;
      audio.volume = name === 'intro' ? 0.72 : name === 'transition' ? 0.48 : 0.42;
      void audio.play().catch(() => undefined);
    };

    window.addEventListener('portfolio-audio', onSound);
    return () => window.removeEventListener('portfolio-audio', onSound);
  }, []);

  return (
    <>
      <audio ref={ambientRef} src={`${AUDIO_ROOT}ambient.mp3`} preload="auto" aria-hidden="true" />
      {(['intro', 'transition', 'success'] as SoundName[]).map((name) => (
        <audio key={name} ref={(node) => { effectRefs.current[name] = node; }} src={`${AUDIO_ROOT}${name}.mp3`} preload="auto" aria-hidden="true" />
      ))}
    </>
  );
}
