"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface CustomSliderProps {
  items: ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  spaceBetween?: number;
  itemClassName?: string;
  centeredSlides?: boolean;
}

export default function CustomSlider({
  items,
  autoplay = false,
  autoplayDelay = 3000,
  loop = false,
  spaceBetween = 16,
  itemClassName = "w-[300px]",
  centeredSlides,
}: CustomSliderProps) {
  return (
    <Swiper
      centeredSlides={centeredSlides}
      modules={autoplay ? [Autoplay] : []}
      slidesPerView="auto"
      spaceBetween={spaceBetween}
      loop={loop}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
            }
          : false
      }
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className={itemClassName}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
