import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PropertyDetailsTextComp from '../components/ui/propertydetails/PropertyDetailsTextComp';
import LinearProgress from '@mui/material/CircularProgress';
import CustomTabPanel from '../components/MetricsTabs';
// import Slider from 'react-slick';

// import { useNavigate } from 'react-router-dom';

const Listingproperty = () => {
  const { zpid } = useParams();
  const navigate = useNavigate();
  const GET_IMG_URL = gql`
    query GetPropertyImagesBySizeFormat($filters: ImgFilterInput) {
      getPropertyImagesBySizeFormat(filters: $filters) {
        id
        zpid
        imageURL
      }
    }
  `;

  const GET_PROPERTY_DETAILS = gql`
    query GetPropertyByZpid($zpid: Int) {
      getPropertyByZpid(zpid: $zpid) {
        id
        zpid
        bed
        bath
        livingArea
        homeType
        homeStatus
        description
        latitude
        longitude
      }
    }
  `;

  // getting all the imageURIs for a particular property
  // const { data } = useQuery(GET_IMG_URL, {
  //   variables: {
  //     zpid: parseInt(zpid),
  //   },
  // });
  // // const navigate = useNavigate();

  // // const handleNavigate = () => {
  // //   // Use navigate to navigate to the desired route
  // //   navigate('/listingpage');
  // // };
  // console.log('First Image URI: ', data.getPropertyImages[0]);
  // return <h1>This is listing page.</h1>;

  // Use the useQuery hook to execute the query
  const { data, loading, error } = useQuery(GET_IMG_URL, {
    variables: { filters: { zpid: zpid, size: 384, format: 'webp' } }, // Convert zpid to an integer if needed
  });

  const {
    data: details,
    loading: details_loading,
    error: details_error,
  } = useQuery(GET_PROPERTY_DETAILS, {
    variables: { zpid: parseInt(zpid) }, // Convert zpid to an integer if needed
  });

  if (loading) {
    return <LinearProgress className="mt-1000" />;
  }

  if (error) {
    console.error('Error fetching property images:', error);
    return <p>Error loading property images.</p>;
  }

  // Access the data and render your component
  // if (data) {
  const propertyImages = data.getPropertyImagesBySizeFormat;

  // Divide propertyImages into groups of 5
  const imageGroups = [];
  for (let i = 0; i < propertyImages.length; i += 5) {
    imageGroups.push(propertyImages.slice(i, i + 5));
  }

  // First imageGroup of 5 images
  const firstImageGroup = [];
  firstImageGroup.push(
    propertyImages.slice(
      0,
      propertyImages.length <= 5 ? propertyImages.length : 5
    )
  );

  const restImageGroups = [];
  // Rest of the images need to be rendered as 8 images per slide
  if (propertyImages.length > 5) {
    for (let i = 5; i < propertyImages.length; i += 8) {
      restImageGroups.push(
        propertyImages.slice(
          i,
          i + 8 < propertyImages.length ? i + 8 : propertyImages.length
        )
      );
    }
  }

  // console.log('IMAGE DATA ', propertyImages);
  // console.log('First Group of Images: ', firstImageGroup[0]);
  // console.log('Rest Images: ', restImageGroups);
  // restImageGroups.forEach(group => console.log('Heres the group: ', group));
  // console.log('IMAGE GROUPS', imageGroups[0][0].id);
  // }

  // console.log('Cross checking zpid value: ', typeof Number(zpid));

  if (details_loading) {
    console.log('STILL LOADING');
    return <p> LOADING</p>;
  }

  if (details_error) {
    console.error('Error fetching property images:', details_error);
    return <p>Error loading property details.</p>;
  }

  // console.log('DETAILS:    ', details);

  details
    ? console.log('Property Details : ', details['getPropertyByZpid'][0])
    : console.log('NO DATA FOUND');

  const property_details = details['getPropertyByZpid'][0];

  // TODO: Need to get the new data, when we start using a paid API
  const detailsData = [
    { title: 'Beds', subtitle: `${property_details['bed']} Beds` },
    { title: 'Baths', subtitle: `${property_details['bath']} Baths` },
    { title: 'Area', subtitle: `${property_details['livingArea']} sq. ft.` },
    { title: 'Lot Status', subtitle: `${property_details['homeStatus']}` },
    { title: 'Type', subtitle: `${property_details['homeType']}` },
    // Add more data objects here as needed
  ];

  return (
    <div className="px-100 overflow-scroll mx-auto max-w-6xl">
      <div className="fixed bg-white z-50 w-[1166px] h-[72px] justify-between items-center inline-flex flex-row">
        <div className="justify-center items-center gap-4 flex">
          <div className="w-6 h-6 relative">
            <div className="w-6 h-6 left-0 top-0 absolute">
              <button
                className="p-0 bg-transparent"
                onClick={() => navigate(-1)}
              >
                <img src="/arrow-left.svg" alt="Back" />
              </button>
            </div>
          </div>
          <div className="text-black text-base font-medium font-['Poppins']">
            Beacon Street
          </div>
        </div>
        {/**
         * TODO: Know why is the 3 dots svg on the rightside of this element. And add it.
         **/}
      </div>
      {/* <div className="flex flex-row fixed top-[80px] bg-white z-10 items-center">
        <button className="w-8 h-8">
          <img src="/arrow-left.svg" alt="Back" />
        </button>
        <h3 className="text-black text-base font-normal font-['Poppins'] p-2">
          Beacon Street
        </h3>
      </div> */}
      {/* <div className="flex flex-row fixed top-[150px] w-full bg-white p-3 z-10">
        <button className="mx-auto">
          <img src="/arrow-left.svg" alt="Back" />
        </button>
        <h3 className="text-black text-base font-normal font-['Poppins']">
          Beacon Street
        </h3>
      </div> */}
      {/* Need to position the carousel after about 64px from the top. */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        className="mt-[75px] max-w-6xl min-w-full"
      >
        <div className="w-full max-w-6xl h-[407px] mx-auto grid grid-cols-4 grid-rows-2 gap-2">
          {firstImageGroup[0].map((image, index) => (
            <div
              key={index}
              className={
                index == 0 ? 'col-span-2 row-span-2' : 'col-span-1:row-span-1'
              }
            >
              <img
                alt={`Image ${image.id}`}
                src={image.imageURL}
                className={index == 0 ? 'w-full h-[407px]' : 'w-full h-[199px]'}
              />
            </div>
          ))}
        </div>
        {restImageGroups.map(group => (
          <div
            key={group}
            className="w-full max-w-6xl h-[407px] mx-auto grid grid-cols-4 grid-rows-2 gap-2"
          >
            {group.map((image, index) => (
              <div key={index} className="col-span-1:row-span-1">
                <img
                  alt={`Image ${image.id}`}
                  src={image.imageURL}
                  className={
                    index == 0 ? 'w-full h-[407px]' : 'w-full h-[199px]'
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      {/* <div className="w-[1037px] h-[407px] mx-auto grid grid-cols-4 grid-rows-2 gap-2">
        {imageGroups[3].map((image, index) => (
          <div
            key={index}
            className={
              index == 0 ? 'col-span-2 row-span-2' : 'col-span-1:row-span-1'
            }
          >
            <img
              alt={`Image ${image.id}`}
              src={image.imageURL}
              className={index == 0 ? 'w-full h-[407px]' : 'w-full h-[199px]'}
            />
          </div>
        ))}
      </div> */}
      {/* <div className="w-[1037px] h-[407px] mx-auto grid grid-cols-4 grid-rows-2 gap-4">
        {imageGroups[4].map((image, index) => (
          <div
            key={index}
            className={
              index == 0 ? 'col-span-2 row-span-2' : 'col-span-1:row-span-1'
            }
          >
            <img
              alt={`Image ${image.id}`}
              src={image.imageURL}
              className={index == 0 ? 'w-full h-[397px]' : 'w-full h-auto'}
            />
          </div>
        ))}
      </div> */}
      {/* <div className="grid grid-cols-5 gap-10">
          <heading className="text-gray-600 mx-auto text-sm font-normal font-['Poppins']">
            Beds
          </heading>
          <data className=""></data>
        </div> */}
      {/* //create a const propertydetails component taking two */}
      {/* {<PropertyDetailsTextComp title="Beds" subtitle="3 Beds" />} */}
      <div className="flex-row flex justify-start items-start gap-10 mt-14">
        {detailsData.map((data, index) => (
          <PropertyDetailsTextComp
            key={index}
            title={data.title}
            subtitle={data.subtitle}
          />
        ))}
      </div>

      <div className="w-3/5 text-zinc-700 text-base font-normal font-['Poppins'] text-left">
        <p>
          Welcome to &quot;The Beacon&quot;! This charming vacant single-family
          home is a hidden gem offering 3 bedrooms, 1 bath, and approximately
          1500 square feet of living space. With an open floor plan, abundant
          natural light, and a well-appointed kitchen, this property provides a
          comfortable and stylish living experience.
        </p>
        <p>
          The generously sized bedrooms offer versatility for various needs, and
          the tastefully designed bathroom provides a relaxing retreat.{' '}
        </p>
        <p>
          Conveniently located near amenities and with easy access to major
          transportation routes, &quot;The Beacon&quot; presents an exceptional
          opportunity for real estate investment
        </p>
      </div>
      <div className="px-100 pb-20">
        <CustomTabPanel
          latitude={property_details['latitude']}
          longitude={property_details['longitude']}
        />
      </div>
    </div>
  );
};

export default Listingproperty;

{
  /* <div
          key={imageGroups[0][0].id}
          // className="col-span-2 row-span-2 bg-blue-500"
          className="col-span-2 row-span-2"
        >
          <img
            alt={`Image ${imageGroups[0][0].id}`}
            src={imageGroups[0][0].imageURL}
            className="w-full h-[397px]"
          />
        </div>
        <div
          key={imageGroups[0][1].id}
          // className="col-span-2 row-span-2 bg-blue-500"
          className="col-span-1 row-span-1"
        >
          <img
            alt={`Image ${imageGroups[0][1].id}`}
            src={imageGroups[0][1].imageURL}
            className="w-full h-auto"
          />
        </div>
        <div
          key={imageGroups[0][2].id}
          // className="col-span-2 row-span-2 bg-blue-500"
          className="col-span-1 row-span-1"
        >
          <img
            alt={`Image ${imageGroups[0][2].id}`}
            src={imageGroups[0][2].imageURL}
            className="w-full h-auto"
          />
        </div>
        <div
          key={imageGroups[0][3].id}
          // className="col-span-2 row-span-2 bg-blue-500"
          className="col-span-1 row-span-1"
        >
          <img
            alt={`Image ${imageGroups[0][3].id}`}
            src={imageGroups[0][3].imageURL}
            className="w-full h-auto"
          />
        </div>
        <div
          key={imageGroups[0][4].id}
          // className="col-span-2 row-span-2 bg-blue-500"
          className="col-span-1 row-span-1"
        >
          <img
            alt={`Image ${imageGroups[0][4].id}`}
            src={imageGroups[0][4].imageURL}
            className="w-full h-auto"
          />
        </div> */
}
