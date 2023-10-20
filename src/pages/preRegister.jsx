import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const PreRegister = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneValue, setPhoneValue] = useState();

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {!isSubmitted ? (
          <div>
            <div className="flex flex-col gap-[15px]">
              <div className="modal-header text-[25px] text-primaryblue-500">
                <h3>Sign up for future beta access</h3>
              </div>
              <div className="flex flex-row items-left gap-[20px]">
                <div className="relative text-[15px] text-black">
                  <span>
                    Name <span className="text-red">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="border rounded px-3 py-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out hover:border-gray-500"
                />
                <div className="relative text-[15px] text-black">
                  <span>
                    Type of User <span className="text-red">*</span>
                  </span>
                </div>
                <select>
                  <option value="">Select Type of User</option>
                  <option>Individual</option>
                  <option>Accredited</option>
                  <option>Unaccredited</option>
                  <option>Investors</option>
                  <option>Wholesalers</option>
                  <option>Financial Institutions</option>
                  <option>Real Estate Professionals</option>
                  <option>Property Managers</option>
                  <option>Contractors</option>
                </select>
              </div>
              <div className="flex flex-row items-left gap-[20px]">
                <div className="relative text-[15px] text-black">
                  <span>
                    Email <span className="text-red">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border rounded px-3 py-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out hover:border-gray-500"
                />
                <div className="relative text-[15px] text-black">
                  <span>
                    Type of Property <span className="text-red">*</span>
                  </span>
                </div>
                <select>
                  <option value="">Select Type of Property</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Land</option>
                  <option>Industrial</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="relative text-[15px] text-black">
                <span>
                  Phone Number <span className="text-red">*</span>
                </span>
              </div>
              <div className="flex flex-row items-left gap-[20px]">
                <PhoneInput
                  className="border rounded px-3 py-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out hover:border-gray-500"
                  placeholder="Enter phone number"
                  value={phoneValue}
                  onChange={setPhoneValue}
                  defaultCountry="US"
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={handleSubmit}
                  className="w-32 h-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center relative text-primaryblue-500 font-bold text-[20px]">
            <p>Thank you for your interest!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreRegister;
