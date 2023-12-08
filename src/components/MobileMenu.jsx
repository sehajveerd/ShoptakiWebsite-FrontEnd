import React from 'react';

const MobileMenu = () => {
  const MobileTooltip = ({ text }) => {
    return (
      <div className="text-black text-base flex justify-center border-b border-gray-300 p-4 no-underline relative group">
        <div className="invisible group-hover:visible bg-primaryblue-500 text-white text-base px-1 rounded justify-center absolute top-[17px] left-1/2 w-auto whitespace-nowrap transform -translate-x-1/2">
          Coming Soon
        </div>
        <span className="text-base text-neutralgray-600 font-body-small14 cursor-pointer justify-center">
          {text}
        </span>
      </div>
    );
  };

  return (
    <div className="mobile-menu bg-white flex xs:px-5 sm:px-5 px-[100px] z-20">
      <div className="w-64 absolute right-4 top-16 bg-white h-auto max-h-64 shadow-md overflow-hidden z-10 transition-max-h-500 ease-in-out py-2 font-medium items-center hover:bg-gray-400">
        <MobileTooltip text="Marketplace" className="visible"></MobileTooltip>
      </div>
      <div className="w-64 absolute right-4 top-32 bg-white h-auto max-h-64 shadow-md overflow-hidden z-10 transition-max-h-500 ease-in-out py-2 font-medium items-center hover:bg-gray-400">
        <MobileTooltip text="About" className="visible"></MobileTooltip>
      </div>
      <div className="w-64 absolute right-4 top-48 bg-white h-auto max-h-64 shadow-md overflow-hidden z-10 transition-max-h-500 ease-in-out py-2 font-medium items-center hover:bg-gray-400">
        <MobileTooltip text="Community" className="visible"></MobileTooltip>
      </div>
      <div className="w-64 absolute right-4 top-64 bg-white h-auto max-h-64 shadow-md overflow-hidden z-10 transition-max-h-500 ease-in-out py-2 font-medium items-center hover:bg-gray-400">
        <MobileTooltip text="Support" className="visible"></MobileTooltip>
      </div>
    </div>
  );
};

export default MobileMenu;
