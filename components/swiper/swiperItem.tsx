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
          alt="Swiper image "
          sizes="100vw"
          fill
          // style={{
          //   objectFit: 'contain',
              
          // }}
           priority={true}
        />
       
      </div>

        <h4 className={styles.swipeTxt}>
          {props.swipeDescriptionOne}
          {
            props.swipeDescriptionTwo?<span className={styles.swipeGrayTxt}>{props.swipeDescriptionTwo}</span>:null
          }
        </h4>
  

  </div>
  );
}

export default SwiperItem;