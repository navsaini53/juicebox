"use client"; // This is a client component 👈🏽
import { useRouter } from 'next/navigation'

import Lottie from "lottie-react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import * as yup from 'yup';
import Header from '../../../../components/header/header';
import MyButton from '../../../../components/button/button';
import FormLabel from '../../../../components/form/formLabel';
import FormInput from '../../../../components/form/input';
import juicebotJson from "../../../../public/animations/Juicebot.json";
import commonStyle from "../../common.module.css";

import formStyle from "../form.module.css";

const schema = yup.object().shape({
  email: yup
  .string()
  .required('Email is required')
  .email('Please enter a valid email address'),
});


type FormData = {
  email: string;
};

export default function ContactEmailForm() {

  const router=useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data:any) => {
    if(!data ||!data.email){
      return alert("something went wrong")
          }
          localStorage.setItem("email", data.email);
          router.push("/contact/results");


  };



  return (<>

    <main className={commonStyle.main}>
      <Header hideBack={false} />




      <div className={commonStyle.formSection}>

        <div className={formStyle.lottieCtr}>
          <Lottie animationData={juicebotJson}
            style={{
              height: 100
            }}
            loop={true} />
        </div>



        <form className={formStyle.formBody} onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">

          <div className={formStyle.labelCtr }>
            <FormLabel labelText='How should we contact you? Type in your email address.' labelFor="email" />
            {errors.email && (
              <div className={formStyle.errorMsg}><span id="email-error" role="alert">
                {errors.email.message}
              </span></div>
            )}
          </div>
          <div className={commonStyle.formCtr}>


            <div className={commonStyle.inputCtr}>

              <input
                id="email"
                placeholder='Email Address'
                type="text"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby="email-error"
                className={commonStyle.inputField} />
            </div>

            <button className={commonStyle.btnCtr} >
              <Image
                src="/img/arrowUp.svg"
                alt="Submit Form"
                width={20}
                height={20}
                priority={false}
                objectFit="center"

              />
            </button>


          </div>
        </form>
      </div>

    </main>







  </>
  );
}
