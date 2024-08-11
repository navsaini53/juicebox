"use client"; // This is a client component 👈🏽

import Image from 'next/image';
import styles from "./form.module.css";

const FormButton: React.FC<{}> = () => {
    return (
        <div className={styles.lottieCtr}>

            <Image
                src="/img/formImage.svg"
                alt="Form Image"
                width={50}
                height={50}
                priority={true}

            />

            {/* <LottieAnimation animate={false}/> */}


        </div>
    );


}

export default FormButton;