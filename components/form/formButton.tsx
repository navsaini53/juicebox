"use client"; // This is a client component 👈🏽

import Image from 'next/image';

import styles from "./form.module.css";

const FormButton: React.FC<{}> = () => {
  return (<button 
  type='submit'
         className={styles.btnCtr} >
              <Image
                src="/img/arrowUp.svg"
                alt="Submit Form"
                width={20}
                height={20}
                priority={false}
              />
            </button>
  );


}

export default FormButton;