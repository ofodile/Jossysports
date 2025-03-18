"use client";  
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef } from "react";
import "../css/SwiperSlider.css";

export default function SwiperSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get Swiper instance
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src="/image1.jpg" className="overlay-img" alt="Slide 1" />
          <a href="/others" className="text-overlay">Watch All Live Matches on Premier League and La Liga</a>
        </SwiperSlide>
        <SwiperSlide>
         <img src="/image2.jpg" className="overlay-img" alt="Slide 3" />
          <a href="/others" className="text-overlay">Join The JossySports Fanzone Family, Come Onboard And Represent Your Favourite Team</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image4.jpg" className="overlay-img" alt="Slide 3" />
          <a href="/others" className="text-overlay">Listen To JossySports Analytics, Where we talk Football Like Never Before</a>
        </SwiperSlide>
      </Swiper>

      {/* Custom Next & Previous Buttons */}
      <button className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
        ❮
      </button>
      <button className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
        ❯
      </button>
    </div>
  );
}
