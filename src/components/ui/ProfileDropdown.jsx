import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { IconDropdownOutline } from './icons';

function ProfileDropdown() {
  const { user, logout } = useAuth0();
  const { name, picture } = user;

  const dropdownItems = [
    'Notifications',
    'Watchlist',
    'Cash',
    'Banks and Cards',
    'Settings',
    'Help',
    'Logout',
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative rounded-[50%] w-8 h-8 object-cover"
                    src={picture}
                  />
                  <div className="relative leading-[28px] font-medium">
                    {name}
                  </div>
                </div>
                <IconDropdownOutline className="relative w-[19px] h-[19px]" />
              </div>
            </Menu.Button>
          </div>
          {/* Code for the open dropdown */}
          <Menu.Items
            className={`absolute z-50 right-0 w-56 mt-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              open ? 'block' : 'hidden'
            }`}
          >
            <div className="px-1 py-1 ">
              {dropdownItems.map(item => (
                <Menu.Item key={item}>
                  {({ active }) =>
                    item === 'Logout' ? (
                      <button
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                        className={`${
                          active
                            ? 'bg-primaryblue-500 text-white'
                            : 'bg-white text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium font-body-small14 text-neutralgray-600`}
                      >
                        {item}
                      </button>
                    ) : (
                      <Link
                        to={`/${item.toLowerCase()}`}
                        className={`${
                          active
                            ? 'bg-primaryblue-500 text-white'
                            : 'text-gray-900'
                        } group flex rounded-md items-center px-2 py-2 text-sm font-medium font-body-small14 text-neutralgray-600 no-underline w-auto`}
                      >
                        {item}
                      </Link>
                    )
                  }
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default ProfileDropdown;
