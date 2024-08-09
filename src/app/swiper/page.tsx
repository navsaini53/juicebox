"use client"; // This is a client component 👈🏽
import {act, useState} from 'react';
import Head from "next/head";
import styles from "../common.module.css";

import {useSwiper, Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwipeItem from '../../../components/swiper/swiperItem';
import Header from '../../../components/header/header';
import MyButton from '../../../components/button/button';


export default function SwiperComp() {


  const [slideRef, setSlide] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Function to increment the count
  const hitContinue = () => {
   
    console.log("active",activeIndex);
    slideRef.slideNext()
  };

  return (<>

    <Head>
      <title>First Post</title>
    </Head>
    <main className={styles.main}>
      <Header hideBack={false} />
      <div className={styles.swiperSection}>

        <Swiper

          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}

          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            console.log(swiper)
            setSlide(swiper)
          }}
          onSlideChange={(v) => {
            
            setActiveIndex(v.activeIndex)
          }}
        >
          <SwiperSlide>
            <SwipeItem
              swipeDescriptionOne={'Professionals around the world shared how they feel ab'}
              swipeDescriptionTwo={'out technology and I’ve listened. Now it’s your turn.'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeItem
              swipeDescriptionOne={'I’ll ask you a handful of meaningful questions '}
              swipeDescriptionTwo={'and compare your responses with people in your industry. '}
            />
          </SwiperSlide>
          <SwiperSlide>

            <SwipeItem
              swipeDescriptionOne={'You’ll get insights into current industry sentiments an'}
              swipeDescriptionTwo={'d a reality check about technology in a few minutes. Deal? Great!'}
            />
          </SwiperSlide>


        </Swiper>

      </div>

      <MyButton
        isHomeBtn={false}
        isInverted={false}
        title={'Continue'}
        onBtnClick={hitContinue}
      />




    </main>







  </>
  );
}
