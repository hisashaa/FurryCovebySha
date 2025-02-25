import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon, MapPinIcon } from '@heroicons/react/20/solid';
import React from 'react'

const Footer = () => {
    return (
      <div className="pt-[2rem] pb-[2rem] bg-rose-100">
        <div className="grid boder-b-[1px] pb-[2rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-rose-200">
              <MapPinIcon className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3.5rem] text-slate-700" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-bold text-gray-700">
                Address
              </h1>
              <p className="text-[17px] w-[80%] text-gray-500">
                Kemang Raya Street, South Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-rose-200">
              <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3.5rem] text-slate-700" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-bold text-gray-700">
                Phone Number
              </h1>
              <p className="text-[17px] w-[80%] text-gray-500">
                +62 822 8888 222 <br />
                +62 228 2222 888
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-rose-200">
              <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3.5rem] text-slate-700" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-bold text-gray-700">
                Email Our Team
              </h1>
              <p className="text-[17px] w-[80%] text-gray-500">
                woof@furrycove.com <br />
                meow@furrycove.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[1rem]">
            <div className="w-[80%] mx-auto grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
                <div className="md:mx-auto mx-0">
                    <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Company</h1>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">About</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Associate</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Careers & Culture</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Investor Relation</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Sitemap</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">License</p>
                </div>
                <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Find Us!</h1>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">South Jakarta</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">South Tangerang</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Bandung</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Surabaya</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Bali</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Makassar</p>
                </div>
                <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Our Information</h1>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Ask Our Vet!</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Store Hours</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Health Insights</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Feedback</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Terms & Condition</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Article</p>
                </div>
                <div className="md:mx-auto mx-0">
                <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Frequently Asked Questions</h1>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Insurance</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Billing & Payment</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Hospitalization</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Adoption</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Illness & Symptomps</p>
                    <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer
                    hover:text-red-700">Funeral for Furries</p>
                </div>
            </div>
        </div>
        <div className="w-[80%] mx-auto mt-[1rem] text-[15px] text-red-700 font-bold text-center">COPYRIGHT © 2024 BY FURRY COVE</div>
      </div>
    );
  };

export default Footer;