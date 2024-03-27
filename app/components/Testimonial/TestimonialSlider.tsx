"use client"
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const TestimonialSlider = () => {
  return ( 
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        responsive={responsive}
        infinite
        itemClass="item"
    >
        <ClientReview image="/images/Testimonial/review.png" name="Ms Laura" needed="FLUTD" />
        <ClientReview image="/images/Testimonial/review 2.png" name="Ms Beatrice" needed="Grooming" />
        <ClientReview image="/images/Testimonial/review 3.png" name="Mrs Smith" needed="Hairball" />
        <ClientReview image="/images/Testimonial/review 4.png" name="Little Teddy" needed="Adoption" />
        <ClientReview image="/images/Testimonial/review 5.png" name="Purity Fam" needed="Urinary" />
        <ClientReview image="/images/Testimonial/review 6.png" name="Puffball Paw" needed="I am the cat" />

    </Carousel>
  );
};

export default TestimonialSlider;