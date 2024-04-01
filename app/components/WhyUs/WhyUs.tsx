/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image';
import WhyUsImg from "@/public/images/Logo/WhyUs.png"
import { CheckIcon } from '@heroicons/react/16/solid';

const WhyUs = () => {
    return (
      <div className="pt-[5rem] pb-[3rem] ">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-1 gap-[4rem] items-center">
          <div 
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="order-2 lg:order-1 flex-wrap flex items-center"
          >
            <Image src={WhyUsImg} alt="WhyUs" className="max-w-md h-auto mr-8" />
            <div>
              <h1 
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
                className="text-[20px] md:text-[25px] lg:text-[28px] text-red-500 font-bold leading-[2rem] md:leading-[3rem]"
              >
                Revealing the Secrets of Furry Cove: 
                <br />
                Paw-fect Care and Comfort
              </h1>
              <p 
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[20px] md:text-[18px]"
              >
                "Come see the magic of Furry Cove, where your pets are treated like royalty. 
                <br />
                Find out why we're the ultimate choice for pet lovers like you!"
              </p>
              
              <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
                className="flex items-center mb-[1rem] space-x-3"
              >
                <CheckIcon className="w=-[1.3rem] h-[1.3rem] text-red-600" />
                <p className="text-[17px] text-gray-900 font-500">
                Affordable Wellness Plans
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="450"
                className="flex items-center mb-[1rem] space-x-3"
              >
                <CheckIcon className="w=-[1.3rem] h-[1.3rem] text-red-600" />
                <p className="text-[17px] text-gray-900 font-500">
                Pet Insurance Partnerships
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="500"
                className="flex items-center mb-[1rem] space-x-3"
              >
                <CheckIcon className="w=-[1.3rem] h-[1.3rem] text-red-600" />
                <p className="text-[17px] text-gray-900 font-500">
                Exclusive Membership Benefits
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="550"
                className="flex items-center mb-[1rem] space-x-3"
              >
                <CheckIcon className="w=-[1.3rem] h-[1.3rem] text-red-600" />
                <p className="text-[17px] text-gray-900 font-500">
                Personalized Wellness Solutions
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
                className="flex items-center mb-[1rem] space-x-3"
              >
                <CheckIcon className="w=-[1.3rem] h-[1.3rem] text-red-600" />
                <p className="text-[17px] text-gray-900 font-500">
                Pet Concierge Services
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default WhyUs;