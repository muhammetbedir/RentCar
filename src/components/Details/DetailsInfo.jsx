import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function DetailsInfo({ car }) {
  return (
    <>
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
          <img
            src={"https://image.tmdb.org/t/p/w500/" + car.backdrop_path}
            alt=""
            className="mainDetailImg"
          />
        </SwiperSlide>
      </Swiper>
      <h2 className="detailPageTitle">{car.original_title}</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          textAlign: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <h3 className="detailInfoBtn">Kategori:Araba</h3>
        <h3 className="detailInfoBtn">Model: Focus</h3>
        <h3 className="detailInfoBtn">Araç Kapasitesi:5</h3>
        <h3 className="detailInfoBtn">Günlük Fiyat: 500 TL</h3>
      </div>

      <p className="detailPageContent">{car.overview}</p>
      {/* <div className="bookingInfo">
        <div>
          <img
            src="https://www.freeiconspng.com/thumbs/car-png/red-sports-car-png-1.png"
            alt=""
            className="locationImg"
          />
          <p>Araç Seçin</p>
        </div>
        <div>
          <img
            src="https://www.freeiconspng.com/thumbs/calendar-icon-png/calendar-icon-png-4.png"
            alt=""
            className="locationImg"
          />
          <p>Tarih Seçin</p>
        </div>
        <div>
          <img
            src="https://icon-library.com/images/booking-icon-png/booking-icon-png-4.jpg"
            alt=""
            className="locationImg"
          />
          <p>Aracı Kiralayın</p>
        </div>
      </div> */}
    </>
  );
}

export default DetailsInfo;
