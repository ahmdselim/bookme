import React, { Fragment } from "react";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const Categories = () => {
  const drug = useSelector((state) => state.Reducer.drug);

  return (
    <div className="country">
      <h2>ابحث حسب نوع مكان الإقامة</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {drug &&
          drug.map((data, i) => (
            <Fragment key={i}>
              <SwiperSlide>
                <img src={img1} alt="swiper" />
                <h4>{data.data.cityDrug}</h4>
                <span> 120 مكان اقامة</span>
              </SwiperSlide>
            </Fragment>
          ))}
      </Swiper>
    </div>
  );
};

export default Categories;
