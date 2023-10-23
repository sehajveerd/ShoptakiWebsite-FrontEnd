import React, { useState } from 'react';
// TODO : Include styles for the modal form - import * as styles from "./EmailListForm.module.scss"
import Label from '../components/Label';
import jsonp from 'jsonp';
// import NumberFormat from "react-number-format"

const EmailListForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // const [result, setResult] = useState("")

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   addToMailchimp(email)
  //     .then(data => {
  //       console.log(email)
  //       alert(data.result)
  //     })
  //     .catch(() => {})
  // }

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   const result = await addToMailchimp(email)
  // }

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = event => {
    event.preventDefault();
    const values =
      `MERGE1=${encodeURIComponent(name)}&` +
      `EMAIL=${encodeURIComponent(email)}&` +
      `PHONE=${encodeURIComponent(phone)}&` +
      `MERGE3=${encodeURIComponent(industry)}&` +
      `MERGE5=${encodeURIComponent(company)}&` +
      `MERGE6=${encodeURIComponent(message)}`;
    // `g-recaptcha-response=${encodeURIComponent(this.state["gToken"])}`

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
      } else if (err) {
        console.log(err);
        setStatus('error');
      } else if (data.result !== 'success') {
        setStatus('error.TT', data.msg);
      } else {
        setStatus('success');
      }
      console.log(status);
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
  const handleIndustryChange = event => {
    setIndustry(event.target.value);
  };

  const handleCompanyChange = event => {
    setCompany(event.currentTarget.value);
  };

  const handleMessageChange = event => {
    setMessage(event.currentTarget.value);
  };

  // if (!isOpen) return null;
  return (
    <form
      onSubmit={handleSubmit}
      className="modal w-1/2 bg-gray-50 p-4 flex flex-col shadow-sm"
      method="POST"
    >
      <div className="modal-content">
        <h2>Subscribe to my email list!</h2>
        <div className="w-full flex flex-col">
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
              value={email}
              className="p-2 border-2 border-gray-400"
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col">
            <Label
              className="text-black font-poppins text-xs"
              text="Name"
              required={false}
              htmlFor="FNAME"
            />
            <input
              placeholder="Enter your Name"
              name="name"
              type="text"
              value={name}
              className="p-2 border-2 border-gray-400"
              onChange={handleNameChange}
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
          <Label htmlFor="exampleInputEmail1">
            Email Address <span className="asterisk">*</span>
          </Label>

          <Input
            type="email"
            required
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={({ target }) =>
              this.setState({ ["email"]: target.value })
            }
          />
        </div> */}
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
            <Label htmlFor="industry" text="Industry" required={false}>
              <span className="asterisk">*</span>
            </Label>

            <select
              name="industry"
              id="mce-INDUSTRY"
              // required
              onChange={handleIndustryChange}
              className="p-2 border-2 border-gray-400"
            >
              <option value=""></option>
              <option value="Individual">Individual</option>
              <option value="Institutional">Institutional</option>
              <option value="Accredited">Accredited</option>
              <option value="Unaccredited">Unaccredited</option>
              {/* <option value="Developers">Developers</option>
              <option value="Medical">Medical</option>
              <option value="Supplychain">Supplychain</option>
              <option value="Telecommunication">Telecommunication</option>
              <option value="Other">Other</option> */}
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
            <Label htmlFor="message" text="Message" required={false}>
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

          <button className="p-2 border-2 border-gray-400 bg-red" type="submit">
            <span className="text-md text-white">Subscribe</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailListForm;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Label from '../components/Label';
// import axios from 'axios';
// import { handler } from '../add-email-subscriber';

// // interface FormValues {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// // }

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

// const SignUpForm = () => {
//   const submitForm = async (values, formik) => {
//     console.log(values);
//     const { firstName, lastName, email } = values;
//     try {
//       const payload = {
//         merge_fields: {
//           FNAME: firstName,
//           LNAME: lastName,
//         },
//         email_address: email,
//       };

//       await axios.post(handler, payload);
//       alert('Contact details added successfully.');
//       formik.resetForm();
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   return (
//     <>
//       <Formik
//         initialValues={{ firstName: '', lastName: '', email: '' }}
//         validationSchema={SignupSchema}
//         onSubmit={submitForm}
//       >
//         {formik => (
//           <Form className="w-1/2 bg-gray-50 p-4 flex flex-col shadow-sm">
//             <h2 className="text-center font-bold text-black">
//               Sign up for beta access!
//             </h2>
//             <div className="my-2 flex flex-col">
//               <Label
//                 className="text-black"
//                 text="First Name"
//                 required={true}
//                 htmlFor="firstName"
//               />
//               <Field
//                 id="firstName"
//                 className="p-2 border-2 border-gray-400"
//                 name="firstName"
//               ></Field>
//               <ErrorMessage
//                 component="div"
//                 className="text-red-700"
//                 name="firstName"
//               />
//             </div>

//             <div className="my-2 flex flex-col">
//               <Label text="Last Name" htmlFor="lastName" />
//               <Field
//                 id="lastName"
//                 className="p-2 border-2 border-gray-400"
//                 name="lastName"
//               ></Field>
//               <ErrorMessage
//                 component="div"
//                 className="text-red-700"
//                 name="lastName"
//               />
//             </div>

//             <div className="my-2 flex flex-col">
//               <Label text="Email" required={true} htmlFor="email" />
//               <Field
//                 id="email"
//                 className="p-2 border-2 border-gray-400"
//                 name="email"
//               ></Field>
//               <ErrorMessage
//                 component="div"
//                 className="text-red-700"
//                 name="email"
//               />
//             </div>
//             <button
//               disabled={!formik.isValid || !formik.dirty}
//               type="submit"
//               className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
//             >
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default SignUpForm;
