import React from "react";
import { data } from "./imgSliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ImgSlider = () => {
    return (
        <Swiper
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            modules={[Navigation]}
            className="imagesSlider"
            navigation={true}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                },
                1025: {
                    slidesPerView: 3,
                },

                1300: {
                    slidesPerView: 4,
                },
            }}
        >
            {data.map((row) => (
                <SwiperSlide key={row.id}>
                    <div className="img-slider-item" key={row.id}>
                        <img src={row.img} alt="thumbnail" />
                        <div className="popover">{row.info}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImgSlider;
