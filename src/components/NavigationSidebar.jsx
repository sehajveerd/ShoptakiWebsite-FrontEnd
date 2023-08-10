import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Icon2UserLinear,
  IconBusinessActivityLinear,
  IconHistoryLinear,
  IconSettingsLinear,
} from './ui/icons';

const NavigationSidebar = () => {
  const location = useLocation();
  const linkClassNames =
    '[text-decoration:none] text-[inherit] hover:rounded hover:bg-gray-50 w-[195px] flex flex-row py-2 pl-1 hover:box-border items-center justify-start hover:text-primaryblue-500';

  const getActiveLinkClassName = pathname => {
    return location.pathname === pathname
      ? `${linkClassNames} rounded bg-secondaryblue-50 box-border text-primaryblue-500`
      : linkClassNames;
  };

  return (
    <div className="absolute top-0 left-[0px] rounded-t-none rounded-br-xl rounded-bl-none bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.15)] w-60 h-[695px] overflow-hidden text-left text-sm text-neutralgray-600 font-poppins">
      <div className="absolute top-[424.78px] left-[307.29px] rounded-[10.79px] bg-neutralgray-600 shadow-[0px_3.0822370052337646px_28.51px_rgba(0,_0,_0,_0.11)] w-[118.67px] h-[51.63px]" />
      <div className="absolute h-[1.96%] w-[6.25%] top-[56.9%] right-[80%] bottom-[41.14%] left-[13.75%] overflow-hidden" />
      <div className="absolute top-[33px] left-[20px] flex flex-col items-start justify-start gap-[16px]">
        <Link to="/dashboard" className={getActiveLinkClassName('/dashboard')}>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <IconSettingsLinear />
            <div className="relative font-medium">
              <div className="relative font-medium">Dashboard</div>
            </div>
          </div>
        </Link>

        <Link to="/community" className={getActiveLinkClassName('/community')}>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <Icon2UserLinear />
            <div className="relative font-medium">Community</div>
          </div>
        </Link>
        <Link
          to="/my-investments"
          className={getActiveLinkClassName('/my-investments')}
        >
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <IconBusinessActivityLinear />
            <div className="relative font-medium">My Investments</div>
          </div>
        </Link>
        <Link to="/history" className={getActiveLinkClassName('/history')}>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <IconHistoryLinear />
            <div className="relative font-medium">History</div>
          </div>
        </Link>
        <Link to="/settings" className={getActiveLinkClassName('/settings')}>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <IconSettingsLinear />
            <div className="relative font-medium">Settings</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationSidebar;
