
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


function Carousel() {

  return (
    <div className='carouselPage'>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/skoda-fabia-2021.jpg" alt="" /></SwiperSlide>
         <SwiperSlide><img src="https://a0.muscache.com/im/pictures/1feb61aa-9dbf-42a9-b125-62ea5d1682d3.jpg?im_w=720" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <h3>sdsad</h3>
  </div>
);
}

export default Carousel