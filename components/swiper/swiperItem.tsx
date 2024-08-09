"use client"; // This is a client component 👈🏽

import { useRef } from 'react';
import Image from "next/image";

import styles from "./swiper.module.css";

interface SwiperProps {
  swipeDescriptionOne: string;
  swipeDescriptionTwo: string;
}

const SwiperItem: React.FC<SwiperProps> = (props) => {

  return (<div className={styles.swiperCtr}>
    {/* <div className={styles.imgSection}>
    <div className={styles.imgCtr}>
      <Image
        src="/img/Vectorpentagon.svg"
        alt="Vector Logo"
        layout="fill" objectFit="fill"
        priority={false}
      />
      sdfs
    </div>
    </div> */}
    <div className={styles.imgCtr}>
        <Image
          src="/img/Vectorpentagon.svg"
          alt="Vector Logo"
          fill
          priority={false}
        />
       

      </div>

        <div className={styles.swipeTxt}>
          {props.swipeDescriptionOne}
          {
            props.swipeDescriptionTwo?<span className={styles.swipeGrayTxt}>{props.swipeDescriptionTwo}</span>:null
          }
        </div>
  


  </div>
  );
}

export default SwiperItem;