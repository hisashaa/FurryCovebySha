import React from 'react'

interface Props {
    headingMini :string;
    headingPrimary :string;
}

const SectionHeading = ({headingMini,headingPrimary}:Props) => {
  return (
    <div className="pt-[5rem] pb-[3rem] text-center p-2">
        <p className="font-bold text-rose-400 md:text-[20px] text-[18px]">{headingMini}</p>
        <h1 className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-red-500">
            {headingPrimary}</h1>
    </div>
  );
};

export default SectionHeading;