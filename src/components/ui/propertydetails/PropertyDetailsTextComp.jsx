import React from 'react';
// This component is for displaying a property'
/**
 *
 * @param {title, subtitle}
 * @returns property details
 */
export default function PropertyDetailsTextComp({ title, subtitle }) {
  return (
    <div className="h-[45px] px-2 border-x-[1px] border-black border-dashed border-r-0 flex-col text-left">
      <div className="opacity-80 text-zinc-700 text-sm font-normal font-['Poppins'] text-left">
        {title}
      </div>
      <div className="text-zinc-700 text-base font-medium font-['Poppins'] text-left">
        {subtitle}
      </div>
    </div>
  );
}
