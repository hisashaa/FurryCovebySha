import Image from 'next/image';
import React from 'react'

interface Props {
    image:string;
    title:string;
}

const ProductCard = ({image, title}:Props) => {
  return (
    <div className="text-center bg-rose-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300
    cursor-pointer hover:scale-105">
        <Image 
            src={image}
            alt="icon"
            width={70}
            height={70}
            className="mx-auto"
        />
        <h1 className="text-[20px] mt-[1.4rem] font-[500] text-red-700] ">
            {title}
        </h1>
        <p className="mt-[1rem] text-black opacity-90 text-[15px]">
        Promote canine health with wholesome ingredients, 
        enriched with vitamins, ensuring vitality and deliciousness.
        </p>
        <p className="mt-[1.4rem] text-red-700 font-[500] cursor-pointer hover:text-red-900">
            Add to Cart 🛒
        </p>
    </div>
  );
};

export default ProductCard;
