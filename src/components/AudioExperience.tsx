import { useEffect, useRef } from 'react';

type SoundName = 'opening' | 'intro' | 'transition' | 'success';
const AUDIO_ROOT = '/assets/audio/';

/** Cinematic audio: opening attempts immediately, with a first-interaction fallback for browser autoplay rules. */
export default function AudioExperience() {
  const effectRefs = useRef<Record<SoundName, HTMLAudioElement | null>>({ opening: null, intro: null, transition: null, success: null });

  useEffect(() => {
    let openingStarted = false;

    const playSound = (name: SoundName) => {
      const audio = effectRefs.current[name];
      if (!audio) return;
      audio.currentTime = 0;
      audio.volume = name === 'opening' ? 0.68 : name === 'intro' ? 0.72 : name === 'transition' ? 0.56 : 0.68;
      const promise = audio.play();
      if (name === 'opening') openingStarted = true;
      void promise.catch(() => {
        if (name === 'opening') openingStarted = false;
      });
    };

    const onSound = (event: Event) => {
      const name = (event as CustomEvent<SoundName>).detail;
      if (!['opening', 'intro', 'transition', 'success'].includes(name)) return;
      playSound(name);
    };

    const startOpening = () => {
      if (!openingStarted) playSound('opening');
      window.removeEventListener('pointerdown', startOpening);
      window.removeEventListener('keydown', startOpening);
    };

    window.addEventListener('portfolio-audio', onSound);
    window.addEventListener('pointerdown', startOpening, { once: true });
    window.addEventListener('keydown', startOpening, { once: true });
    const timer = window.setTimeout(() => playSound('opening'), 120);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('portfolio-audio', onSound);
      window.removeEventListener('pointerdown', startOpening);
      window.removeEventListener('keydown', startOpening);
    };
  }, []);

  return (
    <>
      {(['opening', 'transition', 'success'] as SoundName[]).map((name) => (
        <audio key={name} ref={(node) => { effectRefs.current[name] = node; }} src={`${AUDIO_ROOT}${name}.mp3`} preload="auto" aria-hidden="true" />
      ))}
      <audio ref={(node) => { effectRefs.current.intro = node; }} src={`${AUDIO_ROOT}play-intro.mp3`} preload="auto" aria-hidden="true" />
    </>
  );
}
