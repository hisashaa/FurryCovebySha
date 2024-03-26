import React from 'react'

import { BsFacebook, BsInstagram, BsShareFill, BsTwitterX } from 'react-icons/bs';

const ShopHeader = () => {
  return (
    <div className="hidden sm:block">
      <div className="container py-3">
        <div className="w-[100%] flex items-center justify-between mx-auto h-[5vh]">
          <div className="hidden lg:flex gap-2 md:pl-28">
            <div className="header_top_icon_wrapper">
              <BsFacebook className="facebook-icon" /></div>
            <div className="header_top_icon_wrapper">
              <BsTwitterX className="Twitter-icon" /></div>
              <div className="header_top_icon_wrapper">
              <BsInstagram className="instagram-icon" /></div>
              <div className="header_top_icon_wrapper">
              <BsShareFill className="IoShareSocial-icon" /></div>
          </div>

          <div className="flex gap-2 items-center text-[20px] text-red-700">
            <b>FLASH SALE</b> LIMITED FOR ADORABLE APRIL
          </div>     

          <div className="flex gap-3">
            <select 
            className="text-red-700 text-[12px] w-[45px]"
            name="Currency"
            id="Currency"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="IDR">IDR</option>
            </select>

            <select 
            className="text-red-700 text-[12px] w-[80px]"
            name="Language"
            id="Language"
            >
              <option value="Indonesian">Indonesian</option>
              <option value="English">English</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopHeader;