/* eslint-disable no-undef */
import React, { useEffect } from 'react';

const invest = () => {
  // Logic for the invest action
  console.log('Invest button clicked');
};

const Investcard = ({
  raisedAmount,
  targetAmount,
  percentage,
  investors,
  timeLeft,
  minDeposit,
  riskRating,
}) => {
  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }
  }, [percentage]);
  return (
    <div className="border border-solid border-neutralgray-200 font-poppins w-full">
      <div className="py-5 px-6">
        {/* Raised Amount and Target */}
        <div className="text-left w-full mb-5">
          <span className="font-bold text-3xl text-primary-blue-500 w-1/3">
            {raisedAmount}
          </span>
          <span className="text-base font-normal text-black w-2/3">
            &nbsp; raised of {targetAmount}
          </span>
        </div>

        {/* Progress Bar and Percentage */}
        <div className="flex items-center w-full mb-6">
          <div className="text-neutralgray-700 font-body-small14 text-right">
            {percentage}%
          </div>
          <div className="bg-secondaryblue-50 h-3 rounded-full w-full mx-2">
            <div
              className="bg-primary-blue-500 h-3 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Investors, Time Left, Min. Deposit in a Column */}
        <div className="flex flex-col w-full ml-auto justify-center">
          <div className="flex items-start self-stretch gap-5">
            {/* Left Section  */}
            <div className="flex flex-col bg-white self-stretch gap-5 items-center w-1/2 h-full">
              <div className="flex bg-white self-stretch items-center">
                <img
                  loading="lazy"
                  src="/listing/investors.png"
                  className="aspect-w-1 object-contain object-center w-6"
                />
                <div className="text-neutralgray-600 whitespace-nowrap font-normal text-base self-stretch">
                  <span>{investors}</span> Investors
                </div>
              </div>

              {/* Time Left Section */}
              <div className="flex bg-white self-stretch gap-1 items-center">
                <img
                  loading="lazy"
                  src="/listing/time.png"
                  className="aspect-w-1 object-contain object-center w-6"
                />
                <div className="text-neutralgray-600 whitespace-nowrap font-normal text-base self-stretch">
                  <span>{timeLeft}</span>
                </div>
              </div>

              {/* Min. Deposit Section */}
              <div className="flex bg-white self-stretch gap-1 items-center">
                <img
                  loading="lazy"
                  src="/listing/money.png"
                  className="object-contain object-center w-6"
                />
                <div className="text-neutralgray-600 whitespace-nowrap font-normal text-base self-stretch">
                  Min. Deposit: <span>{minDeposit}</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center ml-2 mt-2 w-1/3 h-full self-stretch">
              <div className="text-neutralgray-600 stretch whitespace-nowrap text-sm font-normal font-poppins">
                Risk Rating
              </div>
              <div className="text-neutralgray-600 self-center whitespace-nowrap text-32 font-semibold font-poppins">
                <span>{riskRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invest Button */}
        <button
          onClick={invest}
          className="justify-center bg-sky-700 flex mx-auto p-2 w-full rounded-md mt-10"
        >
          <div className="text-white text-sm bg-transparent w-full p-2 mr-10px">
            Invest
          </div>
        </button>
      </div>
    </div>
  );
};

export default Investcard;
