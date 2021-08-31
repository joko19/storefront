
import React from "react";
import Swiper from 'react-id-swiper';
import Head from 'next/head'

export default function SliderCarousel() {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 30,
    loop: true,
    autoplay: true
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
      </Head>
      <Swiper>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      <Swiper>
        <div className="bg-black flex justify-center text-white swiper-slide items-center swiper-slide" style={{ width: '100%' }}>Slide 2</div>
        <div className="bg-red-500 flex justify-center text-white swiper-slide items-center swiper-slide" style={{ width: '100%' }}>Slide 3</div>
        <div className="bg-orange-500 flex justify-center text-white swiper-slide items-center swiper-slide" style={{ width: '100%' }}>Slide 4</div>
        <div className="bg-teal-500 flex justify-center text-white swiper-slide items-center swiper-slide" style={{ width: '100%' }}>Slide 5</div>
      </Swiper>
    </>
  )
}