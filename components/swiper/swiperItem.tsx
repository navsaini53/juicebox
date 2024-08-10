"use client"; // This is a client component 👈🏽

import Image from "next/image";
import styles from "./swiper.module.css";

interface SwiperProps {
  swipeDescriptionOne: string;
  swipeDescriptionTwo: string;
}

const SwiperItem: React.FC<SwiperProps> = (props) => {

  return (<div className={styles.swiperCtr}>

    <div className={styles.imgCtr}>
        <Image
          src="/img/Vectorpentagon.svg"
          alt="Swiper image information"
          fill
          priority={true}
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