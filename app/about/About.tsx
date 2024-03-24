/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div className="pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[20px] font-bold uppercase text-red-700 mb-[1rem]">
                    Get to Know FurryCove Better!
                </h1>
                <p className="md:text-[17px] text-[15px] mb-[1rem] text-black opacity-90 font-[400]">
                Welcome to Furry Cove, where premium products and services for cats and dogs are offered with love and dedication. 
                Founded on my passion for animal welfare and supported by the encouragement of loved ones, 
                FurryCove aims to ensure the health and happiness of every pet.
                </p>
                <br />
                <p className="md:text-[17px] text-[15px] mb-[1rem] text-black opacity-90 font-[400]">
                Driven by the belief that animals deserve our care and attention, FurryCove goes beyond simply providing food and services; 
                it's a sanctuary where cleanliness and the well-being of every furry friend are top priorities. 
                Recognized by the governor for our dedication to caring for over 2000 cats and dogs last year, 
                FurryCove has become the country's most renowned pet shop.
                </p>
                <br />
                <p className="md:text-[17px] text-[15px] mb-[1rem] text-black opacity-90 font-[400]">
                With a minimum of 100 visitors daily, our commitment to cleanliness and the joy of our animal guests sets us apart. 
                Join us at FurryCove, where every wag of a tail and purr is a testament to the love and care we provide. 
                </p>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-red-700 rounded-sm"></span>
                </div>
    
            </div>
            <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                <Image 
                src="/images/About/AboutImg.png" 
                alt="AboutImg" 
                layout="fill" 
                objectFit="contain"
                className="relative z-[11] w-[100%] h-[100%] object-contain"
                />
            </div>
        </div>
    </div>
  );
};

export default About;
