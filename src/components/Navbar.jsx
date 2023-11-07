import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PreRegister from '../pages/preRegister';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileDropdown from './ui/ProfileDropdown';
import OurStoryDropdown from './ui/OurStoryDropdown';
import { IconSearchOutline } from './ui/icons';
// import Contact from './contact.jsx';
import MobileMenu from './MobileMenu';
const Tooltip = ({ text }) => {
  return (
    <div className="relative group inline-block">
      <div className="lg:hidden invisible group-hover:visible bg-primaryblue-500 text-white text-[8px] rounded p-1 absolute top-[17px] left-1/2 w-[56px] whitespace-nowrap transform -translate-x-1/2">
        Coming Soon
      </div>
      <span className="lg:hidden group-hover:underline cursor-pointer">
        {text}
      </span>
    </div>
  );
};
const Navbar = () => {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  // const [isModalOpen, setModalOpen] = useState(false);
  // Create a state variable to manage the visibility of MobileMenu
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
  // Toggle the visibility of the MobileMenu
  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };
  // const handlePreRegister = () => {
  //   setModalOpen(true);
  // };
  const linkClassNames =
    '[text-decoration:none] flex flex-col p-2.5 items-start justify-start text-[inherit] hover:bg-gray-50 hover:text-primaryblue-500';
  return (
    <div>
      <div className="self-stretch bg-white flex flex-row py-4 xs:px-2 sm:px-5 px-[100px] items-center justify-between text-left text-sm text-neutralgray-600 font-body-small14 border-b-[1px] border-solid border-gainsboro-100">
        {/* LOGO - start */}
        {/* Make sure that the above padding is set to the all the other components on this page. */}
        <Link to="/">
          <img src="/SophteraLogo.svg" alt="Logo" />
        </Link>
        {/* LOGO - end */}
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
                  Login
                </div>
              </button>
              <OurStoryDropdown />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[22px] h-[22px] items-center shrink-0">
                <IconSearchOutline />
              </button>
            </>
          ) : (
            // PRIMARY NAVBAR - START
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
                {/* <button
                  className="cursor-pointer ml-auto [border:none] py-2 px-2.5 bg-primaryblue-500 rounded-lg"
                  style={{ marginLeft: 'auto' }}
                  onClick={() =>
                    loginWithRedirect({
                      redirectUri: `${window.location.origin}/callback`,
                    })
                  }
                >
                  <div className="relative font-medium font-poppins text-white">
                    Login
                  </div>
                </button> */}
                {/* <div className="flex-grow" />
                <button
                  className="lg:hidden cursor-pointer [border:none] py-2 px-2.5 bg-primaryblue-500 rounded-lg flex flex-row items-center justify-right hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]"
                  onClick={handlePreRegister}
                >
                  <div className="relative text-sm font-semibold font-poppins text-white text-left">
                    Pre-Register
                  </div>
                  <PreRegister
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                  />
                </button> */}
              </div>
              <div className="lg:visible invisible fixed top-0 right-0 p-4">
                <button
                  className="mobile-menu-button bg-primaryblue-500 text-white py-2 px-4 rounded"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              {/* Conditionally render the MobileMenu component based on isMobileMenuVisible */}
              {isMobileMenuVisible && <MobileMenu />}
            </>
            // PRIMARY NAVBAR - END
            // MOBILE NAVBAR MENU COMES HERE
          )}
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-end gap-[24px]">
            {!isLoading && user && <ProfileDropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
