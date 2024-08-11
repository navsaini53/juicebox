"use client"; // This is a client component 👈🏽
import {useRouter} from 'next/navigation'

// import Lottie from "lottie-react";
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../../../components/header/header';
import FormLabel from '../../../../components/form/formLabel';
import FormInput from '../../../../components/form/formInput';
import FormButton from '../../../../components/form/formButton';
import FormImage from '../../../../components/form/formImage';
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

    const router = useRouter();

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = (data: any) => {
        if (!data || !data.email) {
            return alert("something went wrong")
        }
        localStorage.setItem("email", data.email);
        router.push("/contact/results");


    };


    return (<>

            <main className={commonStyle.main}>
            <Header hideBack={false} onBack={()=>{
                     window.history.back();
                }}/>


                <div className={commonStyle.formSection}>

                    <FormImage/>


                    <form className={formStyle.formBody} onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">

                        <div className={formStyle.labelCtr}>
                            <FormLabel labelText='How should we contact you ? Type in your email address.'
                                       labelFor="email"
                                       errors={errors.email}
                                       errorId={'email-error'}
                            />

                        </div>
                        <div className={commonStyle.formCtr}>

                            <FormInput

                                id={'email'}
                                placeholder={'Email address'}
                                type={'text'}
                                {...register('email')}
                                autoFocus={true}
                                role="textbox"
                                aria-required="true"
                                aria-label="Enter Your Email Id"
                                aria-invalid={errors.email ? 'true' : 'false'}


                            />
                            <FormButton/>


                        </div>
                    </form>
                </div>

            </main>


        </>
    );
}
