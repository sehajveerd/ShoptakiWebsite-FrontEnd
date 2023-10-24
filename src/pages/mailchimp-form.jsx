import React, { useState, useEffect } from 'react';
// TODO : Include styles for the modal form - import * as styles from "./EmailListForm.module.scss"
import Label from '../components/Label';
import jsonp from 'jsonp';
// import NumberFormat from "react-number-format"

const EmailListForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [investor, setInvestor] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [selectedChoices, setSelectedChoices] = useState([]);

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = event => {
    event.preventDefault();
    // const selectedPropertyTypes = [
    //   'Residential',
    //   'Commercial',
    //   'Land',
    //   'Industrial',
    //   'Other',
    // ];
    // const tagIndices = [1, 2, 4, 8, 16];

    // const propertyTypeParams = selectedPropertyTypes
    //   .filter(type => selectedChoices.includes(type))
    //   .map(
    //     type =>
    //       `group[2194][${
    //         selectedPropertyTypes.indexOf(type) + 1
    //       }]=${encodeURIComponent(type)}`
    //   )
    //   .join('&');

    // const propertyTypeParams = selectedPropertyTypes
    //   .filter(type => selectedChoices.includes(type))
    //   .map(
    //     index =>
    //       `group[2194][${index}]=${encodeURIComponent(
    //         selectedPropertyTypes[tagIndices.indexOf(index)]
    //       )}`
    //   )
    //   .join('&');const selectedPropertyTypes = ['Residential', 'Commercial', 'Land', 'Industrial', 'Other'];
    // const tagIndices = [1, 2, 4, 8, 16];

    // `group[2194][1]=${encodeURIComponent(
    //   selectedChoices.includes('Residential') ? 'Residential' : ''
    // )}&`;

    // IMPORTANT/////////////////////////////////////////////////////
    // const propertyTypeParams = tagIndices
    //   .filter(index =>
    //     selectedChoices.includes(
    //       selectedPropertyTypes[tagIndices.indexOf(index)]
    //     )
    //   )
    //   .map(
    //     index =>
    //       `group[2194][${
    //         selectedPropertyTypes[tagIndices.indexOf(index)]
    //       }[${index}]=${encodeURIComponent(
    //         selectedPropertyTypes[tagIndices.indexOf(index)]
    //       )}`
    //   )
    //   .join('&');

    // const values =
    //   `FNAME=${encodeURIComponent(name)}&` +
    //   `EMAIL=${encodeURIComponent(email)}&` +
    //   `PHONE=${encodeURIComponent(phone)}&` +
    //   `USER=${encodeURIComponent(investor)}&` +
    //   `COMPANY=${encodeURIComponent(company)}&` +
    //   `QUESTION=${encodeURIComponent(question)}&` +
    //   propertyTypeParams;

    // // The rest of your code...

    console.log('CHECKING SELECTED CHOICES: ', selectedChoices);
    const values =
      `FNAME=${encodeURIComponent(name)}&` +
      `EMAIL=${encodeURIComponent(email)}&` +
      `PHONE=${encodeURIComponent(phone)}&` +
      `USER=${encodeURIComponent(investor)}&` +
      `COMPANY=${encodeURIComponent(company)}&` +
      `MESSAGE=${encodeURIComponent(message)}&` +
      (selectedChoices.includes('Residential') ? `group[2194][1]=&` : '') +
      (selectedChoices.includes('Commercial') ? `group[2194][2]=&` : '') +
      (selectedChoices.includes('Land') ? `group[2194][4]=&` : '') +
      (selectedChoices.includes('Industrial') ? `group[2194][8]=&` : '') +
      (selectedChoices.includes('Other') ? `group[2194][16]=` : '');
    // `${
    //   (selectedChoices.includes(`Residential`)
    //     ? encodeURIComponent(`group[2194][1]`)`&`
    //     : ``) +
    //   (selectedChoices.includes(`Commercial`)
    //     ? encodeURIComponent(`group[2194][2]`)`&`
    //     : ``) +
    //   (selectedChoices.includes(`Land`)
    //     ? encodeURIComponent(`group[2194][4]`)`&`
    //     : ``) +
    //   (selectedChoices.includes(`Industrial`)
    //     ? encodeURIComponent(`group[2194][8]`)`&`
    //     : ``) +
    //   (selectedChoices.includes(`Other`)
    //     ? encodeURIComponent(`group[2194][16]`)
    //     : ``)
    // }`;
    // can we use an if-else/switch to assign the value to corresponding group index using a filter on selectedchoice or similar
    // `group[2194][1]=${encodeURIComponent(
    //   selectedChoices.includes('Residential') ? 'Residential' : ''
    // )}&` +
    // `group[2194][2]=${encodeURIComponent(
    //   selectedChoices.includes('Commercial') ? 'Commercial' : ''
    // )}&` +
    // `group[2194][4]=${encodeURIComponent(
    //   selectedChoices.includes('Land') ? 'Land' : ''
    // )}&` +
    // `group[2194][8]=${encodeURIComponent(
    //   selectedChoices.includes('Industrial') ? 'Industrial' : ''
    // )}&` +
    // `group[2194][16]=${encodeURIComponent(
    //   selectedChoices.includes('Other') ? 'Other' : ''
    // )}`;

    // `g-recaptcha-response=${encodeURIComponent(this.state['gToken'])}`;
    console.log('RESULT: ', values);
    const path = `${`https://imperiallc.us21.list-manage.com/subscribe/post?u=8a3b8f6d93de5e01fc3fe387b&amp;id=f85ccfcfeb&amp;f_id=00e8eae6f0`}&${values}`;

    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_.\-+])+@([\w-]+\.)+([\w]{2,10})+$/;
    const emailAddress = email;
    !regex.test(emailAddress) ? setStatus('empty') : sendData(url);
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

  const handlePhoneChange = event => {
    setPhone(event.currentTarget.value);
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
      // console.log(
      //   'EVENT TARGET VALUE: ',
      //   e.target.value,
      //   ' & ',
      //   e.target.checked
      // );
      // console.log('TESING FOR MAILCHIMP');
      // console.log('LIST SO FAR: ', selectedChoices);
      // console.log(selectedChoices.join(', '));
      // console.log(investor);
    } else {
      // Checkbox is unchecked, remove it from the selected choices
      setSelectedChoices(prevSelected =>
        prevSelected.filter(choice => choice !== value)
      );
      // console.log(
      //   'EVENT TARGET VALUE: ',
      //   e.target.value,
      //   ' & ',
      //   e.target.checked
      // );
      // console.log('TESING FOR MAILCHIMP');
      // console.log(selectedChoices.join(', '));
      // console.log(investor);
    }
  };

  useEffect(() => {
    console.log('Selected Choices:', selectedChoices.join(', '));
    console.log('Investor Type: ', investor);
  }, [selectedChoices]);

  // if (!isOpen) return null;
  return (
    <form
      onSubmit={handleSubmit}
      className="h-[600px] bg-gray-50 p-4 flex flex-col shadow-sm z-500"
      method="POST"
    >
      <div className="overflow-auto">
        <h2>Sign up for future beta access</h2>
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <Label
              className="text-black font-poppins text-xs"
              text="Name"
              required={true}
              htmlFor="FNAME"
            />
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
            <Label
              className="text-black"
              text="Email Address"
              required={true}
              htmlFor="EMAIL"
            />
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
            <Label
              htmlFor="PHONE"
              required={true}
              className="text-black"
              text="Phone Number"
            >
              <span className="asterisk">*</span>
            </Label>

            <input
              type="text"
              required
              value={phone}
              onChange={handlePhoneChange}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          {/* <div>
            <Label htmlFor="phone">
              Phone Number <span className="asterisk">*</span>
            </Label>

            <NumberFormat
              className="phone"
              format="+## (###) ###-####"
              mask="_"
              required
              value={phone}
              onValueChange={values => {
                const { formattedValue, value } = values
                this.setState({ phone: formattedValue })
              }}
            />
          </div> */}

          <div className="flex flex-col">
            <Label htmlFor="investor" text="Type of Investor" required={true}>
              <span className="asterisk">*</span>
            </Label>

            <select
              name="investor"
              required
              onChange={handleInvestorChange}
              className="p-2 border-2 border-gray-400"
            >
              <option value=""></option>
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
              // required
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
            <input
              rows="10"
              // required
              value={message}
              onChange={handleMessageChange}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="mce-group[2194]-2194-0"
              className="inline-flex items-center"
              text="Type of Property Interested"
              required={false}
            ></Label>
            {/* <h2>Type of Property Interested:</h2> */}
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
          <button className="p-2 border-2 border-gray-400 bg-red" type="submit">
            <span className="text-md text-white">Subscribe</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailListForm;
