import React from 'react';

const InvestmentReasonForm = ({ prevStep, homeStep }) => {
  const handleSubmit = event => {
    // handle submit, then:
    event.preventDefault();
    homeStep();
  };

  return (
    <div className="relative rounded-xl bg-primary-white w-full h-[768px] overflow-hidden text-left text-base text-primary-black font-label-small14sb">
      <img
        className="absolute top-[calc(50%_-_320px)] left-[64px] rounded-xl w-[554px] h-[640px] object-cover"
        alt=""
        src="/onboarding/onboarding_investment_reason.jpg"
      />
      <div className="absolute top-[196px] left-[682px] flex flex-col items-start justify-start">
        <div className="relative w-[484px] h-[404px]">
          <div className="absolute top-[0%] left-[0%]">
            What are the reasons you want to invest with Sophtera?
          </div>
          <div className="absolute top-[36px] left-[0px] flex flex-col items-start justify-start gap-[12px] text-sm">
            <div className="relative w-[484px] h-16">
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                <div className="absolute top-[12px] left-[15px] w-[453px] h-10">
                  <input
                    className="cursor-pointer absolute top-[17px] left-[441px] w-3 h-3"
                    type="checkbox"
                  />
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative inline-block w-[408px]">
                      Diverse Investment Opportunities
                    </div>
                    <div className="relative text-2xs text-neutral-gray600484848">
                      Access a wide range of investment options for diversifying
                      your portfolio.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[484px] h-16">
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                <div className="absolute top-[12px] left-[16px] w-[452px] h-10">
                  <input
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
                </div>
              </div>
            </div>
            <div className="relative w-[484px] h-16">
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                <div className="absolute top-[12px] left-[16px] w-[452px] h-10">
                  <input
                    className="cursor-pointer absolute top-[14px] left-[440px] w-3 h-3"
                    type="checkbox"
                  />
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative inline-block w-[408px]">
                      Property Ownership
                    </div>
                    <div className="relative text-2xs text-neutral-gray600484848">
                      Explore real estate ownership opportunities with secure
                      investments.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[484px] h-16">
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                <div className="absolute top-[12px] left-[16px] w-[452px] h-10">
                  <input
                    className="cursor-pointer absolute top-[14px] left-[440px] w-3 h-3"
                    type="checkbox"
                  />
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[2px]">
                    <div className="relative inline-block w-[408px]">Learn</div>
                    <div className="relative text-2xs text-neutral-gray600484848">
                      I want to be a real-estate investor and start with
                      Sophtera
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[484px] h-16">
              <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-[484px] h-16 overflow-hidden border-[1px] border-solid border-dimgray-800">
                <div className="absolute top-[22px] left-[16px] w-[452px] h-[21px]">
                  <input
                    className="cursor-pointer absolute top-[4px] left-[440px] w-3 h-3"
                    type="checkbox"
                  />
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="relative inline-block w-[408px]">Other</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[144px] left-[682px] flex flex-row items-center justify-center gap-[8px] text-center text-xs text-primary-blue500">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-primary-blue500" />
            <img
              className="absolute h-[37.5%] w-[52.5%] top-[31.25%] right-[21.25%] bottom-[31.25%] left-[26.25%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </button>
          <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-primary-blue500" />
            <img
              className="absolute h-[37.5%] w-[52.5%] top-[31.25%] right-[21.25%] bottom-[31.25%] left-[26.25%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </button>
          <div className="relative box-border w-[66px] h-px border-t-[1px] border-solid border-lightgray" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-primary-blue500" />
            <img
              className="absolute h-[37.5%] w-[52.5%] top-[31.25%] right-[21.25%] bottom-[31.25%] left-[26.25%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
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
      <div className="absolute top-[632px] left-[682px] w-[484px] h-10">
        <div className="absolute top-[0px] left-[0px] w-64 h-10">
          <button
            className="cursor-pointer [border:none] py-2 px-2.5 bg-primary-blue500 absolute top-[0px] left-[132px] rounded-lg w-[124px] h-10 flex flex-row flex-wrap box-border items-center justify-center"
            onClick={handleSubmit}
          >
            <div className="relative text-sm font-semibold font-label-small14sb text-primary-white text-left">
              Continue
            </div>
          </button>
          <button
            className="cursor-pointer py-2 px-2.5 bg-primary-white absolute top-[0px] left-[0px] rounded-lg box-border w-[124px] h-10 flex flex-row flex-wrap items-center justify-center border-[1px] border-solid border-primary-blue500"
            onClick={prevStep}
          >
            <div className="relative text-sm font-semibold font-label-small14sb text-primary-black text-left">
              Go Back
            </div>
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[397px] w-[87px] h-[21px]"
          onClick={homeStep}
        >
          <div className="absolute top-[0%] left-[0%] text-sm font-semibold font-label-small14sb text-primary-black text-center">
            Skip for now
          </div>
        </button>
      </div>
    </div>
  );
};

export default InvestmentReasonForm;
