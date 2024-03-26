import Link from "next/link";
import React from "react";
import RedButton from "../Button/RedButton";
import BlueButton from "../Button/BlueButton";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className="h-[12vh] bg-rose-100 shadow-md ">
            <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh] text-left">
            <h1 className="text-[16px] md:text-[25px] font-bold text-slate-700">
                <span className= "text-[27px] md:text-[35px] font-bold text-red-400">F</span>
                urry
                <span className= "text-[27px] md:text-[35px] font-bold text-red-400">C</span>
                ove
            </h1>
            <ul className="hidden lg:flex items-center space-x-10">
                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/booking">Book Appointment</Link>
                </li>
                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/shop">Shop</Link>
                </li>
                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/teams">Teams</Link>
                </li>
            </ul>
            <div className="flex items-center space-x-2 md:space-x-5">
               <BlueButton text="Login" />
               <RedButton text="Sign Up" />
               <Bars3BottomRightIcon 
               onClick={openNav}
               className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer">
               </Bars3BottomRightIcon>
            </div>
            </div>
        </div>
    );
};


export default Nav;