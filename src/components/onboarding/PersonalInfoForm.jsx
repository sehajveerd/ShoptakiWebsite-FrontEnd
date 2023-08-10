/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import SelectComponent from '../ui/forms/SelectComponent';

const PersonalInfoForm = ({ nextStep, skipStep }) => {
  /** TODO:
   * first fetch the Personal details
   * if current form is already filled then pre-fill the form in initialValues
   **/

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // TODO: execute the GraphQL mutation to save the Personal Details Form
    nextStep();
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    timezone: '',
    phoneNumber: '',
    dateOfBirth: '',
    isMailAddressSame: false,
  };

  // TODO: Confirm what validations are required in this forms
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
  });

  const navigate = useNavigate();

  // TODO: replace all the options with actual values
  const timezoneOptions = [
    { name: 'Option 1', value: 'option1' },
    { name: 'Option 2', value: 'option2' },
  ];

  const countryOptions = [
    { name: 'Option 1', value: 'option1' },
    { name: 'Option 2', value: 'option2' },
  ];

  const fieldClassNames =
    'absolute h-[55.56%] w-full top-[44.44%] right-[0%] bottom-[0%] left-[0%] text-sm rounded-lg bg-white box-border border-[1px] border-solid border-dimgray-800 text-sm font-label-small14sb placeholder-silver pl-3';
  const fieldLabelClassNames = 'absolute top-[0%] left-[0%] font-medium';
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <div className="relative rounded-xl bg-white w-full h-[768px] overflow-hidden text-left text-sm text-silver font-label-small14sb">
            {/* Left side image */}
            <img
              className="absolute top-[calc(50%_-_320px)] left-[64px] rounded-xl w-[554px] h-[640px] object-cover"
              alt=""
              src="/onboarding/onboarding_personal_info.jpg"
            />
            {/* Right side breadcrumb */}
            <div className="absolute top-[144px] left-[683px] flex flex-row items-center justify-center gap-[8px] text-center text-xs text-cornflowerblue">
              <div className="flex flex-row items-center justify-center gap-[8px] text-primaryblue-500">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondaryblue-50 box-border border-[1px] border-solid border-primaryblue-500" />
                    <div className="absolute top-[5%] left-[40%] font-semibold">
                      1
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-neutralgray-300" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondaryblue-50" />
                    <div className="absolute top-[5%] left-[30%] font-semibold">
                      2
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondaryblue-50" />
                    <div className="absolute top-[5%] left-[30%] font-semibold">
                      3
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondaryblue-50" />
                    <div className="absolute top-[5%] left-[30%] font-semibold">
                      4
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side form component */}
            <div className="absolute top-[196px] left-[683px] flex flex-col items-start justify-start gap-[24px] text-left text-base text-black">
              <div className="relative w-[484px] h-[72px]">
                {/* First name required input */}
                <div className="absolute top-[0px] left-[0px] w-[234px] h-[72px]">
                  <div
                    className={`${fieldLabelClassNames} ${
                      errors.firstName && touched.firstName ? 'text-error' : ''
                    }`}
                  >
                    First Name*
                  </div>
                  <Field
                    name="firstName"
                    className={`${fieldClassNames} ${
                      errors.firstName && touched.firstName
                        ? 'placeholder-error border-error text-error'
                        : ''
                    }`}
                    type="text"
                    placeholder="Enter your First Name"
                  />
                </div>
                {/* Last name required input */}
                <div className="absolute top-[0px] left-[250px] w-[234px] h-[72px]">
                  <div
                    className={`${fieldLabelClassNames} ${
                      errors.lastName && touched.lastName ? 'text-error' : ''
                    }`}
                  >
                    Last Name*
                  </div>
                  <Field
                    name="lastName"
                    className={`${fieldClassNames} ${
                      errors.lastName && touched.lastName
                        ? 'placeholder-error border-error text-error'
                        : ''
                    }`}
                    type="text"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>
              <div className="relative w-[484px] h-[72px]">
                {/* Address form input */}
                <div className="absolute top-[0px] left-[0px] w-[348px] h-[72px]">
                  <div className={`${fieldLabelClassNames}`}>Address</div>
                  <Field
                    name="address"
                    className={fieldClassNames}
                    type="text"
                    placeholder="Enter your address"
                  />
                </div>
                {/* Country select form input */}
                <div className="absolute top-[0px] left-[364px] w-[120px] h-[72px]">
                  <Field
                    name="country"
                    component={SelectComponent}
                    options={countryOptions}
                    label="Country"
                    placeholder="USA"
                    buttonSizeClasses="w-[120px] h-[55.56%]"
                    containerSizeClasses="w-[120px] h-[72px]"
                  />
                </div>
              </div>
              {/* Timezone select form input */}
              <div className="relative w-[484px] h-[72px]">
                <Field
                  name="timezone"
                  component={SelectComponent}
                  options={timezoneOptions}
                  label="Timezone"
                  placeholder="(GMT-05:00) Eastern Time"
                />
              </div>
              {/* Phone number form input */}
              <div className="relative w-[484px] h-[72px]">
                <div className="absolute top-[0px] left-[0px] w-[306px] h-[72px]">
                  <div className={`${fieldLabelClassNames}`}>Phone Number</div>
                  <Field
                    name="phoneNumber"
                    className={fieldClassNames}
                    type="text"
                    placeholder="Enter your number"
                  />
                </div>
                {/* TODO: Date of birth form input */}
                <div className="absolute top-[0px] left-[322px] w-[162px] h-[72px]">
                  <div className={`${fieldLabelClassNames}`}>Date of Birth</div>
                  <div className="absolute h-[55.56%] w-full top-[44.44%] right-[0%] bottom-[0%] left-[0%] text-sm text-silver">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white box-border border-[1px] border-solid border-dimgray-900" />
                    <img
                      className="absolute h-3/6 w-[11.11%] top-[25%] right-[9.88%] bottom-[25%] left-[79.01%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/calendar-today.svg"
                    />
                    <div className="absolute top-[22.5%] left-[6.17%]">
                      01/01/1990
                    </div>
                  </div>
                </div>
              </div>
              {/* Is Mailing address same checkbox input */}
              <div className="relative w-[212px] h-[18px] text-xs text-dimgray-200">
                <Field
                  name="isMailAddressSame"
                  type="checkbox"
                  className="m-0 absolute top-[0px] left-[0px] rounded-sm box-border w-[18px] h-[18px] overflow-hidden border-[1px] border-solid border-neutralgray-300"
                />
                <div className="absolute top-[0px] left-[24px]">
                  My Mailing address is the same
                </div>
              </div>
            </div>

            {/* Continue and Skip action buttons panel */}
            <div className="absolute top-[632px] left-[682px] w-[484px] h-10">
              <div className="absolute top-[0px] left-[0px] w-64 h-10">
                {/* Continue button to save current form details and go to Identity Finance form */}
                <button
                  className="cursor-pointer [border:none] py-2 px-2.5 bg-primaryblue-500 absolute top-[0px] left-[0px] rounded-lg w-[124px] h-10 flex flex-row flex-wrap box-border items-center justify-center"
                  disabled={isSubmitting}
                  type="submit"
                >
                  <div className="relative text-sm font-semibold font-label-small14sb text-white text-left">
                    Continue
                  </div>
                </button>
              </div>

              {/* Skip button to skip filling current form and go to Identity Finance Form */}
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[397px] w-[87px] h-[21px]"
                type="button"
                onClick={skipStep}
              >
                <div className="absolute top-[0%] left-[0%] text-sm font-semibold font-label-small14sb text-primary-black text-center">
                  Skip for now
                </div>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
