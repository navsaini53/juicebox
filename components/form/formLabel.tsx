"use client"; // This is a client component 👈🏽


import styles from "./form.module.css";

interface FormProps {
  labelText: string,
  labelFor:string,
  errorId:string,
  errors:any
}

const FormLabel: React.FC<FormProps> = ({labelText,labelFor,errorId,errors}) => {
// console.log({labelText,labelFor,errorId,errors})
  return (<>
    <label htmlFor={labelFor} className={styles.headingCtr}>
      {labelText}
      </label>
        {errors && (
              <p className={styles.errorMsg}
              // aria-label={errors.message}
            
              id={errorId} role="alert">
                {errors.message}
              </p>
            )}
      </>
  );


}

export default FormLabel;