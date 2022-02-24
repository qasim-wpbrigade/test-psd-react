/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import img1 from "../../assets/images/slider-img1.jpg";

const SliderSection = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="tab-slider">
            <div className="container">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    modules={[Navigation, Thumbs]}
                    slidesPerView={6}
                    className="mySwiper2"
                    onSwiper={setThumbsSwiper}
                    navigation={true}
                >
                    <SwiperSlide>
                        <h6>lOREM IPSUM</h6>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h6>NADAIOS</h6>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h6>Gåmiktig</h6>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h6>Gigagen</h6>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h6>Hexara</h6>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h6>Nanett</h6>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "red",
                        "--swiper-pagination-color": "red",
                    }}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SliderSection;
