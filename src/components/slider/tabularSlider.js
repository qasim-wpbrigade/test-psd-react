/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper";
import { tabs, sliderItems } from "./sliderData";

const TabularSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="tabSliderSection">
            <div className="container">
                <h4 className="heading">Lörem ipsum dumpling böhet</h4>
                <div className="tabular-slider">
                    <Swiper
                        spaceBetween={10}
                        modules={[Navigation, Thumbs]}
                        slidesPerView={2}
                        className="tabSlider"
                        onSwiper={setThumbsSwiper}
                        navigation={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                            },
                            1025: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        {tabs.map((row) => (
                            <SwiperSlide key={row.id}>
                                <h6>{row.title}</h6>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        watchSlidesProgress={true}
                        modules={[Navigation, Thumbs, Pagination]}
                        pagination={true}
                        className="tabular-items"
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1025: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {sliderItems.map((row) => (
                            <SwiperSlide key={row.id}>
                                <div className="thumbail" key={row.id}>
                                    <img src={row.img} alt={row.title} />
                                </div>
                                <div className="content">
                                    <h6>{row.title}</h6>
                                    <p>{row.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TabularSlider;
