import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import ProductCard from './ProductCard';
import Icon1 from "@/public/images/Fix/Fussy & Beauty.png";
import Icon2 from "@/public/images/Fix/dentalfresh.png";
import Icon3 from "@/public/images/Fix/Urinary Care.png";
import Icon4 from "@/public/images/Fix/Mother & Baby (1).png";
import Icon5 from "@/public/images/Fix/Sterilised.png";
import Icon6 from "@/public/images/Fix/Weight Loss.png";


const Products = () => {
  return (
    <div className="pb-[1rem]">
       <SectionHeading 
       headingMini="Enhance your Furry Companion's Well-Being With Our Premium Products" 
       headingPrimary="Check out the Promo for Adorable April!"
       />
       <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
       items-center gap-[1.4rem] text-red-900">
        <div 
            data-aos="zoom-in" 
            data-aos-anchor-placement="top-center"
        >
            <ProductCard title="Fussy & Beauty" image={Icon1.src} />
        </div>
        <div 
            data-aos="zoom-in" 
            data-aos-delay="200" 
            data-aos-anchor-placement="top-center"
        >
            <ProductCard title="Dental Fresh" image={Icon2.src} />
        </div>
        <div 
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
        >
            <ProductCard title="Urinary Care" image={Icon3.src} />
        </div>
        <div 
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-anchor-placement="top-center"
        >
            <ProductCard title="Mother & Baby" image={Icon4.src} />
        </div>
        <div
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-anchor-placement="top-center"
        >
            <ProductCard title="Sterilised" image={Icon5.src} />
        </div>
        <div
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-anchor-placement="top-center"
        >
            <ProductCard title="Weight Loss" image={Icon6.src} />
        </div>
       </div>
    </div>
  );
};

export default Products;