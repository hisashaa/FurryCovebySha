import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props{
    name:string;
    needed:string;
    image:string;
    testi:string;
}

const ClientReview = ({name, needed, image, testi}:Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
        <Image 
        src={image}
        alt={name}
        width={400}
        height={400}
        objectFit="contain" 
        className="mx-auto -mb-[1rem]"
        />
        <div className="flex items-center mx-auto">
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        </div>
        <h1 className="text-[25px] text-red-700 mt-[1rem] ">{name}</h1>
        <p className="text-[18px] text-red-700 opacity-75 mt-[0.5 rem] mb-[1.4 rem]">
            {needed}
        </p>
        <p className="text-[16px] text-red-700 opacity-50 w-[90%] md:w-[50%] mx-auto ">
            {testi}
        </p>
    </div>
  );
};

export default ClientReview;