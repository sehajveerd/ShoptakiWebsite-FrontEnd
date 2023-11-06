import React, { useState } from 'react';
import PreRegister from './preRegister';
// import { useAuth0 } from '@auth0/auth0-react';
import Slider from 'react-slick';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <img
        className="relative w-6 h-6 p-2"
        alt="Left Arrow"
        src="/landing/LeftArrow.png"
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <img
        className="relative w-6 h-6 p-2"
        alt="Right Arrow"
        src="/landing/RightArrow.png"
      />
    </div>
  );
}

const Landing = () => {
  // const { loginWithRedirect } = useAuth0();
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePreRegister = () => {
    setModalOpen(true);
  };
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <div className="relative bg-white w-full overflow-x-hidden flex flex-col items-center justify-start gap-[171px] text-left text-17xl text-dimgray-401 font-poppins">
      <div className="self-stretch bg-gray-400 flex flex-row md:flex-col xs:px-2 sm:px-5 pl-[100px] md:pl-[40px] sm:pl-[20px] md:px-[50px] sm:pl-[50px] items-center justify-between text-dimgray-300 gap-[110px]">
        <div className="flex flex-col items-start justify-start gap-[96px] w-full md:w-3/4 sm:w-1/2">
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="relative font-medium inline-block w-auto lg:text-xl md:text-lg sm:text-base">
              Earn Passive and Active Income through Crowdfunded Real Estate
              Investments
            </div>
            <div className="relative text-lg inline-block lg:text-lg md:text-base sm:text-sm">
              Experience Hassle-Free Real Estate Investing at your Fingertips.
              Manage your portfolio and join related communities
            </div>
          </div>
          <div className="flex flex-row lg:flex-col md:flex-col items-start justify-start gap-[32px]">
            <button
              className="cursor-pointer py-2 px-2.5 bg-primaryblue-500 rounded-lg flex flex-row items-center justify-start hover:shadow-[0px 1px 4px rgba(0,0,0,0.25)]"
              onClick={handlePreRegister}
            >
              <div className="relative text-sm font-semibold font-poppins text-white text-left">
                Pre-Register
              </div>
            </button>
            <button
              className="cursor-pointer p-2 bg-[transparent] rounded-lg flex flex-row items-center justify-start hover:shadow-[0px 1px 4px rgba(0,0,0,0.25)]"
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
        <div className="relative flex-grow flex-shrink-0">
          <img
            className="max-w-full h-auto object-cover ml-auto"
            alt="landing page photo"
            src="/landing/launchPhoto.png"
          />
        </div>
      </div>
      <PreRegister isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <div
        id="scrollTarget"
        className="self-stretch flex flex-col items-center justify-center py-0 xs:px-2 sm:px-5 px-[100px] gap-[100px] text-[24.57px] text-dimgray-200 font-inter"
      >
        <Slider
          {...settings}
          className="w-full h-auto flex items-center justify-center"
        >
          <div className="flex flex-col p-6 bg-white items-center justify-center">
            <div className="text-black text-center font-semibold xs:text-sm sm:text-md md:text-lg text-2xl">
              Our Mission
            </div>
            {/* "w-full text-2xl text-blue-500 leading-1.5 mb-8 inline-block
            md:max-w-[max-width-on-md] md:mt-4 md:leading-1.8 md:text-lg" */}
            <div className="text-black text-center xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto font-poppins xs:text-xs sm:text-sm md:text-sm text-lg">
              To democratize real estate investing by providing a global
              platform for individuals to participate in diverse real estate
              opportunities, obtain financial goals, and contribute to the
              growth of communities worldwide.
            </div>
          </div>

          <div className="flex flex-col p-6 bg-white items-center justify-center">
            <div className="text-black font-semibold text-center xs:text-sm sm:text-md md:text-lg text-2xl">
              Our Vision
            </div>
            <div className="text-black text-center xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto font-poppins xs:text-xs sm:text-sm md:text-sm text-lg">
              We envision a world where everyone, regardless of their location
              or financial status, can access and benefit from real estate
              investment opportunities with a click of a button. By harnessing
              the power of AI and cutting-edge technology, we aim to create an
              inclusive and transparent ecosystem that fosters collaboration,
              innovation, and sustainable growth.
            </div>
          </div>
        </Slider>
        <div className="self-stretch flex flex-col transition-all items-start justify-start gap-[96px] text-center text-13xl text-neutralgray-600 font-poppins">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] mt-20 md:items-center">
            <div className="w-[573px] flex flex-col items-end justify-start">
              <div className="self-stretch flex flex-row text-13xl sm:text-7xl-8 items-center justify-start py-14 mx-auto">
                <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                  What Sets Us Apart
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row md:flex-col sm:flex-col items-start justify-between md:items-center text-left text-base text-darkslategray-100 gap-[100px]">
              <div className="self-stretch w-[573px] md:w-3/4 sm:w-3/4 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100"
                    onMouseEnter={() => setShowContent1(true)}
                    onMouseLeave={() => setShowContent1(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-xs">
                        Diverse Portfolio
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent1
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-sm sm:3xs font-poppins">
                        <p className="m-0">
                          Drive into Sophtera vast investment landscape and
                          ecosystem. From real estate properties, cash flowing
                          businesses to infrastructure and new development
                          projects.
                        </p>
                        <ul className="m-0">
                          <li>
                            Select from multifamily units, commercial real
                            estate, startups, renewable energy initiatives,
                            urban development ventures, to crafting a diverse
                            and forward-thinking portfolio.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100"
                    onMouseEnter={() => setShowContent2(true)}
                    onMouseLeave={() => setShowContent2(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-xs">
                        Flexible Investment
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent2
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-[14px] font-poppins">
                        <p className="m-0">
                          Sophtera empowers you to dictate your investment, be
                          it active or passive investing.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Embrace an active role, by diving into
                            decision-making processes, or opt for a passive
                            stance, allowing our community of experts to manage
                            the intricacies, all tailored to your investment
                            style preferences.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100"
                    onMouseEnter={() => setShowContent3(true)}
                    onMouseLeave={() => setShowContent3(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-xs">
                        AI Driven Decisions
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent3
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-[14px] font-poppins">
                        <p className="m-0">
                          Experience the cutting edge advantage of AI-driven
                          decisions with Sophtera, transforming the way you
                          approach and strategize your investments.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Leveraging advanced AI algoirithms and underwriting
                            to pinpoint top-performing properties, minimizing
                            risks, and provide timely insights, ensuring you
                            remain at the forefront of the ever-changing
                            investment arena.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100 overflow-hidden"
                    onMouseEnter={() => setShowContent4(true)}
                    onMouseLeave={() => setShowContent4(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-xs">
                        Worldwide Access
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent4
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit break words'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-[14px] font-poppins">
                        <p className="m-0">
                          Embark on a global investment journey with Sophtera,
                          accessing untapped markets and opportunities beyond
                          borders.
                        </p>
                        <ul className="m-0 pl-[21px]">
                          <li>
                            Through our extensive platform dive deep into
                            diverse regions and countries, transcending
                            traditional geographical limitations, and
                            capitalizing on a myriad of worldwide opportunities
                            to maximize the potential and diversity of your
                            investment portfolio.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[456px] flex flex-row items-center justify-center py-6 px-10 box-border md:hidden lg:hidden">
                <img
                  className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover mt-[-100px]"
                  alt=""
                  src="/landing/launchPhoto2.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[80px] mt-[-40px] ">
            <div className="md:text-13xl max-w-[569px] flex flex-row items-center justify-center">
              <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit sm:text-5xl">
                Your Gateway to Exclusive Real Estate Opportunities
              </h1>
            </div>
            <div className="self-stretch grid grid-rows-2 grid-cols-3 lg:grid-rows-3 lg:grid-cols-2 md:grid-rows-6 md:grid-cols-1 items-start justify-between text-left sm:text-xs text-xl text-gray-400 md:flex-col">
              <div className="rounded-3xs bg-gray-200 w-[344px] lg:w-[330px] md:w-[340px] sm:w-[250px] h-[344px] lg:h-[330px] md:h-[340px] sm:h-[300px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] bg-primarywhite flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Profile Icon"
                          src="/landing/landing_investorsimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 self-stretch relative text-gray-700 font-medium font-poppins">
                      Investors
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    Build your portfolio, manage your purchases, and view your
                    profit and losses across all of your investments from our
                    convenient dashboard.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] md:w-[340px] sm:w-[250px] h-[344px] lg:h-[330px] md:h-[340px] sm:h-[300px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
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
                    Build relationships and network with other professionals.
                    Showcase your expertise to attract investors while promoting
                    your properties and raising capital on our platform.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] md:w-[340px] sm:w-[250px] h-[344px] lg:h-[330px] md:h-[340px] sm:h-[300px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
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
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] md:w-[340px] sm:w-[250px] h-[344px] lg:h-[330px] md:h-[340px] sm:h-[330px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
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
                    Showcase your projects on our platform to captivate a myriad
                    of investors, manage listings, underwrite deals, and gauge
                    potential earnings. Dive in with no upfront investment,
                    perfect for novices and experts alike.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] md:w-[340px] sm:w-[250px] h-[344px] lg:h-[330px] md:h-[340px] sm:h-[300px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
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
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] md:w-[340px] sm:w-[250px] h-[344px] lg:h-[330px] md:h-[340px] sm:h-[330px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
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
            <div className="self-stretch flex flex-row items-start justify-between text-left text-xl text-gray-400 md:flex-col"></div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-center text-13xl text-neutralgray-600 font-h1-small36">
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px]">
            <div className="self-stretch flex flex-row items-center justify-center md:text-13xl sm:text-7xl-8">
              <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                Possible Future Properties
              </h1>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 lg:grid-rows-2 lg:grid-cols-2 md:grid-rows-4 md:grid-cols-1 gap-[50px] sm:items-center sm:justify-start">
              <div className="self-stretch gap-[21px] items-center justify-center">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="UK Property"
                      src="/landing/UKpicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 8,754 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Office
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">Camden, London</p>
                      <p className="text-sm">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[21px] items-start justify-start">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="USA Property"
                      src="/landing/Calipicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> 3
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> 2
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 892 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Multifamily
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">
                        Pacific Heights, San Fransisco
                      </p>
                      <p className="text-sm">California, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[21px] items-start justify-start">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="Germany Property"
                      src="/landing/Germanypicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 7,632 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Warehouse
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">Bornheim, Frankfurt</p>
                      <p className="text-sm">Germany</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[21px] items-start justify-start">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="New Zealand Property"
                      src="/landing/NewZealandpicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 10,892 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Land
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">Mangawhai, Northland</p>
                      <p className="text-sm">New Zealand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-300 flex flex-col items-center justify-start py-14 xs:px-2 sm:px-5 px-[100px] gap-[80px] text-left text-13xl text-neutralgray-600">
        <div className="flex flex-row items-center justify-center">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit sm:text-7xl-8">
            How it Works
          </h1>
        </div>
        <div className="self-stretch flex flex-row lg:flex-col md:items-center lg:items-center items-start justify-between text-xl text-gray-400">
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
                <div className="absolute top-[-42px] left-[237.31px] text-neutralgray-100 text-105xl font-black [background:linear-gradient(180deg, #f1f1f1, rgba(32, 32, 32, 0))] opacity-[1] z-[1]">
                  1
                </div>
              </div>
              <div className="self-stretch relative text-sm text-darkslategray-200">
                Access a curated range of real estate projects, businesses, more
                complete with detailed insights like location and expected
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
                <div className="absolute top-[-42px] left-[237.31px] text-neutralgray-100 text-105xl font-black [background:linear-gradient(180deg, #f1f1f1, rgba(32, 32, 32, 0))] opacity-[1] z-[1]">
                  2
                </div>
              </div>
              <div className="self-stretch relative text-sm text-darkslategray-200">
                Decide on your investment approach, be it active or passive.
                Connect with our vibrant community, engage in discussions, and
                harness both community and AI perspectives to foster your
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
                  <h3 className="m-0 relative text-gray-700 text-[22px] font-medium font-poppins inline-block w-[190px]">
                    Smart Investment
                  </h3>
                </div>
                <div className="absolute top-[-42px] left-[237.31px] text-neutralgray-100 text-105xl font-black [background:linear-gradient(180deg, #f1f1f1, rgba(32, 32, 32, 0))] opacity-[1] z-[1]">
                  3
                </div>
              </div>
              <div className="self-stretch relative text-sm text-darkslategray-200">
                Explore smart investing to amplify and scale your portfolio.
                Choose to diversify your portfolio, plan your next financial
                move with our platforms guidance, as well as receiving regular
                updates on your investment and returns.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
        <div className="relative text-dimgray-300 text-[24.57px] font-semibold">
          Powered by:
        </div>
        <div className="h-[30px] flex flex-row items-center justify-start box-border gap-[8px]">
          <div className="relative">
            <img
              className="absolute top-[25px] left-[-120px] w-[231px] h-[62px] object-cover"
              alt="Shoptaki Logo"
              src="/landing/ShoptakiLogo.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch font-poppins">
        <footer className="self-stretch bg-gray-800 h-[50px] shrink-0 flex md:flex-row sm:flex-col items-center justify-between py-0 px-8 box-border text-left text-sm text-primarywhite">
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
