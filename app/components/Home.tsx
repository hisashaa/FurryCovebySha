import React from "react"
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import WhyUs from "./WhyUs/WhyUs";
import Testimonials from "./Testimonial/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
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