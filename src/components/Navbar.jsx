import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row py-4 px-[100px] items-center justify-between text-left text-5xl text-darkslategray-100 font-poppins border-b-[1px] border-solid border-gainsboro">
      <div
        className="relative font-semibold"
        style={{
          background: 'linear-gradient(93.33deg, #0085ff, #b1daff 60.42%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <Link to="/">Sophtera</Link>
      </div>

      <div className="flex flex-row items-start justify-start gap-[24px] text-sm">
        <Link
          to="/marketplace"
          className="[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit]"
        >
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Marketplace</div>
          </div>
        </Link>
        <Link
          to="/trends"
          className="[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit]"
        >
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Trends</div>
          </div>
        </Link>
        <Link
          to="/about"
          className="[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit]"
        >
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">About</div>
          </div>
        </Link>
        <Link
          to="/forum"
          className="[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit]"
        >
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Forum</div>
          </div>
        </Link>
        <Link
          to="/support"
          className="[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit]"
        >
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Support</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-start justify-start gap-[32px]">
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] rounded-lg flex flex-row items-center justify-start hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] active:mix-blend-color lg:hover:shadow-[0px_1px_3px_rgba(0,_0,_0,_0.25)]">
          <div className="relative text-sm font-medium font-poppins text-dimgray-200 text-left">
            Login
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-2 px-2.5 bg-primary rounded-lg flex flex-row items-center justify-start hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] lg:hover:shadow-[0px_1px_3px_rgba(0,_0,_0,_0.25)]">
          <div className="relative text-sm font-medium font-poppins text-white text-left">
            Get Started
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
