'use client'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { MyContext } from '../context';

const All = ({popularDatas}) => {
   
    const {datas,setDatas,addCart,user}=useContext(MyContext)
//     useEffect(()=>{
//       fetch('http://localhost:4000/shop')
//       .then(res=>res.json())
//       .then(data=>setDatas(data))
// },[])
  return (
    <div>
        <div className='mx-[auto] w-[60%]'>
            <h3 className='text-3xl'>Best Categories</h3>
            <div>
            <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            datas?.slice(0,10).map(data=>(
              
                  <SwiperSlide className='text-black shadow-lg'>
                    <div className='text-start'>
                    <div className=''>
                   <Image src={data?.image} height={500} width={500}/>
                   </div>
                    
                   
                  
                   <h3 className='text-black p-2'>{data?.name}</h3>
                   <p className='text-black p-2'>{data?.price}৳</p> 
                   <button onClick={()=>addCart(data,user?.email)} className='btn   mb-[50px]  w-[100%] text-white bg-[#04472D] hover:bg-[#04472D]' style={{outline:'none'}}>Add To cart</button>
                    </div>
                 
                 
                  
                </SwiperSlide>
              
              
            ))
        }
       
       
      </Swiper>
            </div>
            <h3 className='text-3xl text-center my-5'>Featured Categories</h3>
            <div>
            <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            datas?.slice(3,15).map(data=>(
              
                  <SwiperSlide className='text-black shadow-lg'>
                    <div className='text-start'>
                    <div className=''>
                   <Image src={data?.image} height={500} width={500}/>
                   </div>
                    
                   
                  
                   <h3 className='text-black p-2'>{data?.name}</h3>
                   <p className='text-black p-2'>{data?.price}৳</p> 
                   <button onClick={()=>addCart(data,user?.email)} className='btn   mb-[50px]  w-[100%] text-white bg-[#04472D] hover:bg-[#04472D]' style={{outline:'none'}}>Add To cart</button>
                    </div>
                 
                 
                  
                </SwiperSlide>
              
              
            ))
        }
       
       
      </Swiper>
            </div>
      
        </div>
    </div>
  )
}

export default All