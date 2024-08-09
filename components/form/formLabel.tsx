"use client"; // This is a client component 👈🏽


import styles from "./form.module.css";

interface FormProps {
  labelText: string;
}

const FormLabel: React.FC<FormProps> = ({labelText}) => {

  return (
    <div className={styles.headingCtr}>
   {labelText}
    </div>
  );
}

export default FormLabel;