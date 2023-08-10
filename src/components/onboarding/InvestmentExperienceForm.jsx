import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { IconTickCircleBold } from '../ui/icons';
import SelectComponent from '../ui/forms/SelectComponent';

const InvestmentExperienceForm = ({ nextStep, prevStep, skipStep }) => {
  /** TODO:
   * first fetch the Users Investment experience details
   * also fetch whether the user has filled the previous Identity and Finance form
   * if previous form is already filled then replace the step in breadcrumb as IconTickCircleBold
   * else the previous form i skipped and replace the step in breadcrumb as IconCloseCircleBold
   * if current form is already filled then pre-fill the form in initialValues
   **/

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // TODO: execute the GraphQL mutation to save the Investment Experience Form
    nextStep();
  };

  const initialValues = {
    hasInvestedBefore: '',
    investmentExperienceLevel: '',
  };

  // TODO: Confirm what validations are required in this forms
  const validationSchema = Yup.object().shape({
    hasInvestedBefore: Yup.string().required(
      'This field is required. Please select an option.'
    ),
    // investmentExperienceLevel: Yup.string().required('Investment experience level is required'),
  });

  const navigate = useNavigate();

  // TODO: replace all the options with actual values
  const hasInvestedBeforeOptions = [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <div className="relative rounded-xl bg-white w-full h-[768px] overflow-hidden text-left text-base text-black font-poppins">
            {/* Left side image */}
            <img
              className="absolute top-[calc(50%_-_320px)] left-[64px] rounded-xl w-[554px] h-[640px] object-cover"
              alt=""
              src="/onboarding/onboarding_investment_experience.jpg"
            />
            {/* Right side breadcrumb and form component */}
            <div className="absolute top-[196px] left-[682px] flex flex-col items-start justify-start gap-[24px]">
              <div className="relative w-[484px] h-[61px]">
                {/* Have you invested before Select form component */}
                <Field
                  name="hasInvestedBefore"
                  component={SelectComponent}
                  options={hasInvestedBeforeOptions}
                  label="Have you invested in Real Estate before?"
                  placeholder="Please select your status"
                  buttonBorderClasses={`${
                    errors.hasInvestedBefore && touched.hasInvestedBefore
                      ? 'border-[1px] border-solid border-error'
                      : 'border-[1px] border-solid border-dimgray-401'
                  }`}
                  error={errors.hasInvestedBefore && touched.hasInvestedBefore}
                />
              </div>
              {/* Investment experience level radio button options */}
              <div className="relative w-[484px] h-[252px]">
                <div className="absolute top-[0%] left-[0%] font-medium">
                  What is your level of Financial Investment Experience?
                </div>
                <div className="absolute top-[36px] left-[0px] flex flex-col items-start justify-start gap-[12px] text-sm text-primary-black">
                  {/* Beginner card with radio button */}
                  <div className="relative w-[484px] h-16">
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-401">
                      <label className="absolute top-[calc(50%_-_20px)] left-[12px] w-[456px] h-10">
                        <Field
                          name="investmentExperienceLevel"
                          value="beginner"
                          className="cursor-pointer absolute top-[calc(50%_-_7px)] left-[442px] w-3.5 h-3.5"
                          type="radio"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Beginner
                          </div>
                          <div className="relative text-2xs text-neutralgray-600 inline-block w-[427px]">
                            {
                              "I'm new to investing or have limited experience in financial ventures."
                            }
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="relative w-[484px] h-16">
                    {/* Proficient card with radio button */}
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-401">
                      <label className="absolute top-[calc(50%_-_20px)] left-[12px] w-[456px] h-10">
                        <Field
                          name="investmentExperienceLevel"
                          value="proficient"
                          className="cursor-pointer absolute top-[calc(50%_-_7px)] left-[442px] w-3.5 h-3.5"
                          type="radio"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Proficient
                          </div>
                          <div className="relative text-2xs text-neutralgray-600">
                            I have some investment knowledge and prior
                            experience in financial markets.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="relative w-[484px] h-16">
                    {/* Expert card with radio button */}
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-401">
                      <label className="absolute top-[calc(50%_-_21px)] left-[14px] w-[454px] h-10">
                        <Field
                          name="investmentExperienceLevel"
                          value="expert"
                          className="cursor-pointer absolute top-[calc(50%_-_7px)] left-[440px] w-3.5 h-3.5"
                          type="radio"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Expert
                          </div>
                          <div className="relative text-2xs text-neutralgray-600">
                            I’m a financial investment expert with extensive
                            experience and knowledge.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breadcrumb steps - only step 1 and step is ticked/crossed and clickable  */}
            <div className="absolute top-[144px] left-[682px] flex flex-row items-center justify-center gap-[8px] text-center text-xs text-primaryblue-500">
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
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6"
                  type="button"
                  onClick={() => navigate(`/onboarding/identity-finance`)}
                >
                  {/* TODO: If identity and finance step is skipped then show red cross bold icon */}
                  <IconTickCircleBold
                    className="absolute top-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    height="24"
                    outlineColor="#0d65b6"
                  />
                </button>
                <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-secondaryblue-50 box-border border-[1px] border-solid border-primaryblue-500" />
                    <div className="absolute top-[5%] left-[30%] font-semibold">
                      3
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-cornflowerblue">
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

            {/* Continue, Go back and Skip action buttons panel */}
            <div className="absolute top-[632px] left-[682px] w-[484px] h-10">
              <div className="absolute top-[0px] left-[0px] w-64 h-10 cursor-pointer">
                {/* Continue button to save current form details and go to Investment reason form */}
                <button
                  className="cursor-pointer [border:none] py-2 px-2.5 bg-primaryblue-500 absolute top-[0px] left-[132px] rounded-lg w-[124px] h-10 flex flex-row flex-wrap box-border items-center justify-center"
                  disabled={isSubmitting}
                  type="submit"
                >
                  <div className="relative text-sm font-semibold font-poppins text-white text-left">
                    Continue
                  </div>
                </button>

                {/* Go back button to go back to Identity and Finance form */}
                <button
                  className="cursor-pointer py-2 px-2.5 bg-white absolute top-[0px] left-[0px] rounded-lg box-border w-[124px] h-10 flex flex-row flex-wrap items-center justify-center border-[1px] border-solid border-primaryblue-500"
                  type="button"
                  onClick={prevStep}
                >
                  <div className="relative text-sm font-semibold font-poppins text-primary-black text-left">
                    Go Back
                  </div>
                </button>
              </div>

              {/* Skip button to skip filling current form and go to Investment reason form */}
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[397px] w-[87px] h-[21px]"
                type="button"
                onClick={skipStep}
              >
                <div className="absolute top-[0%] left-[0%] text-sm font-semibold font-poppins text-primary-black text-center">
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

export default InvestmentExperienceForm;
