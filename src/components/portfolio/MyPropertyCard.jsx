/**
 * This code file defines a React functional component named MyPropertyCard.
 * This component visually represents a property card, displaying various details about the property including its
 * image, address, the number of people invested in it, investment percentage, the amount invested by the user, and the returns on that investment.
 * It also provides an option to invest in the property.
 *
 * Though this component is used in the Portfolio page, it can be used in other pages as well.
 */
import React from 'react';
import { Icon2UserLinear, IconVerticalEllipsisBold } from '../ui/icons';

const MyPropertyCard = ({ property, cardClassNames }) => {
  // Calculate the percentage of investment in relation to the required amount
  const investmentPercentage = (
    (property.totalInvestedAmount / property.totalRequiredInvestmentAmount) *
    100
  ).toFixed(2);
  // Determine the width of the investment progress bar on UI based on the percentage of investment
  const barWidth = (investmentPercentage / 100) * 183;

  // Function to calculate returns as a percentage
  const getReturnsPct = (currentAmount, investedAmount) => {
    return (((currentAmount - investedAmount) / investedAmount) * 100).toFixed(
      2
    );
  };

  // Function to format returns as a dollar amount to display on UI
  const getFormattedReturns = (currentAmount, investedAmount) => {
    const difference = currentAmount - investedAmount;
    const formattedDifference = Math.abs(difference).toLocaleString('en-US', {
      minimumFractionDigits: 2,
    });
    return difference < 0
      ? `-$${formattedDifference}`
      : `$${formattedDifference}`;
  };

  // Function to determine the color of the returns text on UI
  const getValueColor = (currentAmount, investedAmount) => {
    return currentAmount > investedAmount
      ? 'green'
      : currentAmount < investedAmount
      ? 'red'
      : 'neutralgray-700';
  };

  return (
    // Card container
    <div className={`w-[507px] h-[200px] relative ${cardClassNames}`}>
      <div className="absolute top-0 left-0 rounded-3xs bg-white w-full h-full" />
      {/* Property card thumbnail */}
      <img
        className="absolute top-[16px] left-[16px] rounded-3xs w-[178px] h-[168px] object-cover"
        alt=""
        src={property.thumbnailUrl}
      />
      {/* Property card details */}
      <div className="absolute top-[16px] left-[210px]">
        <div className="font-semibold">{property.streetAddress}</div>
        <div className="text-xs text-neutralgray-600">
          {property.city}, {property.state} {property.zip}
        </div>
      </div>
      {/* Property card actions */}
      <button
        className="cursor-pointer hover:bg-gray-50 hover:rounded-[50%] p-3 bg-[transparent] absolute top-[6px] left-[476px] flex flex-col items-start justify-start gap-[2px]"
        type="button"
      >
        <IconVerticalEllipsisBold />
      </button>
      {/* Number of people invested */}
      <div className="absolute top-[76px] left-[210px] flex items-start gap-[5px] text-neutralgray-700">
        <Icon2UserLinear />
        <div>{property.numPeopleInvested}</div>
      </div>
      {/* Investment progress bar */}
      <div className="absolute top-[101px] left-[210px] rounded-lg bg-neutralgray-100 flex flex-row py-0.5 px-1.5 items-center gap-[6px]">
        <div>{investmentPercentage}%</div>
        <div className="relative w-[183px] h-2 rounded-lg bg-secondaryblue-50">
          <div
            className="absolute top-[0.5px] left-0 rounded-lg bg-secondaryblue-700"
            style={{ width: `${barWidth}px`, height: '7px' }}
          />
        </div>
      </div>
      {/* Investment amount and returns */}
      <div className="absolute top-[141px] left-[210px]">
        <div className="text-xs">Invested</div>
        <div className="text-sm font-semibold text-neutralgray-700">
          $
          {property.myInvestedAmount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
          })}
        </div>
      </div>
      {/* Returns */}
      <div className="absolute top-[141px] left-[305px]">
        <div className="text-xs">Returns</div>
        <div
          className={`text-sm font-semibold text-${getValueColor(
            property.currentInvestmentValue,
            property.myInvestedAmount
          )}`}
        >
          {getReturnsPct(
            property.currentInvestmentValue,
            property.myInvestedAmount
          )}
          % {` (`}
          {getFormattedReturns(
            property.currentInvestmentValue,
            property.myInvestedAmount
          )}
          {`)`}
        </div>
      </div>
      <button className="absolute right-[17px] bottom-[18px] rounded-xl py-[5px] px-2 bg-primaryblue-500 text-white font-semibold">
        Invest
      </button>
    </div>
  );
};

export default MyPropertyCard;
