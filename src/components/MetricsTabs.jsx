import React from 'react';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import MonthlyRevenue from './metricscharts/MonthlyRevenueChart';
import RiskMeter from './metricscharts/RiskMeter';
import Metric from './listingproperty/metric';
import { styled } from 'styled-components';
import LinearProgressWithLabel from './listingproperty/riskfactor';
import CashFlow from './listingproperty/cashflow';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import PerformanceStats from './listingproperty/financialPerformanceStats';

const MetricsContainer = styled.div`
  border-top: 1px solid var(--neutral-gray-200, #e8e8e8);
  border-bottom: 1px solid var(--neutral-gray-200, #e8e8e8);
`;

const CustomTabPanel = props => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = { lat: props.latitude, lng: props.longitude };
  return (
    <Tabs defaultValue={1}>
      <TabsList className="w-3/5 mb-4 bg-white flex font-poppins items-start justify-center content-between min-w-tabs-list">
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-poppins ${
                selected
                  ? 'text-primaryblue-500 font-medium bg-white border-b-4 border-primaryblue-500'
                  : 'text-stone-900 bg-transparent'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-base w-full p-2 m-1.5 flex justify-center`,
            }),
          }}
          value={1}
        >
          Rental Data
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-poppins ${
                selected
                  ? 'text-primaryblue-500 font-medium bg-white border-b-4 border-primaryblue-500'
                  : 'text-stone-900 bg-transparent'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-base w-full p-2 m-1.5 flex justify-center`,
            }),
          }}
          value={2}
        >
          Risk Assessment
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-poppins ${
                selected
                  ? 'text-primaryblue-500 font-medium bg-white border-b-4 border-primaryblue-500'
                  : 'text-stone-900 bg-transparent'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-base w-full p-2 m-1.5 flex justify-center`,
            }),
          }}
          value={3}
        >
          Area Insights
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-poppins ${
                selected
                  ? 'text-primaryblue-500 font-medium bg-white border-b-4 border-primaryblue-500'
                  : 'text-stone-900 bg-transparent'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-base w-full p-2 m-1.5 flex justify-center`,
            }),
          }}
          value={4}
        >
          Other Insights
        </Tab>
      </TabsList>
      <TabPanel className="w-3/5" value={1}>
        <>
          <div className="text-sm font-poppins text-neutral-500">
            Explore comprehensive rental data for The Beacon, including average
            prices, market trends, and popular locations, empowering you to make
            informed decisions in the rental market.
          </div>
          {/* TODO: Get the Required data for the charts and the calculations from the backend */}
          {/* TODO: Get the Average, Minimum, Maximum Calculated based on the data queried from the backend */}
          <MonthlyRevenue
            chartname="Monthly Revenue"
            Average="13000"
            Minimum="9500"
            Maximum="17000"
          />
          <MetricsContainer className="mt-20 flex flex-row items-center px-16 py-6 border-t border-b border-black justify-between">
            <Metric metricname="Rent Dividend Yield" metricvalue="5.2%" />
            <Metric metricname="Rent-ready Date" metricvalue="July 7, 2023" />
            <Metric
              metricname="First Dividend Date"
              metricvalue="August 7, 2023"
            />
          </MetricsContainer>
        </>
      </TabPanel>
      <TabPanel value={2}>
        {/**
         * TODO: Get the Below Data from the API in the required format and map the values to the below components.
         */}
        <div className="flex flex-row w-3/5">
          <RiskMeter speed="70" />
          <div className="flex flex-col w-1/2 bg-transparent">
            <LinearProgressWithLabel label="Location" value="50" />
            <LinearProgressWithLabel label="Market" value="70" />
            <LinearProgressWithLabel label="Property" value="30" />
            <LinearProgressWithLabel label="Finance" value="80" />
          </div>
        </div>
        <div className="w-3/5">
          <div className="text-zinc-700 text-base font-medium font-poppins">
            Medium Risk
          </div>
          <p className="text-zinc-700 text-sm font-normal font-poppins">
            The Beacon property has received a risk rating of 56 out of 100.
            This rating indicates a moderate level of risk associated with the
            property, suggesting potential market fluctuations and some factors
            that may require attention or monitoring.
          </p>
          <CashFlow />
          {/**
           * TODO: Get the metrics, labels and their values based on backend data. And map them to the props below.
           **/}
          <div className="flex flex-col gap-20">
            <PerformanceStats
              title="GRM(Gross Rent Multiplier)"
              metricValue="5.00"
              metricReview="Excellent Investment"
              firstLabel="Purchase Price"
              firstValue="$100,000"
              secondLabel="Gross Rental Income"
              secondValue="/ $20,000/Year"
              resultLabel="GRM"
              resultValue="5.00"
              description="The Gross Rent Multiplier (GRM) is calculated by dividing the purchase price of the property by its gross rental income. In this case, the GRM is 5.00, indicating that it would take approximately 5 years for the gross rental income to cover the purchase price of the property."
              ticksarray={[0, 5, 10, 15, 20]}
              colors={['#99F78A', '#D0FF15', '#FFE714', '#FF0606']}
            />
            <PerformanceStats
              title="DCR(Debt Coverage Ratio)"
              metricValue="1.67"
              metricReview="Excellent Investment"
              firstLabel="Net Operative Income(NOI)"
              firstValue="$50,000/Year"
              secondLabel="GRM"
              secondValue="/ $30,000/Year"
              resultLabel="DCR"
              resultValue="1.67"
              description="With a DCR of 1.67, The Beacon property generates enough income to cover its debt obligations, indicating a healthy financial position."
              ticksarray={[0, 0.5, 1.0, 1.5, 2]}
              colors={['#FF0606', '#FFE714', '#D0FF15', '#99F78A']}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel className="w-3/5 h-[350px]" value={3}>
        <div className="text-base font-poppins text-zinc-700">
          <p>
            The location offers a prime downtown area with high demand, a stable
            rental market, and steady population growth.
          </p>
          <p>
            The neighborhood boasts a vibrant environment with various
            amenities, low crime rates, and strong job markets.
          </p>
          <p>
            It presents a promising investment opportunitywith convenient access
            to public transportation and major highways.
          </p>
        </div>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
        <div className="flex flex-row my-10 px-4 justify-between">
          <div className="flex flex-col p-1 items-center gap-2.5">
            <img src="/landmarks/coffee.svg" alt="Logo" className="w-8 h-8" />
            <div className="text-black text-base font-normal font-['Poppins']">
              Cafe
            </div>
            <div className="text-zinc-700 text-sm font-normal font-['Poppins']">
              3 within 1-mile radius
            </div>
          </div>
          <div className="flex flex-col p-1 items-center gap-2.5">
            <img src="/landmarks/wifi.svg" alt="Logo" className="w-8 h-8" />
            <div className="text-black text-base font-normal font-['Poppins']">
              Wifi
            </div>
            <div className="text-zinc-700 text-sm font-normal font-['Poppins']">
              3 within 1-mile radius
            </div>
          </div>
          <div className="flex flex-col p-1 items-center gap-2.5">
            <img src="/landmarks/pet.svg" alt="Logo" className="w-8 h-8" />
            <div className="text-black text-base font-normal font-['Poppins']">
              Pets
            </div>
            <div className="text-zinc-700 text-sm font-normal font-['Poppins']">
              3 within 1-mile radius
            </div>
          </div>
        </div>
        {/* TODO: Get the Required data for the charts and the calculations from the backend */}
        {/* TODO: Get the Average, Minimum, Maximum Calculated based on the data queried from the backend */}
        <div>
          <div className="my-4">
            <span className="text-zinc-700 text-lg font-bold font-['Poppins']">
              Market Conditions -{' '}
            </span>
            <span className="text-zinc-700 text-lg font-normal font-['Poppins']">
              Beacon Street
            </span>
          </div>
          <div className="text-neutral-500 text-sm font-normal font-['Poppins']">
            This section offers a snapshot of the current rental market dynamics
            around the property. Discover vacancy rates and growth trends that
            provide valuable insights into the investment landscape. Make
            informed decisions by understanding the factors shaping rental
            success in the area.
          </div>
        </div>

        {/* TODO: Get the Required data for the charts and the calculations from the backend */}
        {/* TODO: Get the Average, Minimum, Maximum Calculated based on the data queried from the backend */}
        <MonthlyRevenue
          chartname="Rental Vacancy Rate"
          Average="13000"
          Minimum="9500"
          Maximum="17000"
        />

        <MonthlyRevenue
          chartname="Rental Growth Rate"
          Average="13000"
          Minimum="9500"
          Maximum="17000"
        />
        <MetricsContainer className="mt-20 flex flex-row items-center px-16 py-6 border-t border-b border-black justify-between">
          <Metric metricname="Crime Rate" metricvalue="5.2%" />
          <Metric metricname="Population Rate" metricvalue="5.2%" />
          <Metric metricname="Unemployment Rate" metricvalue="5.2%" />
        </MetricsContainer>
      </TabPanel>
      <TabPanel value={4}>
        <MetricsContainer className="w-3/5">
          <div className="flex flex-row items-center px-16 py-6 border-t border-b border-black justify-between">
            <Metric metricname="NOI" metricvalue="5.2%" />
            <Metric metricname="Cap Rate" metricvalue="5.2%" />
            <Metric metricname="Cash on Cash" metricvalue="5.2%" />
            <Metric metricname="IRR" metricvalue="5.2%" />
          </div>
          <div className="flex flex-row items-center px-16 py-6 border-t border-b border-black justify-around">
            <Metric metricname="LTV" metricvalue="5.2%" />
            <Metric metricname="Loan Term" metricvalue="5.2%" />
            <Metric metricname="Unemployment Rate" metricvalue="5.2%" />
          </div>
          <div className="flex flex-row items-center px-16 py-6 border-t border-b border-black justify-around">
            <Metric metricname="Interest Rate" metricvalue="5.2%" />
            <Metric metricname="Unemployment Rate" metricvalue="5.2%" />
          </div>
          <div className="flex flex-row items-center px-16 py-6 border-t border-b border-black justify-around">
            <Metric metricname="Tax Rate" metricvalue="5.2%" />
            <Metric
              metricname="Investor-Friendly Policies"
              metricvalue="No Rent Control Laws"
            />
          </div>
        </MetricsContainer>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabPanel;
