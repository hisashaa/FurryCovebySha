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
        <ClientReview image="/images/Testimonial/review 3.png" 
        name="Ms Beatrice" 
        needed="Grooming"
        testi="Furry Cove is a lifesaver! Our dog struggled with hairballs, but thanks to their attentive care and advice, the issue has disappeared. They truly understand pet health and well-being." />
        <ClientReview image="/images/Testimonial/review 3.png" 
        name="Mrs Smith" 
        needed="Hairball" 
        testi="Furry Cove is simply amazing! When my cat had hairball troubles, they provided gentle care and effective solutions. Their attention during sterilization was reassuring. Thank you for always looking out for my furr babies!"/>
        <ClientReview image="/images/Testimonial/review 4.png" 
        name="Little Teddy" 
        needed="Adoption" 
        testi="Furry Cove exceeded our expectations! Our cat's FLUTD was a concern, but their knowledgeable staff provided guidance and support that led to significant improvement. We trust them completely with our pet's health."/>
        <ClientReview image="/images/Testimonial/review 5.png" 
        name="Purity Fam" 
        needed="Urinary" 
        testi="Furry Cove is our go-to for pet health! They helped our dog overcome FLUTD with their expertise and compassionate care. We're grateful for their dedication to our pet's well-being"/>
        <ClientReview image="/images/Testimonial/review 6.png" 
        name="Puffball Paw" 
        needed="I am the cat" 
        testi="meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow"/>

    </Carousel>
  );
};

export default TestimonialSlider;