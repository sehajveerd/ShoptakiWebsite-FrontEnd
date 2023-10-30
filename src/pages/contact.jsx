import React from 'react';

const Contact = () => {
  return (
    <div className="relative rounded-xl bg-primary-white w-full h-[768px] overflow-hidden text-left text-base text-black font-label-small14sb">
      <img
        className="absolute top-[calc(50%_-_320px)] left-[64px] rounded-xl w-[554px] h-[640px] object-cover"
        alt=""
        src="/rectangle-83@2x.png"
      />
      <div className="absolute top-[165px] left-[688px] w-[547px] h-[558px] flex flex-col items-start justify-start gap-[24px]">
        <div className="relative w-[484px] h-[72px]">
          <div className="absolute top-[0px] left-[0px] w-[234px] h-[72px]">
            <div className="absolute top-[0%] left-[0%] font-medium">
              First Name
            </div>
            <div className="absolute h-[55.56%] w-full top-[44.44%] right-[0%] bottom-[0%] left-[0%] text-sm text-silver-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600" />
              <div className="absolute top-[22.5%] left-[2.94%]">Jess</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[250px] w-[234px] h-[72px]">
            <div className="absolute top-[0%] left-[0%] font-medium">
              Last Name
            </div>
            <div className="absolute h-[55.56%] w-full top-[44.44%] right-[0%] bottom-[0%] left-[0%] text-sm text-silver-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600" />
              <div className="absolute top-[22.5%] left-[2.94%]">Nadia</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[250px] w-[234px] h-[72px]">
            <div className="absolute top-[0%] left-[0%] font-medium">
              Phone Number
            </div>
            <div className="absolute h-[55.56%] w-full top-[44.44%] right-[0%] bottom-[0%] left-[0%] text-sm text-silver-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600" />
              <div className="absolute top-[22.5%] left-[2.94%]">
                Enter your number here
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[484px] h-[75px]">
          <div className="absolute top-[35px] left-[0px] w-[234px] h-10 text-sm text-silver-200">
            <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-[234px] h-10 overflow-hidden flex flex-row items-center justify-center py-2 px-3 border-[1px] border-solid border-dimgray-600">
              <div className="flex-1 relative">Enter company name</div>
            </div>
          </div>
          <div className="absolute top-[4%] left-[0%] font-medium">
            Company Name
          </div>
          <div className="absolute top-[0px] left-[250px] w-[234px] h-[72px]">
            <div className="absolute h-[44.44%] w-[94.87%] top-[0%] left-[0%] font-medium inline-block">
              Property Interest
            </div>
            <div className="absolute h-[55.56%] w-full top-[44.44%] right-[0%] bottom-[0%] left-[0%] text-sm text-silver-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600" />
              <img
                className="absolute top-[calc(50%_-_3.75px)] left-[calc(50%_+_75.25px)] rounded-lg w-[13.5px] h-[7.5px]"
                alt=""
                src="/vector.svg"
              />
              <div className="absolute h-4/5 w-[49.57%] top-[20%] left-[10.26%] inline-block">
                Residential
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[664px] left-[688px] w-[124px] h-10"
        onClick={onSubmitButtonClick}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-primary-blue500 w-[124px] h-10 flex flex-row flex-wrap items-center justify-center py-2 px-2.5 box-border cursor-pointer"
          onClick={onButtonsContainerClick}
        >
          <div className="relative text-sm font-semibold font-label-small14sb text-primary-white text-left">
            Submit
          </div>
        </div>
      </button> */}
      <div className="absolute top-[457px] left-[688px] w-[484px] h-[74px]">
        <div className="absolute top-[34px] left-[0px] rounded-lg bg-primary-white box-border w-[484px] h-10 border-[1px] border-solid border-dimgray-600" />
        <div className="absolute top-[0px] left-[0px] font-medium">Message</div>
        <div className="absolute top-[43px] left-[15px] text-sm text-silver-200">
          Enter message
        </div>
      </div>
      <div className="absolute top-[69px] left-[688px] text-29xl font-medium">{`Contact Us `}</div>
      <div className="absolute top-[558px] left-[687px] rounded-sm bg-gray-400 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] box-border w-[304px] h-[76px] text-sm font-roboto border-[1px] border-solid border-lightgray">
        <div className="absolute top-[calc(50%_-_13px)] left-[12px] flex flex-row items-center justify-start gap-[14px]">
          <div className="relative rounded-[1px] bg-primary-white box-border w-7 h-7 border-[2px] border-solid border-silver-100" />
          <div className="relative font-medium">I’m not a robot</div>
        </div>
        <div className="absolute top-[calc(50%_-_30px)] right-[12px] flex flex-col items-center justify-center gap-[4px] text-center text-[8px] text-darkgray">
          <img
            className="relative w-12 h-[46px] overflow-hidden shrink-0"
            alt=""
            src="/logo.svg"
          />
          <div className="relative font-medium">Privacy - Terms</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
