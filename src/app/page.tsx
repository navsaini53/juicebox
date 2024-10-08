"use client"; // This is a client component 👈🏽

import { useEffect, useRef } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis } from 'lenis/react';
import HomeAnimatedText from "../../components/home/homeAnimatedText";
import HeaderComp from "../../components/header/header";
import LinkButton from "../../components/button/linkButton";
import styles from "./page.module.css";
// import LottieAnimation from '../../components/home/homeLottieAnimation';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const router = useRouter();



  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from("#heroText li", { y: 1000, stagger: 1 });
  }, { scope: container })


  useEffect(() => {
    router.prefetch('/swiper')
  }, [router])



  const lenis = useLenis(({ scroll }) => {

  })





  return (
    <ReactLenis root>
      <main className={styles.main}
        ref={container}
      >
        <HeaderComp hideBack={true} 
        onBack={()=>{}}
        />


        <div className={styles.center}>
          <div className={styles.imgContainer}>

          {/* <LottieAnimation /> */}
            <Image
              src="/img/homeImg.svg"
              alt="Homepage main image"
              sizes="300px"
              fill
              style={{
                objectFit: 'contain',
                transform: 'rotate(180deg)'
              }}

            />
            <HomeAnimatedText />
          </div>
        </div>

        <div className={styles.center}>

          <h2 className={styles.homeDescription} tabIndex={0}>
            Compare your thoughts on <span className={styles.gradientText}>
              technology </span> with current industry opinions
          </h2>
        </div>

        <LinkButton
          navigateTo={'/swiper'}
          isHomeBtn={true}
          title={'Get a reality check'}
        />

      </main>
    </ReactLenis>
  );
}
