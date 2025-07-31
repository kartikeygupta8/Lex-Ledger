import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  Alert
} from '@mui/material';
import { 
  Phone, 
  AccessTime, 
  Security, 
  Verified,
  Emergency as EmergencyIcon
} from '@mui/icons-material';

const ImmediateService = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const steps = [
    'Describe Your Issue',
    'Connect with Lawyer',
    'Get Legal Advice'
  ];

  const immediateFeatures = [
    {
      icon: <AccessTime sx={{ color: '#FF4444' }} />,
      title: '10-Minute Connection',
      description: 'Get connected with a qualified lawyer within 10 minutes'
    },
    {
      icon: <Security sx={{ color: '#FF4444' }} />,
      title: 'Verified Lawyers',
      description: 'All lawyers are verified and licensed professionals'
    },
    {
      icon: <Phone sx={{ color: '#FF4444' }} />,
      title: '24/7 Availability',
      description: 'Immediate legal help available round the clock'
    },
    {
      icon: <Verified sx={{ color: '#FF4444' }} />,
      title: 'Confidential',
      description: 'All consultations are completely confidential'
    }
  ];

  const immediateTypes = [
    'Criminal Defense',
    'Arrest Situations',
    'Police Interrogation',
    'Bail Applications',
    'Family Emergencies',
    'Property Disputes',
    'Employment Issues',
    'Consumer Rights'
  ];
 React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <EmergencyIcon sx={{ fontSize: 60, color: '#FF4444', mb: 2 }} />
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#003366', mb: 2 }}>
          Immediate Legal Service
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', mb: 4 }}>
          Get urgent legal help when you need it most
        </Typography>
        
        <Alert severity="warning" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          <strong>Important:</strong> This service is currently under development. 
          For immediate legal emergencies, please contact local emergency services or your local bar association.
        </Alert>
      </Box>

      {/* How It Works */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#003366' }}>
          How It Works
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#FF4444',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '18px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FF2222',
              }
            }}
            disabled
          >
            🚨 Start Immediate Consultation (Coming Soon)
          </Button>
        </Box>
      </Box>

      {/* Features */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#003366' }}>
          Why Choose Our Immediate Service
        </Typography>
        <Grid container spacing={3}>
          {immediateFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 2,
                '&:hover': {
                  boxShadow: '0 8px 25px rgba(255, 68, 68, 0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardContent>
                  <Avatar sx={{ 
                    bgcolor: 'rgba(255, 68, 68, 0.1)', 
                    mx: 'auto', 
                    mb: 2,
                    width: 60,
                    height: 60
                  }}>
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Emergency Types */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#003366' }}>
          Immediate Legal Situations We Handle
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {immediateTypes.map((type, index) => (
            <Chip
              key={index}
              label={type}
              variant="outlined"
              sx={{
                borderColor: '#FF4444',
                color: '#FF4444',
                '&:hover': {
                  backgroundColor: 'rgba(255, 68, 68, 0.1)',
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Contact Information */}
      <Box sx={{ 
        backgroundColor: '#f5f5f5', 
        borderRadius: 2, 
        p: 4, 
        textAlign: 'center' 
      }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#003366' }}>
          Need Immediate Help?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
          While our immediate service is being developed, you can still get help through these channels:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#003366',
                color: '#003366',
                '&:hover': {
                  backgroundColor: 'rgba(0, 51, 102, 0.1)',
                }
              }}
            >
              Contact Regular Services
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#003366',
                color: '#003366',
                '&:hover': {
                  backgroundColor: 'rgba(0, 51, 102, 0.1)',
                }
              }}
            >
              Find a Lawyer
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ImmediateService;
