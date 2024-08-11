"use client"; // This is a client component 👈🏽

import styles from "./home.module.css";


const HomeAnimatedText: React.FC<{}> = () => {

 
  return (
    <ul id="heroText" className={styles.heroUl} tabIndex={0} aria-label='This section gives information what Juicebox can do '>
    <li>WA businesses feel confident about future growth </li>
    <li>AI cant replace creativity  </li>
    <li>Sales measure true success  </li>
    <li>Human connection drives WA business  </li>
    <li>The primary barrier to digital transformation is financial investment  </li>
  </ul>
    
  );
}

export default HomeAnimatedText;