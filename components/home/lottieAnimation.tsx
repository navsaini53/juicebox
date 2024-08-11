// components/LottieAnimation.tsx
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import gsap from 'gsap';
import Lenis from 'lenis';
// import Lenis from 'react/lenis';
import styles from './home.module.css';

const LottieAnimation: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/Juicebot.json', // replace with your Lottie JSON file path
    });

    // GSAP animations on Lottie animation
    gsap.fromTo(
      animationContainer.current,
      { rotate: 0 },
      { opacity: 1,rotate:360, duration: 2 }
    );

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
    });

    // Update GSAP on scroll with Lenis
    function raf(time: number) {
      lenis.raf(time);
      gsap.ticker.tick(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      anim.destroy();
      lenis.destroy();
    };
  }, []);

  return <div ref={animationContainer} className={styles.lottieContainer}></div>;
};

export default LottieAnimation;
