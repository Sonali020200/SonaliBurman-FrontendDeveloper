import '../styles/HeroSection.css';
import { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const text = textRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        text.classList.add('text-animate-in');
      } else {
        text.classList.remove('text-animate-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero2 mx-auto w-full relative overflow-hidden bg-gradient-to-b from-[#09012a] to-[#0a0a18] to-70%">
      <div className="hero2-first">
        <div ref={textRef}>
          <h2 className='img-animate-down-up animation2-down-up'><span>Create, customize, and publish</span> your digital persona to life effortlessly.</h2>
        </div>
      </div>
    </section>
  );
};


