import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

const Destinations = ({ destination }) => {
  const { img } = destination;
  return (
    <div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        ...
      </Swiper> */}
      <div className="grid grid-cols-5">aa</div>
      <div className="grid grid-cols-7">aa</div>
    </div>
  );
};

export default Destinations;
