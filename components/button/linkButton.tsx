"use client"; // This is a client component 👈🏽

import Link from "next/link";
import styles from "./button.module.css";

interface BtnProps {
  title:string,
  navigateTo:string,
  isHomeBtn:boolean
  
}

const LinkButton: React.FC<BtnProps> = ({title,navigateTo,isHomeBtn}) => {

  let defaultBtnClass=`${styles.defaultBtn}`;
  if(isHomeBtn) defaultBtnClass+=` ${styles.homeBtn}`;


  return (
    <div className={styles.footerCtr}>
    <Link className={defaultBtnClass} href={`${navigateTo}`}>{title}</Link>
  </div>
  );
}

export default LinkButton;