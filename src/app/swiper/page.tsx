"use client"; // This is a client component 👈🏽
import { act, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwipeItem from '../../../components/swiper/swiperItem';
import MyHeader from '../../../components/header/header';
import MyButton from '../../../components/button/button';
import styles from "../common.module.css";


export default function SwiperComp() {

  const router = useRouter();
  const [slideRef, setSlide] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);


  const hitContinue = () => {
    if (activeIndex == 2) {
      router.push('/contact/name');
      return;
    }
    slideRef.slideNext()
  }

  return (<>

    <main className={styles.main}>
      <MyHeader hideBack={false} 
      onBack={()=>{
        if(activeIndex==0){
          window.history.back();
          return;
        }

        slideRef.slidePrev()


      }}
      
      />
      <div className={styles.swiperSection}>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
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


      {
        activeIndex < 2 && <MyButton
          isHomeBtn={false}
          isInverted={false}
          title={'Continue'}
          ariaLabel={'click here to view more information'}
          onBtnClick={hitContinue}
        />

      }

      {
       (activeIndex == 2) && <MyButton
          isHomeBtn={false}
          isInverted={true}
          title={'Get Started'}
          ariaLabel={'Click here to enrol yourself'}
          onBtnClick={hitContinue}
        />
      }


    </main>


  </>
  );
}
