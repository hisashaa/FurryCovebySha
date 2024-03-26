import React from 'react'

interface Props {
    headingMini :string;
    headingPrimary :string;
}

const SectionHeading = ({headingMini,headingPrimary}:Props) => {
  return (
    <div className="text-center p-2">
        <p className="font-bold text-rose-400 md:text-[20px] text-[18px]">{headingMini}</p>
        <h1 className="mt-[05.rem] font-bold text-[22px] md:text-[30px] text-red-500">
            {headingPrimary}</h1>
    </div>
  );
};

export default SectionHeading;