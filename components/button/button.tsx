"use client"; // This is a client component 👈🏽


import styles from "./button.module.css";

interface SwiperProps {
  isHomeBtn: boolean;
  isInverted: boolean;
  title:string,
  onBtnClick:any
}

const ButtonComp: React.FC<SwiperProps> = ({isHomeBtn,isInverted,title,onBtnClick}) => {

  let defaultBtnClass=`${styles.defaultBtn}`;
  if(isHomeBtn) defaultBtnClass+=` ${styles.homeBtn}`;
  if(isInverted) defaultBtnClass+=` ${styles.invertedBtn}`;

  return (
    <div className={styles.footerCtr}>
    <button className={defaultBtnClass}
     onClick={onBtnClick} 
    >
      {title} 
    </button>
  </div>
  );
}

export default ButtonComp;