"use client"; // This is a client component 👈🏽


import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormEvent } from 'react';
import Image from "next/image";
import styles from "./form.module.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
});

// interface FormProps {
//   formFields:{
//     name:string,
//     type:string,
//     for:'name'
//   }


// }


type FormData = {
  name: string;

};


const ContactForm: React.FC = () => {


  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };


  return (
    <form className={styles.formCtr} onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">

      <div className={styles.inputCtr}>

        {errors.name && (
          <span id="name-error" role="alert">
            {errors.name.message}
          </span>
        )}
        
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby="name-error"
          className={styles.inputField} />
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

export default ContactForm;