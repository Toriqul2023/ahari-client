'use client'
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const Slider = () => {
  return (
    <div>
              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={'https://aharibd.com/wp-content/uploads/2023/12/1.jpg'} width={500} height={500}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={'https://aharibd.com/wp-content/uploads/2023/12/2.jpg'} width={500} height={500}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Slider