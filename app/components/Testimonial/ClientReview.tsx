import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props{
    name:string;
    needed:string;
    image:string;
}

const ClientReview = ({name, needed, image}:Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
        <Image 
        src={image}
        alt={name}
        width={500}
        height={500}
        objectFit="contain" 
        className="mx-auto mb-[0.5rem] rounded-full"
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
        <p className="text-[16px] text-red-700 opacity-50 w-[90%] md:w-[50%] mx-auto">
        Furry Cove is incredible! When our cat suffered from FLUTD, they provided expert care that led to a full recovery. 
        Their attention during sterilization was reassuring. Highly recommended!
        </p>
    </div>
  );
};

export default ClientReview;