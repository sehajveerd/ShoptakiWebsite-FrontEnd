import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import {
  IconEyeOutline,
  IconEyeSlashOutline,
  IconTickCircleBold,
} from '../ui/icons';
import SelectComponent from '../ui/forms/SelectComponent';

const IdentityFinanceForm = ({ nextStep, prevStep, skipStep }) => {
  /** TODO:
   * first fetch the Users Identity and Finance details
   * also fetch whether the user has filled the previous personal details form
   * if previous form is already filled then replace the step in breadcrumb as IconTickCircleBold
   * else the previous form i skipped and replace the step in breadcrumb as IconCloseCircleBold
   * if current form is already filled then pre-fill the form in initialValues
   **/

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // TODO: execute the GraphQL mutation to save the Identity Finance Form
    nextStep();
  };

  const initialValues = {
    citizenshipStatus: '',
    ssn: '',
    accountType: '',
    estimatedNetWorth: '',
  };

  // TODO: Confirm what validations are required in this forms
  const validationSchema = Yup.object().shape({
    citizenshipStatus: Yup.string().required('Citizenship Status is required'),
    ssn: Yup.string()
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/,
        'SSN is not valid. It should be in format XXX-XX-XXXX'
      )
      .required('SSN is required'),
    // accountType: Yup.string().required('Account Type is required'),
    // estimatedNetWorth: Yup.string().required('Estimated Net Worth is required'),
  });

  const navigate = useNavigate();

  const [isSSNVisible, setSSNVisible] = useState(false);
  const toggleSSNVisibility = () => setSSNVisible(!isSSNVisible);

  // TODO: replace all the options with actual values
  const citizenshipStatusOptions = [
    { name: 'Option 1', value: 'option1' },
    { name: 'Option 2', value: 'option2' },
  ];

  const accountTypeOptions = [
    { name: 'Individual - Personal Account (Most Users)', value: 'individual' },
    { name: 'Entity - LLC, Trust or Corporation', value: 'entity' },
    { name: 'Retirement - Checkbook IRA', value: 'retirement' },
  ];

  const estimatedNetWorthOptions = [
    { name: 'Under $50,000', value: 'under_50000' },
    { name: '$50,000 - $100,000', value: '50000_100000' },
    { name: '$100,001 - $200,000', value: '100001_200000' },
    { name: '$200,001 - $500,000', value: '200001_500000' },
    { name: '$500,001 - $1,000,000', value: '500001_1000000' },
    { name: '$1,000,001 - $5,000,000', value: '1000001_5000000' },
    { name: '$5,000,000+', value: 'over_5000000' },
  ];

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
              src="/onboarding/onboarding_identity_finance.jpg"
            />
            {/* Right side breadcrumb and form component */}
            <div className="absolute top-[144px] left-[682px] w-[484px] h-[400px]">
              <div className="absolute top-[52px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
                {/* Citizenship status select form component */}
                <div className="relative w-[484px] h-[69px] text-base text-black">
                  <Field
                    name="citizenshipStatus"
                    component={SelectComponent}
                    options={citizenshipStatusOptions}
                    label="Citizenship Status"
                    placeholder="Please select your status"
                    buttonBorderClasses={`${
                      errors.citizenshipStatus && touched.citizenshipStatus
                        ? 'border-[1px] border-solid border-error'
                        : 'border-[1px] border-solid border-dimgray-800'
                    }`}
                    error={
                      errors.citizenshipStatus && touched.citizenshipStatus
                    }
                  />
                </div>

                {/* SSN Number form component */}
                <div className="relative w-[484px] h-[69px]">
                  <div className="absolute top-[32px] left-[0px] w-[484px] h-[37px]">
                    <div
                      className={`absolute top-[0px] left-[0px] rounded-lg box-border w-[484px] overflow-hidden flex flex-row py-2 px-3 items-center justify-center gap-[10px] border-[1px] border-solid border-dimgray-800 ${
                        errors.ssn && touched.ssn ? 'border-error' : ''
                      }`}
                    >
                      <Field
                        name="ssn"
                        className={`flex-1 relative p-0 text-left text-sm font-label-small14sb placeholder-silver ${
                          errors.ssn && touched.ssn
                            ? 'text-error label-error placeholder-error'
                            : ''
                        }`}
                        type={isSSNVisible ? 'text' : 'password'}
                        placeholder="123-45-6789"
                      />
                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-4"
                        type="button"
                        onClick={toggleSSNVisibility}
                      >
                        {isSSNVisible ? (
                          <IconEyeSlashOutline
                            width="24"
                            height="22"
                            outlineColor="#C2C2C2"
                          />
                        ) : (
                          <IconEyeOutline
                            width="24"
                            height="22"
                            outlineColor="#C2C2C2"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`absolute w-[61.59%] top-[0%] left-[0%] text-base font-medium text-black inline-block ${
                      errors.ssn && touched.ssn ? 'text-error' : ''
                    }`}
                  >
                    SSN Number
                  </div>
                </div>

                {/* Choose your account type form component */}
                <div className="relative w-[484px] h-[69px] text-base text-black">
                  <Field
                    name="accountType"
                    component={SelectComponent}
                    options={accountTypeOptions}
                    label="Choose your account type"
                    placeholder="Please select your account type"
                  />
                </div>

                {/* What is your estimated net worth for component  */}
                <div className="relative w-[484px] h-[69px] text-base text-black">
                  <Field
                    name="estimatedNetWorth"
                    component={SelectComponent}
                    options={estimatedNetWorthOptions}
                    label="What is your estimated net worth?"
                    placeholder="Please select your estimated net worth"
                  />
                </div>
              </div>

              {/* Breadcrumb steps - only step 1 is ticked/crossed and clickable  */}
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-center gap-[8px] text-center text-xs text-cornflowerblue">
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6"
                    type="button"
                    onClick={() => navigate(`/onboarding/personal-info`)}
                  >
                    {/* TODO: If personal details step is skipped then show red cross bold icon */}
                    <IconTickCircleBold
                      className="absolute top-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      height="24"
                      outlineColor="#0d65b6"
                    />
                  </button>
                  <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px] text-primaryblue-500">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondaryblue-50 box-border border-[1px] border-solid border-primaryblue-500" />
                      <div className="absolute top-[5%] left-[35%] font-semibold">
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
                  <div className="relative box-border w-[66px] h-px hidden border-t-[1px] border-solid border-lightgray" />
                </div>
              </div>
            </div>

            {/* Continue, Go back and Skip action buttons panel */}
            <div className="absolute top-[632px] left-[682px] w-[484px] h-10">
              <div className="absolute top-[0px] left-[0px] w-64 h-10">
                {/* Continue button to save current form details and go to Investment experience form */}
                <button
                  className="cursor-pointer [border:none] py-2 px-2.5 bg-primaryblue-500 absolute top-[0px] left-[132px] rounded-lg w-[124px] h-10 flex flex-row flex-wrap box-border items-center justify-center"
                  disabled={isSubmitting}
                  type="submit"
                >
                  <div className="relative text-sm font-semibold font-label-small14sb text-white text-left">
                    Continue
                  </div>
                </button>

                {/* Go back button to go back to Personal details form */}
                <button
                  className="cursor-pointer py-2 px-2.5 bg-white absolute top-[0px] left-[0px] rounded-lg box-border w-[124px] h-10 flex flex-row flex-wrap items-center justify-center border-[1px] border-solid border-primaryblue-500"
                  type="button"
                  onClick={prevStep}
                >
                  <div className="relative text-sm font-semibold font-label-small14sb text-primary-black text-left">
                    Go Back
                  </div>
                </button>
              </div>

              {/* Skip button to skip filling current form and go to Investment Experience Form */}
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

export default IdentityFinanceForm;
