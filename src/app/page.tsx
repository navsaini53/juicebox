"use client"; // This is a client component 👈🏽

import { useRef } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';
import HeaderComp from "../../components/header/header";
import MyButton from "../../components/button/button";
import styles from "./page.module.css";

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

export default function Home() {
  const router = useRouter();

  // Declare a ref with a correct type
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container.current ?? undefined, });

  const onClickGood = contextSafe(() => {
    if (container.current) {
      gsap.to('.Hiname', { y: 180 });
    }
  });

  const onBtnClick = () => {
    router.push("/swiper");
  };

  return (
    <ReactLenis root>
      <main className={styles.main} ref={container}>
        <HeaderComp hideBack={false} />

        <div style={{ flex: 1 }}>
          <div className={styles.imgContainer}>
            <Image
              src="/img/vectorpentagon.svg"
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
