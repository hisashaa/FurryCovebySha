"use client";

import React, { useEffect } from "react"
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import WhyUs from "./WhyUs/WhyUs";
import Testimonials from "./Testimonial/Testimonials";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: true,
            anchorPlacement: "top-bottom"
        });
    }, []);
    
    return (
    <div>
        <Hero />
        <Products />
        <WhyUs />
        <Testimonials />
        <Footer />
    </div>
    );
};

export default Home;