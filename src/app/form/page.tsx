"use client"; // This is a client component 👈🏽
import { useRouter } from 'next/navigation'

import Lottie from "lottie-react";

import Header from '../../../components/header/header';
import MyButton from '../../../components/button/button';
import FormLabel from '../../../components/form/formLabel';
import FormInput from '../../../components/form/input';
import juicebotJson from "../../../public/animations/Juicebot.json";
import commonStyle from "../common.module.css";

import formStyle from "./form.module.css";

type State = {
  text: string;
};
export default function UserForm() {

  const router = useRouter()


  

  return (<>

    <main className={commonStyle.main}>
      <Header hideBack={false} />




      <div className={commonStyle.swiperSection}>

        <Lottie animationData={juicebotJson}
          style={{
            height: 100
          }}
          loop={true} />

        <FormLabel labelText='Let’s start with the basics. Type in your first name.' />



      </div>


      <div className={commonStyle.footerCtr}>
          <FormInput formFields={{
        name:'Name',
        type:'text',
        for:'name'
      }
      }
        />

      </div>




    </main>







  </>
  );
}
