"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../../../components/header/header';
import MyButton from '../../../../components/button/button';
import LottieAnimation from '../../../../components/form/submissionAnimation';
import commonStyle from "../../common.module.css";
import formStyle from "../form.module.css";
import { useEffect } from 'react';



export default function Result() {


  const router = useRouter();

  const [name, setName] = useState<string | null>('');
  const [email, setEmail] = useState<string | null>('');

  useEffect(() => {

    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))

  }, [])



  return (<>

    <main className={commonStyle.main}>
      <Header hideBack={false} />

      <div className={commonStyle.swiperSection}>

        <div className={formStyle.lottieCtr}>
          <LottieAnimation />

        </div>

        <div className={formStyle.formBody}>

          <p className={formStyle.labelCtr} role="alert">
            Thanks. {name} Now, it&apos;s time to  get a reality check.
          </p>

          <p className={formStyle.labelCtr} role="alert">
            It will take 2-3 minutes
          </p>


        </div>
      </div>

      <MyButton
        isHomeBtn={false}
        isInverted={true}
        title={'Continue'}
        onBtnClick={() => {

          router.replace("/")

        }}
      />

    </main>







  </>
  );
}
