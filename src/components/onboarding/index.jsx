import React from 'react';
import { useNavigate } from 'react-router-dom';
import InvestmentExperienceForm from './InvestmentExperienceForm';
import InvestmentReasonForm from './InvestmentReasonForm';
import PersonalInfoForm from './PersonalInfoForm';
import IdentityFinanceForm from './IdentityFinanceForm';

const UserOnboarding = ({ currentStep }) => {
  const navigate = useNavigate();

  const nextStep = () => {
    switch (currentStep) {
      case 'personal-info':
        navigate(`/onboarding/identity-finance`);
        break;
      case 'identity-finance':
        navigate(`/onboarding/investment-experience`);
        break;
      case 'investment-experience':
        navigate(`/onboarding/investment-reason`);
        break;
    }
  };

  const prevStep = () => {
    switch (currentStep) {
      case 'identity-finance':
        navigate(`/onboarding/personal-info`);
        break;
      case 'investment-experience':
        navigate(`/onboarding/identity-finance`);
        break;
      case 'investment-reason':
        navigate(`/onboarding/investment-experience`);
        break;
    }
  };

  const skipStep = () => {
    nextStep();
  };

  const homeStep = () => {
    navigate('/');
  };

  switch (currentStep) {
    case 'personal-info':
      return <PersonalInfoForm nextStep={nextStep} skipStep={skipStep} />;
    case 'identity-finance':
      return (
        <IdentityFinanceForm
          nextStep={nextStep}
          prevStep={prevStep}
          skipStep={skipStep}
        />
      );
    case 'investment-experience':
      return (
        <InvestmentExperienceForm
          nextStep={nextStep}
          prevStep={prevStep}
          skipStep={skipStep}
        />
      );
    case 'investment-reason':
      return <InvestmentReasonForm prevStep={prevStep} homeStep={homeStep} />;
  }
};

export default UserOnboarding;
