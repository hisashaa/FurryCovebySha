/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import SectionHeading from '../SectionHeading/SectionHeading';

const Testimonials = () => {
  return (
    <div className="pt-[1rem] md:pt-[3rem] ">
        <SectionHeading
        headingMini= "Pawsome Reviews"
        headingPrimary="Happy Customers Share Their Furry Cove Experience"
        />
        <div className="w-[80%] mx-auto grid pt-[1rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 items-center">
        </div>
        <div className="pt-[1rem] pb-[4rem] w-[80%] mx-auto">
            <TestimonialSlider />
        </div>
    </div>
  );
};

export default Testimonials;