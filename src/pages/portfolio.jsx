import React, { useState } from 'react';
import NavigationSidebar from '../components/NavigationSidebar';
import InvestmentDistributionCard from '../components/portfolio/InvestmentDistributionCard';
import InvestmentInfoCard from '../components/portfolio/InvestmentInfoCard';
import InvestmentValueChart from '../components/portfolio/InvestmentValueChart';
import MultiButtonsToggleGroup from '../components/ui/filters/MultiButtonsToggleGroup';
import MyPropertyCard from '../components/portfolio/MyPropertyCard';
import MyCard from '../components/portfolio/MarketPlaceCard';
import LinearProgress from '@mui/material/LinearProgress';

import { myInvestedPropertiesTemp } from '../constants';
// import GET_DATA_QUERY from '../../src/dataquery.graphql';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
const Portfolio = () => {
  /**
   * TODO: fetch the data required for all the cards using a single query and pass them to each card as props
   */
  const GET_DATA_QUERY = gql`
    query GetPropertiesByTerms(
      $address: String
      $boundary: BoundaryInput
      $filters: FilterInput
    ) {
      getPropertiesByTerms(
        address: $address
        boundary: $boundary
        filters: $filters
      ) {
        id
        street
        city
        stateId
        zipcode
        homeStatus
        homeType
        bed
        bath
        latitude
        longitude
        imageURI
        unit
        price
        livingArea
        zestimate
        rentZestimate
        zpid
        daysOnZillow
      }
    }
  `;

  // TEMP: this will be extracted from the fetched data. The keys of the objects in the list can be different. If different then update in the InvestmentValueChart component as well
  const investmentValueChart = [
    { title: 'May', value: '45523' },
    { title: 'June', value: '38163' },
    { title: 'July', value: '51672' },
    { title: 'August', value: '59451' },
    { title: 'September', value: '74123' },
    { title: 'October', value: '64903' },
    { title: 'November', value: '77651' },
  ];

  // TEMP: this will be extracted from the fetched data. The keys of the objects in the list can be different. If different then update in the InvestmentDistributionCard component as well
  const distributionChartData = [
    { propertyType: 'Residential', amountInvested: 225000 },
    { propertyType: 'Commercial', amountInvested: 135000 },
    { propertyType: 'Other', amountInvested: 90000 },
  ];
  const totalInvestedAmount = 450000;

  // TEMP: this will be extracted from the fetched data. The keys of the objects in the list can be different. If different then update in the InvestedPropertyCard component as well
  const myInvestedProperties = [...myInvestedPropertiesTemp]; // this contain all my invested property
  const [filteredProperties, setFilteredProperties] = useState([
    ...myInvestedPropertiesTemp,
  ]);

  // Property type filter options for My Investment Section
  const propTypeFilters = ['All', 'Retail', 'Commercial', 'Residential']; // add more types if required

  const handlePropTypeFiltersChange = filters => {
    /**
     * TODO: If we want handle filtering from server side
     * Call the initial query to fetch My Investments data
     * Initially 'All' filter is set
     * When any changes are made to the filter then the query will recalled and filtered as per selection
     */

    // following code is if we fetch the properties data only when the component is reloaded and filtering is handle from client side
    setFilteredProperties(() => {
      if (filters.includes('All')) {
        return myInvestedProperties;
      }
      return myInvestedProperties.filter(property =>
        filters.includes(property.propertyType)
      );
    });
  };

  /** - VSW
   * TODO:Capture the user's filter selections or input as JavaScript variables within your application in desired format
   * These variables should correspond to the variables in your GraphQL query.
   * The Query Variables are optional.
   * Pass these JavaScript variables as query variables when the GraphQL query.
   */
  const { loading, error, data } = useQuery(GET_DATA_QUERY, {
    variables: {
      address: 'Ellis at Central Station',
      boundary: {
        southwest: { lat: 30, lng: -125 },
        northeast: { lat: 80, lng: 180 },
      },
      // },
      // filters: {
      //   noOfBedrooms: 2,
      // },
    },
  });

  // const { loading, error, data } = useQuery(GET_DATA_QUERY);  //GetAllProperties

  if (loading) {
    return <LinearProgress className="mt-1000" />;
  }

  if (error) {
    console.error('GraphQL Error:', error);
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    console.log('GraphQL Data:', data.getPropertiesByTerms[0]['zpid']);
    // console.log('DATATYPE', Array.isArray(data));
  }

  // const streetValue = data.getPropertiesByTerms[0].street;

  return (
    <div
      className="flex-1 flex bg-neutralgray-100"
      style={{ height: 'calc(100vh - 81px)' }}
    >
      <NavigationSidebar />
      {/* Right side scrollable component */}
      <div className="flex w-full flex-col flex-1 h-full overflow-y-auto text-left text-sm text-black font-poppins">
        <div className="flex flex-col">
          <div className="pl-6 pt-4 text-5xl font-semibold text-gray-900">
            My Portfolio
          </div>
          <div className="my-4 box-border w-full h-px border-t-[1px] border-solid border-gainsboro-100"></div>
          <div className="flex flex-row">
            <div className="flex-1">
              {/* Investment Info Cards */}
              <div className="mb-6 mx-6 flex text-xs text-gray-2000 gap-x-4">
                {/* TODO: extract required data from the fetched data to be send for the chart. currently the same common chart data is sent */}
                <InvestmentInfoCard
                  cardHeader="TOTAL INVESTMENT"
                  amount={26500}
                  baseAmount={25000}
                  chartData={investmentValueChart}
                />
                <InvestmentInfoCard
                  cardHeader="TOTAL INVESTMENT"
                  amount={26500}
                  baseAmount={30000}
                  chartData={[...investmentValueChart].reverse()}
                />
              </div>
              {/* Investment Value Chart */}
              <div className="mx-6 h-[362px] min-w-[658px] rounded-3xs bg-white ">
                {/* TODO: pass required data as props to the chart */}
                <InvestmentValueChart chartData={investmentValueChart} />
              </div>
            </div>
            {/* Portfolio Distribution Card */}
            <div className="mr-6 flex h-[531px] min-w-[244px] max-w-[280px] flex-1 flex-col rounded bg-white overflow-hidden text-xl text-neutralgray-700">
              <InvestmentDistributionCard
                chartData={distributionChartData}
                totalInvestedAmount={totalInvestedAmount}
              />
            </div>
          </div>
        </div>
        <div className="mx-6 mt-4 py-2 h-12 rounded-xl bg-white pl-4 pt-2 text-xl font-semibold">
          My Investments
        </div>
        {/* My investment section -> property type filter */}
        <div className="flex flex-row items-start justify-start gap-[8px] pl-6 pt-2">
          <MultiButtonsToggleGroup
            filters={propTypeFilters}
            initialFilterValue="All"
            onFiltersChange={handlePropTypeFiltersChange}
          />
        </div>
        {/* Properties grid */}
        <div className="mx-6 my-4 flex flex-wrap items-start justify-start gap-4">
          {filteredProperties.map(property => {
            return (
              <MyPropertyCard
                key={property.id}
                property={property}
                cardClassNames=""
              />
            );
          })}
        </div>
        <div className="mx-6 my-4 flex flex-wrap items-start justify-start gap-4">
          <p>TESTING GRAPHQL CONNECTION</p>
        </div>
        <div className="mx-6 my-4 flex flex-wrap items-start justify-start gap-4">
          {/* {Array.isArray(data)} */}
          {data.getPropertiesByTerms.map(propertyByTerms => {
            return (
              <MyCard
                key={propertyByTerms.id}
                property={propertyByTerms}
                cardClassNames=""
              />
              // <MyCard
              //   key={data.getPropertiesByTerms[0].id}
              //   property={data.getPropertiesByTerms[0]}
              //   cardClassNames=""
              // />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
