// import { useRef, useEffect } from 'react';
import React from 'react';
// import * as d3 from 'd3';
// import * as V from 'victory';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LinearScale = () => {
  // const riskData = [
  //   { x: 1, y: riskLevel },
  //   { x: 2, y: 100 - riskLevel },
  // ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'poppins',
        fontSize: '12px',
      }}
    >
      {/* <p className="mx-10">{props.label}</p> */}
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"'
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          5
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearScale;
