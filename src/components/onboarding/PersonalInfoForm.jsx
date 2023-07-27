import React from 'react';

const PersonalInfoForm = ({ nextStep, skipStep }) => {
  const handleSubmit = event => {
    // handle submit, then:
    event.preventDefault();
    nextStep();
  };

  return (
    <>
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        {/* form elements */}
        <button type="submit">Next</button>
        <button type="button" onClick={skipStep}>
          Skip
        </button>
      </form>
    </>
  );
};

export default PersonalInfoForm;
