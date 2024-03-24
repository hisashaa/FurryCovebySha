import React from 'react'

const History = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col
    justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e]
            leading-[2.4rem] md:leading-[4rem]">
               Get to Know FurryCove Better!
          </h1>

          <br />
        <div>
          <p>
          Welcome to FurryCove, where premium products and services for cats and dogs are offered with love and dedication. 
          Founded on my passion for animal welfare and supported by the encouragement of loved ones, 
          FurryCove aims to ensure the health and happiness of every pet.
          </p>
          <br />

          <p>
          Driven by the belief that animals deserve our care and attention, FurryCove goes beyond simply providing food and services; 
          it's a sanctuary where cleanliness and the well-being of every furry friend are top priorities. 
          Recognized by the governor for our dedication to caring for over 2000 cats and dogs last year, 
          FurryCove has become the country's most renowned pet shop.
          </p>
          <br />

          <p>
          With a minimum of 100 visitors daily, our commitment to cleanliness and the joy of our animal guests sets us apart. 
          Join us at FurryCove, where every wag of a tail and purr is a testament to the love and care we provide.
          </p>
          <br />
        </div>
      </div>
    </div>
    </div>
  );
};

export default History;