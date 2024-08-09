"use client"; // This is a client component 👈🏽

import { useRef } from 'react';
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import styles from "./page.module.css";
//  import LottieAnimation from './components/lottieAnimation';
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation'
import HeaderComp from "../../components/header/header";
import MyButton from "../../components/button/button";

gsap.registerPlugin(useGSAP);

export default function Home() {

  const router = useRouter()

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  //   console.log("jsdj")
  //   gsap.to('.Hiname', { x: 180 });
  // })

  const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to('.Hiname', { y: -360 }); 
  //   },
  //   { scope: container }
  // ); 
  const { contextSafe } = useGSAP({ scope: container }); // we can pass in a config object as the 1st parameter to make scoping simple

  const onClickGood = contextSafe(() => {
    gsap.to('.Hiname', { y: 180 });
  });


  const onBtnClick = () => {
    router.push("/swiper");
  }

  return (
    <ReactLenis root>

      <main className={styles.main} ref={container}>
        <HeaderComp hideBack={false} />


        <div style={{ flex: 1 }}>


          <div className={styles.imgContainer}>
            <Image
              src="/img/Vectorpentagon.svg"
              alt="Hero Image"
              fill
              priority={false}
              style={{
                transform: 'rotate(180deg)'
              }}
              // objectFit='center'
              // sizes="(max-width: 700px) 70vw, (max-width: 1200px) 50vw"
            />
          </div>
        </div>



        <div className={styles.center}>
          <h2 className={styles.homeDescription}>
            Compare your thoughts on <span className={styles.gradientText}>
              technology </span> with current industry opinions
          </h2>

        </div>
       

        <MyButton
          isHomeBtn={true}
          isInverted={false}
          title={'Get a reality check'}
          onBtnClick={onBtnClick}
        />
      </main>

    </ReactLenis>
  );
}
