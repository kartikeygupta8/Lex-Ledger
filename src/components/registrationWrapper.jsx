import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepIcon,
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled step icon with circular design
const CustomStepIcon = styled('div')(({ theme, ownerState }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  fontWeight: 600,
  color: theme.palette.common.white,
  backgroundColor: ownerState.active 
    ? theme.palette.primary.main 
    : ownerState.completed 
      ? theme.palette.success.main 
      : theme.palette.grey[400],
  border: `2px solid ${
    ownerState.active 
      ? theme.palette.primary.main 
      : ownerState.completed 
        ? theme.palette.success.main 
        : theme.palette.grey[400]
  }`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

// Custom step icon component
function CustomStepIconComponent(props) {
  const { active, completed, icon } = props;

  return (
    <CustomStepIcon ownerState={{ active, completed }}>
      {completed ? '✓' : icon}
    </CustomStepIcon>
  );
}

// Custom styled stepper
const CustomStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepConnector-root': {
    top: 20,
    left: 'calc(-50% + 20px)',
    right: 'calc(50% + 20px)',
  },
  '& .MuiStepConnector-line': {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.grey[300],
    borderRadius: 1,
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    backgroundColor: theme.palette.success.main,
  },
  '& .MuiStepLabel-root': {
    flexDirection: 'column',
  },
  '& .MuiStepLabel-label': {
    marginTop: theme.spacing(1),
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: theme.palette.success.main,
    fontWeight: 600,
  },
}));

const RegistrationStepper = ({ activeStep = 0, steps = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Default steps if none provided
  const defaultSteps = [
    { label: 'Expert Registration', description: 'Create your account' },
    { label: 'OTP Verification', description: 'Verify your details' },
    { label: 'Select Revenue Model', description: 'Setup complete' },
    { label: 'Select Subscription Plan', description: 'Setup complete' },
    { label: 'Document Verification', description: 'Setup complete' },
    { label: 'Bank Details', description: 'Setup complete' },
    { label: 'Payment & Subscription', description: 'Setup complete' },
    { label: 'Profile Verification', description: 'Setup complete' }


  ];

  const stepLabels = steps.length > 0 ? steps : defaultSteps;

  return (
    <Box sx={{ 
      width: '100%', 
      py: 3,
      px: isMobile ? 1 : 3,
      // backgroundColor: 'background.paper',
      borderRadius: 2,
      // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',,jbghk
      
      mb: 3
    }}>
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ 
          mb: 3, 
          color: 'text.primary',
          fontWeight: 600
        }}
      >
        Registration Progress
      </Typography>
      
      <CustomStepper 
        activeStep={activeStep} 
        alternativeLabel={!isMobile}
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        {stepLabels.map((step, index) => (
          <Step key={index}>
            <StepLabel 
              StepIconComponent={CustomStepIconComponent}
             
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </CustomStepper>
      
      {/* Progress indicator */}
      {/* <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Step {Math.min(activeStep + 1, stepLabels.length)} of {stepLabels.length}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default RegistrationStepper;

