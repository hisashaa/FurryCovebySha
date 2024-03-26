import React from "react"
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import WhyUs from "./WhyUs/WhyUs";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
    <div>
        <Hero />
        <Products />
        <WhyUs />
        <Testimonial />
    </div>
    );
};

export default Home;