import Image from 'next/image';
import React from 'react';

interface Props {
    image: string;
    name: string;
    position: string;
    description: string;
}

const AboutCard = ({image, name, position, description}: Props) => {
  return (
    <div>
        <Image 
        src={image} 
        alt={name}   
        height={300}
        width={300}
        className="mx-auto hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"     
        />
        <h1 className="text-[30px] text-slate-700 mt-[1.5rem] text-center font-semibold">
            {name}
        </h1>
        <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-[#cbc7bd] text-white mx-auto w-fit font-semibold 
        hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
            {position}
        </p>
        <p className="text-center md:w-[70%] mx-auto text-slate-700 mt-[1rem]">
            {description}
        </p>
    </div>
  )
}

export default AboutCard;