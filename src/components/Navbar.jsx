import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import ProfileDropdown from './ui/ProfileDropdown';
import OurStoryDropdown from './ui/OurStoryDropdown';
import { IconSearchOutline } from './ui/icons';
// import Contact from './contact.jsx';

const Tooltip = ({ text }) => {
  return (
    <div className="relative group inline-block">
      <div className="invisible group-hover:visible bg-primarywhite text-black text-[8px] rounded p-1 absolute top-[17px] left-1/2 transform -translate-x-1/2">
        Coming Soon...
      </div>
      <span className="group-hover:underline cursor-pointer">{text}</span>
    </div>
  );
};

const Navbar = () => {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  const linkClassNames =
    '[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit] hover:bg-gray-50 hover:text-primaryblue-500';

  return (
    <div className="self-stretch bg-white flex flex-row py-4 px-[100px] items-center justify-between text-left text-sm text-neutralgray-600 font-body-small14 border-b-[1px] border-solid border-gainsboro-100">
      <Link to="/">
        <img src="/SophteraLogo.svg" alt="Logo" />
      </Link>
      <div className="flex flex-row items-start justify-between gap-[24px] text-sm">
        {user ? (
          <>
            <Link to="/portfolio" className={linkClassNames}>
              <div className="relative font-medium">Portfolio</div>
            </Link>
            <Link to="/marketplace" className={linkClassNames}>
              <div className="relative font-medium">Marketplace</div>
            </Link>
            <Link to="/learn" className={linkClassNames}>
              <div className="relative font-medium">Learn</div>
            </Link>
            <Link to="/community" className={linkClassNames}>
              <div className="relative font-medium">Community</div>
            </Link>
            <OurStoryDropdown />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[22px] h-[22px] items-center shrink-0">
              <IconSearchOutline />
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-row items-start justify-start gap-[50px]">
              <div className="relative font-medium items-center">
                <Tooltip text="Marketplace"></Tooltip>
              </div>
              <div className="relative font-medium items-center">
                <Tooltip text="About"></Tooltip>
              </div>
              <div className="relative font-medium items-center">
                <Tooltip text="Community"></Tooltip>
              </div>
              <div className="relative font-medium items-center">
                <Tooltip text="Support"></Tooltip>
              </div>
              <div className="flex-grow" />
              <button
                className="cursor-pointer ml-auto [border:none] py-2 px-2.5 bg-primaryblue-500 rounded-lg"
                style={{ marginLeft: 'auto' }}
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: `${window.location.origin}/callback`,
                  })
                }
              >
                <div className="relative font-medium font-poppins text-white">
                  Pre-Register
                </div>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-row items-start justify-start flex flex-row items-start justify-start">
        <div className="flex flex-row items-center justify-end gap-[24px]">
          {!isLoading && user && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
