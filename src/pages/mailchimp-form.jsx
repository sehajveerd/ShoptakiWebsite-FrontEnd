import React, { useState } from 'react';
import Label from '../components/Label';
import jsonp from 'jsonp';
// import { PhoneInput } from 'react-international-phone';
// import 'react-international-phone/style.css';

import { MuiTelInput } from 'mui-tel-input';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';

const EmailListForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [investor, setInvestor] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [selectedChoices, setSelectedChoices] = useState([]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = event => {
    event.preventDefault();
    const values =
      `FNAME=${encodeURIComponent(name)}&` +
      `EMAIL=${encodeURIComponent(email)}&` +
      `PHONE=${encodeURIComponent(phone)}&` +
      `USER=${encodeURIComponent(investor)}&` +
      `COMPANY=${encodeURIComponent(company)}&` +
      `MESSAGE=${encodeURIComponent(message)}&` +
      (selectedChoices.includes('Residential') ? `group[2194][1]=true&` : '') +
      (selectedChoices.includes('Commercial') ? `group[2194][2]=true&` : '') +
      (selectedChoices.includes('Land') ? `group[2194][4]=true&` : '') +
      (selectedChoices.includes('Industrial') ? `group[2194][8]=true&` : '') +
      (selectedChoices.includes('Other') ? `group[2194][16]=true` : '');
    const path = `${process.env.REACT_APP_MAILCHIMP_URL}&${values}`;

    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_.\-+])+@([\w-]+\.)+([\w]{2,10})+$/;
    const emailAddress = email;
    !regex.test(emailAddress) ? setStatus('empty') : sendData(url);
    if (onSubmit) {
      onSubmit();
    }
  };

  const sendData = url => {
    setStatus('sending');

    jsonp(url, { param: 'c' }, (err, data) => {
      if (data.msg.includes('already subscribed')) {
        setStatus('duplicate');
        alert(data.msg, status);
      } else if (err) {
        // console.log(err);
        setStatus('error');
      } else if (data.result !== 'success') {
        setStatus('error', data.msg);
      } else {
        setStatus('success');
      }
      // console.log(status);
    });
  };

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handlePhoneChange = value => {
    setPhone(value);
  };

  // Handle changes to the select element
  const handleInvestorChange = event => {
    setInvestor(event.target.value);
  };

  const handleCompanyChange = event => {
    setCompany(event.currentTarget.value);
  };

  const handleMessageChange = event => {
    setMessage(event.currentTarget.value);
  };

  const handleCheckboxChange = e => {
    const value = e.target.value;
    if (e.target.checked) {
      // Checkbox is checked, add it to the selected choices
      setSelectedChoices(prevSelected => [...prevSelected, value]);
    } else {
      // Checkbox is unchecked, remove it from the selected choices
      setSelectedChoices(prevSelected =>
        prevSelected.filter(choice => choice !== value)
      );
    }
  };

  // useEffect(() => {
  //   console.log('Selected Choices:', selectedChoices.join(', '));
  //   console.log('Investor Type: ', investor);
  // }, [selectedChoices]);

  // if (!isOpen) return null;
  return (
    <form
      onSubmit={handleSubmit}
      className="h-[600px] w-[600px] md:w-[350px] sm:w-[250px] xs:w-full md:h-[400px] sm:h-[350px] xs:w-full bg-gray-50 p-4 flex flex-col shadow-sm text-md xs:text-xs sm:text-sm md:text-xl lg:text-4xl"
      method="POST"
    >
      <div className="overflow-auto">
        <h2 className="text-[25px] text-primaryblue-500">
          Sign up for future beta access
        </h2>
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <Label text="Name" required={true} htmlFor="FNAME" />
            <input
              placeholder="Enter your Name"
              name="name"
              type="text"
              required
              value={name}
              className="p-2 border-2 border-gray-400"
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col">
            <Label text="Email Address" required={true} htmlFor="EMAIL" />
            <input
              placeholder="Email address"
              name="email"
              type="email"
              required
              value={email}
              className="p-2 border-2 border-gray-400"
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="PHONE" required={true} text="Phone Number">
              <span className="asterisk">*</span>
            </Label>
            <MuiTelInput
              focusOnSelectCountry
              defaultCountry="US"
              value={phone}
              onChange={handlePhoneChange}
            />
            {/* <PhoneInput
              defaultcountry={'us'}
              placeholder="Enter your phone number"
              value={phone}
              onChange={value => handlePhoneChange(value)}
            /> */}

            {/* <InputMask
              mask="+99-999-999-9999" // Adjust the format as needed for your region
              maskChar="_"
              className="p-2 border-2 border-gray-400"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            /> */}
          </div>

          <div className="flex flex-col">
            <Label htmlFor="investor" text="Type of Investor" required={true}>
              <span className="asterisk">*</span>
            </Label>

            <select
              name="investor"
              className="p-2 border-2 border-gray-400"
              required
              onChange={handleInvestorChange}
            >
              <option value="Select type of Investor">
                Select type of Investor
              </option>
              <option value="Individual">Individual</option>
              <option value="Institutional">Institutional</option>
              <option value="Accredited">Accredited</option>
              <option value="Unaccredited">Unaccredited</option>
            </select>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="company" text="Company" required={false}>
              <span className="asterisk">*</span>
            </Label>
            <input
              type="text"
              aria-describedby="companyName"
              value={company}
              onChange={handleCompanyChange}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="message" text="Message for Us" required={false}>
              <span className="asterisk">*</span>
            </Label>
            <textarea
              rows="6"
              className="p-2 border-2 border-gray-400"
              value={message}
              onChange={handleMessageChange}
            />
          </div>

          <div className="flex flex-col text-black text-sm">
            <Label
              htmlFor="mce-group[2194]-2194-0"
              text="Type of Property Interested"
              required={false}
            ></Label>
            <label
              className="inline-flex items-center"
              htmlFor='"mce-group[2194]-2194-0"'
            >
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="group[2194][1]"
                id="mce-group[2194]-2194-0"
                value="Residential"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Residential</span>
            </label>
            <label
              className="inline-flex items-center"
              htmlFor="mce-group[2194]-2194-1"
            >
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="group[2194][2]"
                id="mce-group[2194]-2194-1"
                value="Commercial"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Commercial</span>
            </label>
            <label
              className="inline-flex items-center"
              htmlFor='"mce-group[2194]-2194-2"'
            >
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="group[2194][4]"
                id="mce-group[2194]-2194-2"
                value="Land"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Land</span>
            </label>
            <label
              className="inline-flex items-center"
              htmlFor='"mce-group[2194]-2194-3"'
            >
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="group[2194][8]"
                id="mce-group[2194]-2194-3"
                value="Industrial"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Industrial</span>
            </label>
            <label
              className="inline-flex items-center"
              htmlFor='"mce-group[2194]-2194-4"'
            >
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="group[2194][16]"
                id="mce-group[2194]-2194-4"
                value="Other"
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          <button className="p-2 mx-10 rounded-2xs bg-blue-500" type="submit">
            <span className="text-md text-white">Submit</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailListForm;
