import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
    nav:boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {
    const navOpenStyle = nav?"translate-x-0":"translate-x-[-100%]";
    return (
    <div className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh]
    right-0 bottom-0 bg-rose-100`}>
        <XMarkIcon 
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]" />
        <ul className=" relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
                <li className="text-[25px] cursor-pointer text-red-400 hover:text-red-900 transition-all duration-200">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[25px] cursor-pointer text text-red-400 hover:text-red-900 transition-all duration-200">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-[24px] cursor-pointer text-red-400 hover:text-red-900 transition-all duration-200">
                    <Link href="/booking">Book Appointment</Link>
                </li>
                <li className="text-[25px] cursor-pointer text-red-400 hover:text-red-900 transition-all duration-200">
                    <Link href="/shop">Shop</Link>
                </li>
                <li className="text-[25px] cursor-pointer text-red-400 hover:text-red-900 transition-all duration-200">
                    <Link href="/teams">Team</Link>
                </li>
            </ul>
        </div>
    );    
};

export default MobileNav;