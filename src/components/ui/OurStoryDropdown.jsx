import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { IconDropdownOutline } from './icons';

function OurStoryDropdown() {
  const dropdownItems = {
    About: 'about',
    'Contact Us': 'contact-us',
    Support: 'support',
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-2.5 py-2.5 bg-white hover:bg-gray-50">
              <div className="flex flex-row items-center justify-start gap-[16px] relative text-sm font-medium font-body-small14 text-neutralgray-600 text-left hover:text-primaryblue-500">
                Our Story
                <IconDropdownOutline className="relative w-[19px] h-[19px]" />
              </div>
            </Menu.Button>
          </div>
          {/* Code for the open dropdown */}
          <Menu.Items
            className={`absolute z-50 right-0 w-full mt-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              open ? 'block' : 'hidden'
            }`}
          >
            <div className="px-1 py-1 ">
              {Object.entries(dropdownItems).map(([key, value]) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <Link
                      to={value}
                      className={`${
                        active
                          ? 'bg-primaryblue-500 text-white'
                          : 'text-gray-900'
                      } group flex rounded-md items-center px-2 py-2 text-sm font-medium font-body-small14 text-neutralgray-600 text-left no-underline w-auto`}
                    >
                      {key}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default OurStoryDropdown;
