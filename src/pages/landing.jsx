import React, { useState } from 'react';
import PreRegister from './preRegister';
// import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {
  // const { loginWithRedirect } = useAuth0();
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePreRegister = () => {
    setModalOpen(true);
  };
  return (
    <div className="relative bg-white w-full overflow-auto flex flex-col items-center justify-start gap-[171px] text-left text-17xl text-dimgray-401 font-poppins">
      <div className="self-stretch bg-gray-400 flex flex-row py-0 pr-0 pl-[100px] items-center justify-between text-dimgray-300">
        <div className="flex flex-col items-start justify-start gap-[96px]">
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="relative font-medium text-[31px] inline-block w-[486px]">
              Earn Passive and Active Income through Crowdfunded Real Estate
              Investments
            </div>
            <div className="relative text-[18px] inline-block w-[524px]">
              Experience Hassle-Free Real Estate Investing at Your Fingertips.
              Manage your portfolio and join related communities
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <button
              className="cursor-pointer [border:none] py-2 px-2.5 bg-primaryblue-500 rounded-lg flex flex-row items-center justify-start hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]"
              onClick={handlePreRegister}
            >
              <div className="relative text-sm font-semibold font-poppins text-white text-left">
                Pre-Register
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-2 bg-[transparent] rounded-lg flex flex-row items-center justify-start hover:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]"
              onClick={() => {
                const scrollTarget = document.getElementById('scrollTarget');
                if (scrollTarget) {
                  scrollTarget.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="relative text-sm font-medium font-poppins text-primary text-left">
                Learn More
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-[704px] h-[607px] overflow-auto shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[704px] h-[607px] object-cover"
            alt="landing page photo"
            src="/landing/launchPhoto.png"
          />
        </div>
      </div>
      <PreRegister isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <div
        id="scrollTarget"
        className="self-stretch flex flex-col items-center justify-center py-0 px-[100px] gap-[100px] text-left text-[24.57px] text-dimgray-200 font-inter"
      >
        <div className="self-stretch flex flex-row items-center justify-center gap-[24px] lg:flex-row lg:gap-[24px] lg:items-center lg:justify-between md:flex-row md:gap-[24px] md:items-center md:justify-between sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
          <div className="relative font-semibold">Powered by:</div>
          <div className="h-[30px] flex flex-row items-center justify-start py-0 px-[0.000026880787117988802px] box-border gap-[8px]">
            <div className="relative font-semibold text-inter">
              <img
                className="absolute top-[-25px] left-[0px] w-[231px] h-[50px] object-cover"
                alt="Shoptaki Logo"
                src="/landing/Logo.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col transition-all items-start justify-start gap-[96px] text-center text-13xl text-neutralgray-600 font-poppins">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] lg:flex-row lg:gap-[111px] lg:items-start lg:justify-between md:flex-col md:gap-[111px] md:items-start md:justify-start sm:flex-col sm:gap-[111px] sm:items-start sm:justify-start">
            <div className="w-[573px] flex flex-col items-end justify-start">
              <div className="self-stretch flex flex-row items-center justify-center">
                <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                  What Sets Us Apart
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between text-left text-base text-darkslategray-100 lg:flex-col lg:gap-[0px] lg:items-start lg:justify-start md:flex-col md:gap-[0px] md:items-start md:justify-start sm:flex-col sm:gap-[0px] sm:items-start sm:justify-start">
              <div className="self-stretch w-[573px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                  <div className="self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100">
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div
                        className="relative font-medium hover-trigger"
                        style={{ cursor: 'pointer' }}
                      >
                        Diverse Portfolio
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div className="self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit">
                      <div className="flex-1 relative">
                        <p className="m-0">
                          Sophterra provides investors with a personalized
                          dashboard to manage their portfolios, including
                          property investments, businesses, and other assets.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Implement AI-driven analytics to track portfolio
                            performance, cash flow, expenses, profits, and
                            generate insights to aid investment decision-making.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xs bg-primarywhite overflow-auto flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100">
                    <div className="self-stretch flex flex-row items-center justify-between lg:flex-row lg:gap-[259px] lg:items-center lg:justify-between md:flex-row md:gap-[259px] md:items-start md:justify-start sm:flex-row sm:gap-[259px] sm:items-start sm:justify-start">
                      <div className="relative font-medium">
                        Flexible Investment
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div className="self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit">
                      <div className="flex-1 relative">
                        <p className="m-0">
                          Sophterra provides investors with a personalized
                          dashboard to manage their portfolios, including
                          property investments, businesses, and other financial
                          assets.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Implement AI-driven analytics to track portfolio
                            performance, cash flow, expenses, profits, and
                            generate insights to aid investment decision-making.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xs bg-primarywhite overflow-auto flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100">
                    <div className="self-stretch flex flex-row items-center justify-between lg:flex-row lg:gap-[259px] lg:items-center lg:justify-between md:flex-row md:gap-[259px] md:items-center md:justify-between sm:flex-row sm:gap-[259px] sm:items-center sm:justify-between">
                      <div className="relative font-medium">
                        AI Driven Decisions
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div className="self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit">
                      <div className="flex-1 relative">
                        <p className="m-0">
                          Sophterra provides investors with a personalized
                          dashboard to manage their portfolios, including
                          property investments, businesses, and other financial
                          assets.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Implement AI-driven analytics to track portfolio
                            performance, cash flow, expenses, profits, and
                            generate insights to aid investment decision-making.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xs bg-primarywhite overflow-auto flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100">
                    <div className="self-stretch flex flex-row items-center justify-between lg:flex-row lg:gap-[259px] lg:items-center lg:justify-between md:flex-row md:gap-[259px] md:items-center md:justify-between sm:flex-row sm:gap-[259px] sm:items-start sm:justify-start">
                      <div className="relative font-medium">
                        Worldwide Access
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div className="self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit">
                      <div className="flex-1 relative">
                        <p className="m-0">
                          Sophterra provides investors with a personalized
                          dashboard to manage their portfolios, including
                          property investments, businesses, and other financial
                          assets.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Implement AI-driven analytics to track portfolio
                            performance, cash flow, expenses, profits, and
                            generate insights to aid investment decision-making.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[456px] flex flex-row items-center justify-center py-6 px-10 box-border lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                <img
                  className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/landing/launchPhoto2.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[80px]">
            <div className="w-[569px] flex flex-row items-center justify-center">
              <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                Your Gateway to Exclusive Real Estate Opportunities
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between text-left text-xl text-gray-400 md:flex-col">
              <div className="rounded-3xs bg-gray-200 w-[344px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Profile Icon"
                          src="/landing/landing_investorsimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 relative text-gray-700 font-medium font-poppins">
                      Investors
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    Build your portfolio, manage your purchases and view your
                    profit and losses across all of your investments from our
                    convenient new dashboard.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 w-[344px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt=""
                          src="/landing/landing_repimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 self-stretch relative text-gray-700 font-medium font-poppins">
                      Real Estate Professionals
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    You will be able to build valuable relationships with savvy
                    investors, highlight your skills and earn repeat business by
                    showcasing your expertise right on our platform.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 w-[344px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Bank icon"
                          src="/landing/landing_institutionsimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 relative text-gray-700 font-medium font-poppins">
                      Financial Institutions
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    You will be able to showcase your offerings, connect with
                    qualified borrowers, expand your customer base and build
                    rapport with our investors.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between text-left text-xl text-gray-400 md:flex-col">
              <div className="rounded-3xs bg-gray-200 w-[344px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Profile Icon"
                          src="/landing/Wholesalers.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 relative text-gray-700 font-medium font-poppins">
                      Wholesalers
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    You can create a portfolio on our platform to manage
                    listings and track potential earnings. By showcasing your
                    projects in our marketplace, you attract countless eager
                    investors, underwrite each deal and monitor earnings
                    property contracts.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 w-[344px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt=""
                          src="/landing/PropertyManagers.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 self-stretch relative text-gray-700 font-medium font-poppins">
                      Property Managers
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    As you engage, you can bid on contracts, showcase your
                    expertise on our user forum, and receive feedback to foster
                    a reputable standing among property owners and investors.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 w-[344px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Bank icon"
                          src="/landing/Contractors.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 relative text-gray-700 font-medium font-poppins">
                      Contractors
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    You will be able to bid and secure construction projects
                    right on our platform, display your craftsmanship in our
                    user forum, and garner feedback to establish a record of
                    quality and timely completion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-[100px] text-center text-13xl text-neutral-gray600 font-h1-small36">
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                Possible Future Properties
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[40px]">
              <img
                className="relative w-264 h-344.76"
                alt="Property image"
                src="/landing/London.png"
              />
              <img
                className="relative w-264 h-344.76"
                alt="Property image"
                src="/landing/Cali.png"
              />
              <img
                className="relative w-264 h-344.76"
                alt="Property image"
                src="/landing/Germany.png"
              />
              <img
                className="relative w-264 h-344.76"
                alt="Property image"
                src="/landing/NewZealand.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-300 flex flex-col items-center justify-start py-16 px-[100px] gap-[80px] text-left text-13xl text-neutralgray-600 font-label-small14sb">
        <div className="flex flex-row items-center justify-center">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit">
            How it Works
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between text-xl text-gray-400 md:flex-col">
          <div className="rounded-3xs bg-primary-white w-[344px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-start justify-start relative gap-[136px]">
                <div className="flex flex-col items-start justify-start gap-[16px] z-[0]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[11.25px] bg-primary-white flex flex-row items-start justify-start p-2">
                      <img
                        className="relative w-8 h-8"
                        alt=""
                        src="/landing/landing_investorsimage.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-gray-700 text-[20px] font-medium font-poppins inline-block w-[190px]">
                    Explore Opportunities
                  </h3>
                </div>
                <div className="absolute my-0 mx-[!important] top-[-42px] left-[237.31px] text-neutralgray-100 text-105xl font-black [background:linear-gradient(180deg, #f1f1f1, rgba(32, 32, 32, 0))] opacity-[1] z-[1]">
                  1
                </div>
              </div>
              <div className="self-stretch relative text-sm text-darkslategray-200">
                Access a curated range of real estate projects, businesses, more
                more complete with detailed insights like location and expected
                returns.
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-primary-white w-[344px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-start justify-start relative gap-[136px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] z-[0]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[11.25px] bg-primary-white flex flex-row items-start justify-start p-2">
                      <img
                        className="relative w-8 h-8"
                        alt=""
                        src="/landing/landing_repimage.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-gray-700 text-[20px] font-medium font-poppins inline-block w-[190px]">
                    Community + AI Strategy
                  </h3>
                </div>
                <div className="absolute my-0 mx-[!important] top-[-42px] left-[237.31px] text-neutralgray-100 text-105xl font-black [background:linear-gradient(180deg, #f1f1f1, rgba(32, 32, 32, 0))] opacity-[1] z-[1]">
                  2
                </div>
              </div>
              <div className="self-stretch relative text-sm text-darkslategray-200">
                Decide on your investment approach, be it active or passive.
                Connect with our vibrant community, engage in discussions, and
                and harness both community and AI perspectives o foster your
                investments success.
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-primary-white w-[344px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-start justify-start relative gap-[136px]">
                <div className="flex flex-col items-start justify-start gap-[16px] z-[0]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-[11.25px] bg-primary-white flex flex-row items-start justify-start p-2">
                      <img
                        className="relative w-8 h-8"
                        alt=""
                        src="/landing/landing_institutionsimage.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-gray-700 text-[20px] font-medium font-poppins inline-block w-[190px]">
                    Smart Investment
                  </h3>
                </div>
                <div className="absolute my-0 mx-[!important] top-[-42px] left-[237.31px] text-neutralgray-100 text-105xl font-black [background:linear-gradient(180deg, #f1f1f1, rgba(32, 32, 32, 0))] opacity-[1] z-[1]">
                  3
                </div>
              </div>
              <div className="self-stretch relative text-sm text-darkslategray-200">
                Receive regular updates on your nvestment returns. Choose to
                diversify your portfolio, or plan your ext financial move with
                your guidance. Explore smart investing to amplify your growth.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-between">
        <div className="absolute top-[3790px] left-[243px] text-black text-[15px] text-center inline-block w-[899px] font-poppins">
          To democratize real estate investing by providing a global platform
          that that that enables individuals to participate in diverse projects,
          realize financial goals, and contribute to the growth of communities
          worldwide..
        </div>
        <div className="absolute top-[3740px] left-[587px] text-black text-[32px] font-semibold">
          Our Mission
        </div>
        <div className="absolute top-[3910px] left-[243px] text-black text-[15px] text-center inline-block w-[899px] font-poppins">
          We envision a world where everyone, regardless of their location or
          financial status, can access and benefit from real estate investment
          opportunities. By harnessing the power of AI and leveraging
          cutting-edge technology, we aim to create an inclusive and transparent
          ecosystem that fosters collaboration, innovation, and sustainable
          growth.
        </div>
        <div className="absolute top-[3850px] left-[587px] text-black text-[32px] font-semibold">
          Our Vision
        </div>
      </div>
      <div className="self-stretch font-poppins">
        <footer className="self-stretch bg-gray-700 h-[50px] shrink-0 flex flex-row items-center justify-between py-0 px-8 box-border text-left text-sm text-primarywhite font-label-small14sb lg:flex-row lg:gap-[20px] lg:items-start lg:justify-start md:flex-row md:gap-[20px] md:items-start md:justify-start sm:flex-row sm:gap-[20px] sm:items-start sm:justify-start">
          <div className="relative leading-[20px] inline-block w-[204px] shrink-0">
            Copyright 2023 - Sophtera
          </div>
          <div className="relative leading-[20px] text-right">
            Investment Made Easy!
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Landing;
