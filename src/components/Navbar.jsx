import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import ProfileDropdown from './ui/ProfileDropdown';
import OurStoryDropdown from './ui/OurStoryDropdown';
import { IconSearchOutline } from './ui/icons';

/**
 * TODO: to fix Navbar reload issue for authenticated page
 * create a new NavbarSkeleton and return if isLoading is true
 * or create the items that are not displayed for if isLoading is true
 */

const Navbar = () => {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  const linkClassNames =
    '[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit] hover:bg-gray-50 hover:text-primary-blue5001';

  return (
    <div className="self-stretch bg-white flex flex-row py-4 px-[100px] items-center justify-between text-left text-sm text-neutral-gray600484848 font-body-small14 border-b-[1px] border-solid border-gainsboro-100">
      <div
        className="relative font-semibold font-body-small14 text-5xl"
        style={{
          background:
            'linear-gradient(93.33deg, #0d65b6 10.42%, #b1daff 77.6%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <Link to="/">Sophtera</Link>
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px] text-sm">
        {!isLoading && user && (
          <Link to="/portfolio" className={linkClassNames}>
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-medium">Portfolio</div>
            </div>
          </Link>
        )}
        <Link to="/marketplace" className={linkClassNames}>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Marketplace</div>
          </div>
        </Link>
        <Link to="/trends" className={linkClassNames}>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Trends</div>
          </div>
        </Link>
        <Link to="/community" className={linkClassNames}>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Community</div>
          </div>
        </Link>
        {!isLoading && !user && (
          <>
            <Link to="/our-story" className={linkClassNames}>
              <div className="flex flex-row items-center justify-center">
                <div className="relative font-medium">Our Story</div>
              </div>
            </Link>
            <Link to="/contact-us" className={linkClassNames}>
              <div className="flex flex-row items-center justify-center">
                <div className="relative font-medium">Contact Us</div>
              </div>
            </Link>
            <Link to="/support" className={linkClassNames}>
              <div className="flex flex-row items-center justify-center">
                <div className="relative font-medium">Support</div>
              </div>
            </Link>
          </>
        )}
        {!isLoading && user && <OurStoryDropdown />}
      </div>
      <div className="flex flex-row items-start justify-start flex flex-row items-start justify-start">
        <div className="flex flex-row items-center justify-end gap-[24px] flex flex-row items-center justify-end gap-[24px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[22px] h-[22px] overflow-hidden shrink-0 cursor-pointer [border:none] p-0 bg-[transparent] relative w-[22px] h-[22px] overflow-hidden shrink-0">
            <IconSearchOutline />
          </button>
          {!isLoading && !user && (
            <button
              className="cursor-pointer [border:none] py-2 px-2.5 bg-primary-blue500 rounded-lg flex flex-row items-center justify-start cursor-pointer [border:none] py-2 px-2.5 bg-primary-blue500 rounded-lg flex flex-row items-center justify-start"
              onClick={() =>
                loginWithRedirect({
                  redirectUri: `${window.location.origin}/callback`,
                })
              }
            >
              <div className="relative text-sm font-medium font-body-xs12 text-primary-white text-left relative text-sm font-medium font-body-xs12 text-primary-white text-left">
                Get Started
              </div>
            </button>
          )}
          {!isLoading && user && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
