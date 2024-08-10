"use client"; // This is a client component 👈🏽
import {useState} from 'react';

import Lottie from "lottie-react";

import Header from '../../../../components/header/header';
import MyButton from '../../../../components/button/button';

import juicebotJson from "../../../../public/animations/Juicebot.json";
import commonStyle from "../../common.module.css";
import formStyle from "../form.module.css";
import { useEffect } from 'react';
import local from 'next/font/local';



export default function Result() {

  

  const [name,setName]=useState<string|null>('');
  const [email,setEmail]=useState<string|null>('');

  useEffect(()=>{

    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  },[])



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



        <div className={formStyle.formBody}>

          <div className={formStyle.labelCtr }>
          Thanks . {name}, {email} Now its time to  get a reality check.
          </div>
          <div className={commonStyle.formCtr}>


           


          </div>
        </div>
      </div>

    </main>







  </>
  );
}
