/* eslint-disable no-unused-vars */
import React from "react";
import Cta from "../components/cta";
import CtaWithImage from "../components/ctaWithImage";
import FeeComparison from "../components/feeComparison";
import HeroSection from "../components/heroSection";
import ImageSection from "../components/ImageSection";
import Programs from "../components/programs";
import Questions from "../components/questionsSection";
import ImgSlider from "../components/slider/imgSlider";
import TabularSlider from "../components/slider/tabularSlider";
import TermSection from "../components/termSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <TermSection />
            <TabularSlider />
            <ImageSection />
            <Programs />
            <CtaWithImage />
            <Questions />
            <FeeComparison />
            <Cta />
            <ImgSlider />
        </>
    );
};

export default Home;
