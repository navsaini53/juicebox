"use client"; // This is a client component 👈🏽


import styles from "./header.module.css";

interface SwiperProps {
  hideBack: boolean;
}

const Header: React.FC<SwiperProps> = ({hideBack}) => {

  return (
    <div className={styles.headingCtr}>
     <div className={styles.backBtn}>

        {!hideBack?<div>Back</div>:null}

       </div>
      
      <h1 className={styles.screenTitle}>
       Juicebox
      </h1>
       <div className={styles.refreshBtn}>
        refresh
      </div>
    </div>
  );
}

export default Header;