import React from 'react';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import MonthlyRevenue from './metricscharts/MonthlyRevenueChart';

const CustomTabPanel = () => {
  return (
    <Tabs defaultValue={1}>
      <TabsList className="w-2/3 mb-4 bg-white flex font-poppins items-center justify-center content-between min-w-tabs-list">
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-poppins ${
                selected
                  ? 'text-primaryblue-500 font-medium bg-white border-b-4 border-primaryblue-500'
                  : 'text-stone-900 bg-transparent'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm w-full p-2 m-1.5 flex justify-center`,
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
              } text-sm w-full p-2 m-1.5 flex justify-center`,
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
              } text-sm w-full p-2 m-1.5 flex justify-center`,
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
              } text-sm w-full p-2 m-1.5 flex justify-center`,
            }),
          }}
          value={4}
        >
          Other Insights
        </Tab>
      </TabsList>
      <TabPanel className="w-2/3" value={1}>
        <div className="text-sm font-poppins text-neutral-500">
          Explore comprehensive rental data for The Beacon, including average
          prices, market trends, and popular locations, empowering you to make
          informed decisions in the rental market.
        </div>
        <MonthlyRevenue />
      </TabPanel>
      <TabPanel value={2}>Second page</TabPanel>
      <TabPanel value={3}>Third page</TabPanel>
      <TabPanel value={4}>Fourth page</TabPanel>
    </Tabs>
  );
};

export default CustomTabPanel;
