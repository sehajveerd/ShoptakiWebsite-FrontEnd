import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon2UserLinear,
  IconBusinessActivityLinear,
  IconHistoryLinear,
  IconSettingsLinear,
} from './ui/icons';

const NavigationSidebar = () => {
  return (
    <div className="absolute top-0 left-[0px] rounded-t-none rounded-br-xl rounded-bl-none bg-primary-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.15)] w-60 h-[695px] overflow-hidden text-left text-sm text-neutral-gray600484848 font-body-xs12">
      <div className="absolute top-[424.78px] left-[307.29px] rounded-[10.79px] bg-neutral-gray600484848 shadow-[0px_3.0822370052337646px_28.51px_rgba(0,_0,_0,_0.11)] w-[118.67px] h-[51.63px]" />
      <div className="absolute h-[1.96%] w-[6.25%] top-[56.9%] right-[80%] bottom-[41.14%] left-[13.75%] overflow-hidden" />
      <div className="absolute top-[33px] left-[20px] flex flex-col items-start justify-start gap-[32px]">
        <div className="w-[199px] flex flex-row items-center justify-between">
          {/* TODO: On hover change the class name as per below div */}
          {/* <div className="rounded bg-secondary-blue50 w-[195px] flex flex-row py-1.5 pr-[117px] pl-1.5 box-border items-center justify-start text-primary-blue5001"> */}
          <Link
            to="/dashboard"
            className="[text-decoration:none] text-[inherit]"
          >
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <IconSettingsLinear />
              <div className="relative font-medium">
                <div className="relative font-medium">Dashboard</div>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/community" className="[text-decoration:none] text-[inherit]">
          <div className="w-[199px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <Icon2UserLinear />
              <div className="relative font-medium">Community</div>
            </div>
          </div>
        </Link>
        <Link
          to="/my-investments"
          className="[text-decoration:none] text-[inherit]"
        >
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <IconBusinessActivityLinear />
              <div className="relative font-medium">My Investments</div>
            </div>
          </div>
        </Link>
        <Link to="/history" className="[text-decoration:none] text-[inherit]">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <IconHistoryLinear />
              <div className="relative font-medium">History</div>
            </div>
          </div>
        </Link>
        <Link to="/settings" className="[text-decoration:none] text-[inherit]">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <IconSettingsLinear />
              <div className="relative font-medium">Settings</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationSidebar;
