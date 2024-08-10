"use client"; // This is a client component 👈🏽


import styles from "./form.module.css";

interface FormProps {
  labelText: string,
  labelFor:string
}

const FormLabel: React.FC<FormProps> = ({labelText,labelFor}) => {

  return (
    <label htmlFor={labelFor} className={styles.headingCtr}>{labelText}</label>
  );
}

export default FormLabel;