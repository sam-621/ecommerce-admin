'use client';

import { type FC, type ReactNode, type RefObject, useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, type SwiperProps, type SwiperRef, SwiperSlide } from 'swiper/react';

const CarouselRoot: FC<Props> = ({ children, ...rest }) => {
  const carouselRef = useRef<HTMLElement>(null);

  return (
    <Swiper
      ref={carouselRef as unknown as RefObject<SwiperRef>}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1440: {
          slidesPerView: 4
        }
      }}
      spaceBetween={32}
      navigation
      {...rest}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {children}
    </Swiper>
  );
};

export const Carousel = Object.assign(CarouselRoot, { Slide: SwiperSlide });

type Props = {
  children: ReactNode;
} & SwiperProps;
