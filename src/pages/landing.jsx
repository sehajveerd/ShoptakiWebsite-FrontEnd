import React from 'react';

const Landing = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[191px] text-left text-17xl text-darkslategray-300 font-poppins">
      <div className="self-stretch bg-gray-400 flex flex-row py-0 pr-0 pl-[100px] items-center justify-between text-dimgray-300">
        <div className="flex flex-col items-start justify-start gap-[96px]">
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="relative font-medium inline-block w-[486px]">
              Earn Passive Income through Crowdfunded Real Estate Investments
            </div>
            <div className="relative text-[18px] inline-block w-[524px]">
              Experience Hassle-Free Real Estate Investing at Your Fingertips.
              Manage your portfolio and join related communities
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <button className="cursor-pointer [border:none] py-2 px-2.5 bg-primary rounded-lg flex flex-row items-center justify-start hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
              <div className="relative text-sm font-semibold font-poppins text-white text-left">
                Get Started
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] rounded-lg flex flex-row items-center justify-start hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
              <div className="relative text-sm font-medium font-poppins text-primary text-left">
                Learn More
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-[704px] h-[607px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[704px] h-[607px] object-cover"
            alt="landing page photo"
            src="/rectangle-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
