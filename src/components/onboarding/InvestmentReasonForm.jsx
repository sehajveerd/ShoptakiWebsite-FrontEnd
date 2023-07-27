/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import {
  IconEyeOutline,
  IconEyeSlashOutline,
  IconTickCircleBold,
} from '../ui/icons';
import SelectComponent from '../ui/forms/SelectComponent';

const InvestmentReasonForm = ({ prevStep, homeStep }) => {
  /** TODO:
   * first fetch the Users Investment Reason details
   * also fetch whether the user has filled the previous Investment experience form
   * if previous form is already filled then replace the step in breadcrumb as IconTickCircleBold
   * else the previous form is skipped and replace the step in breadcrumb as IconCloseCircleBold
   * if current form is already filled then pre-fill the form in initialValues
   **/

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // TODO: execute the GraphQL mutation to save the Identity Finance Form
    homeStep();
  };

  const initialValues = {
    diverseInvestment: false,
    competitiveReturns: false,
    propertyOwnership: false,
    learn: false,
    other: false,
  };

  // TODO: Confirm what validations are required in this forms
  const validationSchema = Yup.object().shape({});

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <div className="relative rounded-xl bg-primary-white w-full h-[768px] overflow-hidden text-left text-base text-primary-black font-label-small14sb">
            {/* Left side image */}
            <img
              className="absolute top-[calc(50%_-_320px)] left-[64px] rounded-xl w-[554px] h-[640px] object-cover"
              alt=""
              src="/onboarding/onboarding_investment_reason.jpg"
            />
            {/* Right side breadcrumb and form component */}
            <div className="absolute top-[196px] left-[682px] flex flex-col items-start justify-start">
              <div className="relative w-[484px] h-[404px]">
                <div className="absolute top-[0%] left-[0%]">
                  What are the reasons you want to invest with Sophtera?
                </div>
                <div className="absolute top-[36px] left-[0px] flex flex-col items-start justify-start gap-[12px] text-sm">
                  {/* Diverse investment opportunities card with checkbox */}
                  <div className="relative w-[484px] h-16">
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                      <label className="absolute top-[12px] left-[15px] w-[453px] h-10">
                        <Field
                          id="diverseInvestment"
                          name="diverseInvestment"
                          className="cursor-pointer absolute top-[17px] left-[441px] w-3 h-3"
                          type="checkbox"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Diverse Investment Opportunities
                          </div>
                          <div className="relative text-2xs text-neutral-gray600484848">
                            Access a wide range of investment options for
                            diversifying your portfolio.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Competitive returns card with checkbox */}
                  <div className="relative w-[484px] h-16">
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                      <label className="absolute top-[12px] left-[16px] w-[452px] h-10">
                        <Field
                          id="competitiveReturns"
                          name="competitiveReturns"
                          className="cursor-pointer absolute top-[14px] left-[440px] w-3 h-3"
                          type="checkbox"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Competitive Returns
                          </div>
                          <div className="relative text-2xs text-neutral-gray600484848">
                            Earn competitive returns on your investments with
                            Sophtera.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Property ownership card with checkbox */}
                  <div className="relative w-[484px] h-16">
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                      <label className="absolute top-[12px] left-[16px] w-[452px] h-10">
                        <Field
                          id="propertyOwnership"
                          name="propertyOwnership"
                          className="cursor-pointer absolute top-[14px] left-[440px] w-3 h-3"
                          type="checkbox"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Property Ownership
                          </div>
                          <div className="relative text-2xs text-neutral-gray600484848">
                            Explore real estate ownership opportunities with
                            secure investments.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Learn card with checkbox */}
                  <div className="relative w-[484px] h-16">
                    <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                      <label className="absolute top-[12px] left-[16px] w-[452px] h-10">
                        <Field
                          id="learn"
                          name="learn"
                          className="cursor-pointer absolute top-[14px] left-[440px] w-3 h-3"
                          type="checkbox"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                          <div className="relative inline-block w-[408px]">
                            Learn
                          </div>
                          <div className="relative text-2xs text-neutral-gray600484848">
                            I want to be a real-estate investor and start with
                            Sophtera
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Other reason card with checkbox */}
                  <div className="relative w-[484px] h-16">
                    <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                      <label className="absolute top-[22px] left-[16px] w-[452px] h-[21px]">
                        <Field
                          id="other"
                          name="other"
                          className="cursor-pointer absolute top-[4px] left-[440px] w-3 h-3"
                          type="checkbox"
                        />
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                          <div className="relative inline-block w-[408px]">
                            Other
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breadcrumb steps - step 1, 2, 3 is ticked/crossed and clickable  */}
            <div className="absolute top-[144px] left-[682px] flex flex-row items-center justify-center gap-[8px] text-center text-xs text-primary-blue500">
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
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6"
                  type="button"
                  onClick={() => navigate(`/onboarding/investment-experience`)}
                >
                  {/* TODO: If investment experience step is skipped then show red cross bold icon */}
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
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-aliceblue box-border border-[1px] border-solid border-primary-blue500" />
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
              <div className="absolute top-[0px] left-[0px] w-64 h-10">
                <button
                  className="cursor-pointer [border:none] py-2 px-2.5 bg-primary-blue500 absolute top-[0px] left-[132px] rounded-lg w-[124px] h-10 flex flex-row flex-wrap box-border items-center justify-center"
                  disabled={isSubmitting}
                  type="submit"
                >
                  <div className="relative text-sm font-semibold font-label-small14sb text-primary-white text-left">
                    Continue
                  </div>
                </button>
                <button
                  className="cursor-pointer py-2 px-2.5 bg-primary-white absolute top-[0px] left-[0px] rounded-lg box-border w-[124px] h-10 flex flex-row flex-wrap items-center justify-center border-[1px] border-solid border-primary-blue500"
                  type="button"
                  onClick={prevStep}
                >
                  <div className="relative text-sm font-semibold font-label-small14sb text-primary-black text-left">
                    Go Back
                  </div>
                </button>
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[397px] w-[87px] h-[21px]"
                type="button"
                onClick={homeStep}
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

export default InvestmentReasonForm;
