import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-12 mx-auto text-[18px] font-semibold py-10 text-gray-700 pl-20">
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200"  href="#">
                    WET FOOD
                </Link>
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200" href="#">
                    DRY FOOD
                </Link>
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200" href="#">
                    SNACK
                </Link>
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200" href="#">
                    VITAMINS
                </Link>
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200" href="#">
                    ACCESSORIES
                </Link>
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200" href="#">
                    SHAMPOO & PERFUME
                </Link>
                <Link className="navbar_link relative cursor-pointer hover:text-red-500 transition-all duration-200" href="#">
                    CARRIER
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Navbar;