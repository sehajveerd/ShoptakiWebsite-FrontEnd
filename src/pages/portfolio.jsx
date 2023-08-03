import React from 'react';
import NavigationSidebar from '../components/NavigationSidebar';

const Portfolio = () => {
  return (
    <div className="relative bg-neutral-gray100f1f1f1 w-full h-[1898px] overflow-y-auto text-left text-sm text-black font-body-xs12">
      <div className="absolute top-5 left-[272px] text-5xl font-semibold text-gray-900">
        My Portfolio
      </div>
      <NavigationSidebar />
    </div>
  );
};

export default Portfolio;
