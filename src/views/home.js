import React from "react";
import CtaWithImage from "../components/ctaWithImage";
import HeroSection from "../components/heroSection";
import ImageSection from "../components/ImageSection";
import Programs from "../components/programs";
import Questions from "../components/questionsSection";
import SliderSection from "../components/slider";
import TermSection from "../components/termSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <TermSection />
            <SliderSection />
            <ImageSection />
            <Programs />
            <CtaWithImage />
            <Questions />
        </>
    );
};

export default Home;
