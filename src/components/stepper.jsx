import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StepperContext = createContext();

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }
  return context;
};

// Define the registration steps and their corresponding routes
const REGISTRATION_STEPS = [
  {
    label: 'Expert Registration',
    description: 'Create your account',
    routes: ['/expert']
  },
  {
     label: 'OTP Verification',
    description: 'Create your account',
    routes: [ '/otp-authentication']
  },
   {
    label: 'Select Revenue Model',
    description: 'Verify your details',
    routes: ['/revenue-model']
  },
   {
    label: 'Select Subscription Plan',
    description: 'Verify your details',
    routes: [ '/subscription-model']
  },
  {
    label: 'Document Verification',
    description: 'Verify your details',
    routes: ['/aadhar-pan-verification']
  },
  {
    label: 'Bank Details',
    description: 'Verify your details',
    routes: ['/bank-details']
  },
   {
    label: 'Payment & Subscription',
    description: 'Setup complete',
    routes: ['/pay-subscription']
  },
  {
    label: 'Profile Verification',
    description: 'Setup complete',
    routes: [ '/profile-verification']
  }
];

export const StepperProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();

  // Update active step based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Skip stepper for landing page
    if (currentPath === '/') {
      return;
    }

    // Find which step the current route belongs to
    const stepIndex = REGISTRATION_STEPS.findIndex(step =>
      step.routes.includes(currentPath)
    );

    if (stepIndex !== -1) {
      setActiveStep(stepIndex);
    }
  }, [location.pathname]);

  // Check if current route should show stepper
  const shouldShowStepper = () => {
    const currentPath = location.pathname;
    return currentPath !== '/' && REGISTRATION_STEPS.some(step =>
      step.routes.includes(currentPath)
    );
  };

  // Stepper control functions
  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, REGISTRATION_STEPS.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const value = {
    activeStep,
    setActiveStep,
    steps: REGISTRATION_STEPS,
    shouldShowStepper: shouldShowStepper(),
    handleNext,
    handleBack,
    handleReset
  };

  return (
    <StepperContext.Provider value={value}>
      {children}
    </StepperContext.Provider>
  );
};

export default StepperContext;

