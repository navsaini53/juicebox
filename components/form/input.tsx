"use client"; // This is a client component 👈🏽


import { FormEvent } from 'react';
import Image from "next/image";
import styles from "./form.module.css";

interface FormProps {
  formFields:{
    name:string,
    type:string,
    for:'name'
  }
}

const FormLabel: React.FC<FormProps> = ({ formFields }) => {

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    return;
    console.log("event.currentTarget", event.currentTarget)

    // const formData = new FormData(event.currentTarget)
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }


  return (
    <form className={styles.formCtr}>

      <div className={styles.inputCtr}>
        <input name={formFields.name}
        required={true}
          onChange={(e)=>{
            console.log(e)
          }}
          type={formFields.type} className={styles.inputField} />
      </div>
     
        <button className={styles.btnCtr} >
        <Image
            src="/img/arrowUp.svg"
            alt="Submit Form"
           width={20}
           height={20}
            priority={false}
            objectFit="center"
          
  
          />
        </button>
        
       
    </form>



  );
}

export default FormLabel;