import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import gsap from 'gsap';
import styles from './form.module.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ResultAnimation: React.FC<{}> = ({ }) => {


  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/Juicebot.json',
    });


    return () => {
      anim.destroy();
    };
  }, []);


  useGSAP(() => {
    gsap.to(animationContainer.current, {
      rotation: 180, repeat: -1,
      yoyo: true, duration: 0.7,
      repeatDelay: 0.5,
    });



  }, [animationContainer])

  return <div ref={animationContainer} className={styles.lottieContainer}></div>;
};

export default ResultAnimation;
