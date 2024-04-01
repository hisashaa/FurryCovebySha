/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import PinkButton from '../Button/PinkButton';
import GreenButton from '../Button/GreenButton';
import HeroImg from "@/public/images/Hero/hero.svg";
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col
    justify-center">
       <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
            <h1 
              data-aos="fade-right"
              className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e]
              leading-[2.4rem] md:leading-[4rem]"
            >
               Where Cuddles, Purrs, and Wagging Tails Await!🐾
            </h1>
            <p 
              data-aos="fade-left" 
              data-aos-delay="200"
              className="md:text-[17px] text-[15px] mb-[2rem] text-red-700 opacity-90 font-[400]"
            >
                Furry Cove is your go-to destination for cat and dog owners. 
                Our shop offers premium products, from food to accessories, while our expert team provides grooming and daycare services. 
                At Furry Cove, we prioritize your pets' well-being, ensuring they receive the best care possible. 
                Whether you're spoiling your pets or seeking reliable care, Furry Cove has you covered. 
                Join us and experience a place where love for pets shines – welcome to Furry Cove, pawrents!
            </p>
            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="flex items-center space-x-4 md:space-x-6"
            >
                <GreenButton text="Drop us a line!" />
                <PinkButton text="Find us on G-Maps!" />
            </div>    
        </div>
        <div 
          data-aos="fade-left"
          data-aos-delay="600"
          className="col-span-2 hidden sm:block"
        >
            <Image src={HeroImg} alt="Hero" />
        </div>
       </div>
    </div>
  );
};

export default Hero