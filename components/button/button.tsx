"use client"; // This is a client component 👈🏽


import styles from "./button.module.css";

interface SwiperProps {
  isHomeBtn: boolean;
  isInverted: boolean;
  title: string,
  ariaLabel:string,
  onBtnClick: any
}

const ButtonComp: React.FC<SwiperProps> = ({ isHomeBtn, isInverted, title, onBtnClick,ariaLabel }) => {

  let defaultBtnClass = `${styles.defaultBtn}`;
  if (isHomeBtn) defaultBtnClass += ` ${styles.homeBtn}`;
  if (isInverted) defaultBtnClass += ` ${styles.invertedBtn}`;

  return (
    <div className={styles.footerCtr}>
      <button className={defaultBtnClass}
      aria-label={ariaLabel}
        onClick={onBtnClick}
      >
        {title}
      </button>
    </div>
  );
}

export default ButtonComp;