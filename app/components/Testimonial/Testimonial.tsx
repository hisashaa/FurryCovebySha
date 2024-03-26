/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <SectionHeading 
        headingMini= "Pawsome Reviews"
        headingPrimary="Happy Customers Share Their Furry Cove Experience"
        />
        <div className="w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 items-center">
            <div>
                <TestimonialCard />
            </div>

        </div>
    </div>
  );
};

export default Testimonial;