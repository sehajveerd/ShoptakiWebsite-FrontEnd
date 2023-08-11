import React from 'react';
import { Icon2UserLinear, IconVerticalEllipsisBold } from '../ui/icons';

const MyPropertyCard = ({ property, cardClassNames }) => {
  const investmentPercentage = (
    (property.totalInvestedAmount / property.totalRequiredInvestmentAmount) *
    100
  ).toFixed(2);
  const barWidth = (investmentPercentage / 100) * 183;

  const getReturnsPct = (currentAmount, investedAmount) => {
    return (((currentAmount - investedAmount) / investedAmount) * 100).toFixed(
      2
    );
  };

  const getFormattedReturns = (currentAmount, investedAmount) => {
    const difference = currentAmount - investedAmount;
    const formattedDifference = Math.abs(difference).toLocaleString('en-US', {
      minimumFractionDigits: 2,
    });
    return difference < 0
      ? `-$${formattedDifference}`
      : `$${formattedDifference}`;
  };

  const getValueColor = (currentAmount, investedAmount) => {
    return currentAmount > investedAmount
      ? 'green'
      : currentAmount < investedAmount
      ? 'red'
      : 'neutralgray-700';
  };

  return (
    <div className={`w-[507px] h-[200px] relative ${cardClassNames}`}>
      <div className="absolute top-0 left-0 rounded-3xs bg-white w-full h-full" />
      <img
        className="absolute top-[16px] left-[16px] rounded-3xs w-[178px] h-[168px] object-cover"
        alt=""
        src={property.thumbnailUrl}
      />
      <div className="absolute top-[16px] left-[210px]">
        <div className="font-semibold">{property.streetAddress}</div>
        <div className="text-xs text-neutralgray-600">
          {property.city}, {property.state} {property.zip}
        </div>
      </div>
      <button
        className="cursor-pointer hover:bg-gray-50 hover:rounded-[50%] p-3 bg-[transparent] absolute top-[6px] left-[476px] flex flex-col items-start justify-start gap-[2px]"
        type="button"
      >
        <IconVerticalEllipsisBold />
      </button>
      <div className="absolute top-[76px] left-[210px] flex items-start gap-[5px] text-neutralgray-700">
        <Icon2UserLinear />
        <div>{property.numPeopleInvested}</div>
      </div>
      <div className="absolute top-[101px] left-[210px] rounded-lg bg-neutralgray-100 flex flex-row py-0.5 px-1.5 items-center gap-[6px]">
        <div>{investmentPercentage}%</div>
        <div className="relative w-[183px] h-2 rounded-lg bg-secondaryblue-50">
          <div
            className="absolute top-[0.5px] left-0 rounded-lg bg-secondaryblue-700"
            style={{ width: `${barWidth}px`, height: '7px' }}
          />
        </div>
      </div>
      <div className="absolute top-[141px] left-[210px]">
        <div className="text-xs">Invested</div>
        <div className="text-sm font-semibold text-neutralgray-700">
          $
          {property.myInvestedAmount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
          })}
        </div>
      </div>
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
