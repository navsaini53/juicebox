"use client"; // This is a client component 👈🏽

import Image from 'next/image';

import styles from "./form.module.css";

const FormButton: React.FC<{}> = () => {
  return (<div className={styles.submitCtr}><button
    type='submit'
    aria-label={'Submit button to save details'}
    className={styles.btnCtr} >
    <Image
      src="/img/arrowUp.svg"
      alt="Submit Button Image"
      width={16}
      height={16}
      priority={false}
    />
  </button></div>
  );


}

export default FormButton;