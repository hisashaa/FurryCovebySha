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
        <ClientReview image="/images/Testimonial/review.png" 
        name="Ms Laura" 
        needed="FLUTD" 
        testi="Furry Cove is incredible! When our cat suffered from FLUTD, they provided expert care that led to a full recovery. Their attention during sterilization was reassuring. Highly recommended!"/>
        <ClientReview image="/images/Testimonial/review2.png" 
        name="Ms Beatrice" 
        needed="Grooming"
        testi="Exceptional grooming service! Our pet looks and feels amazing after every visit. Highly recommend for anyone seeking professional pet care. " />
        <ClientReview image="/images/Testimonial/review 3.png" 
        name="Mrs Smith" 
        needed="Hairball" 
        testi="Furry Cove is simply amazing! When my cat had hairball troubles, they provided gentle care and effective solutions. Their attention during sterilization was reassuring. Thank you for always looking out for my furr babies!"/>
        <ClientReview image="/images/Testimonial/review 4.png" 
        name="Little Teddy" 
        needed="Adoption" 
        testi="Our experience with pet adoption here was wonderful! We found our perfect furry companion, and the process was smooth and supportive. It's a fantastic place for anyone looking to welcome a new member into their family."/>
        <ClientReview image="/images/Testimonial/review 5.png" 
        name="Purity Fam" 
        needed="Medical Check-Up and Vaccine" 
        testi="The medical check-up and vaccine service here exceeded our expectations. Professional staff, thorough examination, and a caring approach made us feel confident in our pet's health. Highly satisfied and grateful for their expertise."/>
        <ClientReview image="/images/Testimonial/review 6.png" 
        name="Puffball Paw" 
        needed="I am the cat" 
        testi="meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow (psst.. Puffball said he loves the fancy accessories, Bonjour!"/>

    </Carousel>
  );
};

export default TestimonialSlider;