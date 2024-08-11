"use client"; // This is a client component 👈🏽
import {useRef} from 'react';
import Lottie from "lottie-react";
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import * as yup from 'yup';

import Header from '../../../../components/header/header';
import FormLabel from '../../../../components/form/formLabel';
import FormInput from '../../../../components/form/formInput';
import FormButton from '../../../../components/form/formButton';
import juicebotJson from "../../../../public/animations/Juicebot.json";
import commonStyle from "../../common.module.css";

import formStyle from "../form.module.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
});


type FormData = {
  name: string;
};

export default function UserForm() {

  const router=useRouter();
  
  const nameRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });



  const onSubmit: SubmitHandler<FormData> = (data) => {

    if(!data ||!data.name){
      return alert("something went wrong")
    }
    localStorage.setItem("name", data.name);

    router.push("/contact/email");
   
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
            <FormLabel labelText='Let’s start with the basics. Type in your first name.' labelFor="name"
            errorId={"name-error"}
            errors={errors && errors.name}
            />
          </div>

          
          <div className={commonStyle.formCtr}>


            <div className={commonStyle.inputCtr}>
              <FormInput
             
             autoFocus={true}
              id={'name'}
              placeholder={'First name'}
              type={'text'}
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby="name-error"
      
              />
             
            </div>

            <FormButton/>

           


          </div>
        </form>
      </div>

    </main>







  </>
  );
}
