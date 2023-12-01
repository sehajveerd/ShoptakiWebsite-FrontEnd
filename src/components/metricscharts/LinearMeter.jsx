import React from 'react';

const LinearMeter = ({ value, ticksarray, colors }) => {
  const meterStyle = {
    width: '100%',
    height: '5px',
    marginTop: '50px',
    backgroundColor: 'lightgray',
    position: 'relative',
    justifyContent: 'center',
  };

  const pointerStyle = {
    position: 'absolute',
    top: '50%',
    left: `${(value / ticksarray[ticksarray.length - 1]) * 100}%`,
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '20px',
    borderRadius: '6px',
    backgroundColor: 'white',
    border: '1px solid var(--primary-blue-500, #0D65B6)',
    zIndex: 1,
  };

  const tickLabelStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(15px)',
    textAlign: 'center',
    fontSize: '12px',
    width: '10px',
    height: '20px',
    fontFamily: 'poppins',
  };

  return (
    <div>
      <div style={meterStyle}>
        {ticksarray.map(tick => (
          <div
            key={tick}
            style={{
              ...tickLabelStyle,
              left: `${(tick / ticksarray[ticksarray.length - 1]) * 100}%`,
              color: 'black',
            }}
          >
            {tick}
          </div>
        ))}
        <div
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: colors[0],
            float: 'left',
            borderTopLeftRadius: '3px',
            borderBottomLeftRadius: '3px',
          }}
        />
        <div
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: colors[1],
            float: 'left',
          }}
        />
        <div
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: colors[2],
            float: 'left',
          }}
        />
        <div
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: colors[3],
            float: 'left',
            borderTopRightRadius: '3px',
            borderBottomRightRadius: '3px',
          }}
        />
        <div style={pointerStyle} />
      </div>
    </div>
  );
};

export default LinearMeter;
