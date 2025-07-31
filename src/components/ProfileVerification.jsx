import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Alert,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  Schedule,
  Person,
  Verified,
  Cancel,
  Refresh,
  Home,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const verificationSteps = [
  'Document Review',
  'Background Check',
  'Professional Verification',
  'Final Approval'
];

const ProfileVerification = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [currentStep, setCurrentStep] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');

  useEffect(() => {
    // Get user data from localStorage
    const data = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
    setUserData(data);

    // Simulate verification process
    simulateVerification();
  }, []);

  const simulateVerification = () => {
    // Simulate different verification outcomes
    const outcomes = ['successful', 'unsuccessful', 'query'];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    
    // For demo, let's make it successful most of the time
    const finalOutcome = Math.random() > 0.3 ? 'successful' : randomOutcome;

    // Progress through steps
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < verificationSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setTimeout(() => {
            setVerificationStatus(finalOutcome);
            setDialogType(finalOutcome);
            setShowDialog(true);
            
            // Update user data with final status
            const updatedData = {
              ...userData,
              profileVerification: {
                status: finalOutcome,
                completedAt: new Date().toISOString(),
                steps: verificationSteps,
              },
              registrationStatus: finalOutcome === 'successful' ? 'completed' : 'verification_failed',
            };
            localStorage.setItem('expertRegistrationData', JSON.stringify(updatedData));
          }, 1000);
          return prev;
        }
      });
    }, 2000);
  };

  const handleDialogAction = (action) => {
    setShowDialog(false);
    
    switch (action) {
      case 'dashboard':
        // In a real app, this would navigate to the expert dashboard
        alert('Registration completed! You would now be redirected to your expert dashboard.');
        navigate('/dashboard');
        break;
      case 'retry':
        // Reset and retry verification
        setCurrentStep(0);
        setVerificationStatus('pending');
        simulateVerification();
        break;
      case 'home':
        navigate('/');
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    navigate('/pay-subscription');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'successful': return 'success';
      case 'unsuccessful': return 'error';
      case 'query': return 'warning';
      default: return 'primary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'successful': return <CheckCircle />;
      case 'unsuccessful': return <Cancel />;
      case 'query': return <Schedule />;
      default: return <Schedule />;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Header */}
      {/* <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            sx={{ mr: 2 }}
            disabled={verificationStatus === 'pending'}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Profile Verification
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 8 of 8
          </Typography>
        </Toolbar>
        {verificationStatus === 'pending' && <LinearProgress color="secondary" />}
      </AppBar> */}

      <Container maxWidth="md" sx={{ py: 4 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Verified sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
              Profile Verification
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              We're reviewing your profile and documents to ensure compliance with our standards. 
              This process typically takes 24-48 hours.
            </Typography>
          </Box>

          {/* Registration Summary */}
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                Registration Summary
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Email"
                        secondary={userData.email}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Phone"
                        secondary={userData.phoneNumber}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Profession"
                        secondary={userData.profession}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Registration Number"
                        secondary={userData.professionalRegistrationNumber}
                      />
                    </ListItem>
                  </List>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Revenue Model"
                        secondary={
                          <Chip
                            label={userData.revenueModel === 'trackA' ? 'Track A - Commission' : 'Track B - Subscription'}
                            color={userData.revenueModel === 'trackA' ? 'primary' : 'secondary'}
                            size="small"
                          />
                        }
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Subscription Plan"
                        secondary={userData.subscriptionPlan?.name || 'N/A'}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Payment Status"
                        secondary={
                          <Chip
                            label={userData.payment?.status === 'completed' ? 'Paid' : 'Free Plan'}
                            color={userData.payment?.status === 'completed' ? 'success' : 'default'}
                            size="small"
                          />
                        }
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Documents"
                        secondary={
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip label="Aadhar" color="success" size="small" />
                            <Chip label="PAN" color="success" size="small" />
                            <Chip label="Bank Details" color="success" size="small" />
                          </Box>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Verification Progress */}
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                Verification Progress
              </Typography>
              
              <Stepper activeStep={currentStep} orientation="vertical">
                {verificationSteps.map((step, index) => (
                  <Step key={step}>
                    <StepLabel
                      StepIconProps={{
                        sx: {
                          '&.Mui-active': { color: 'primary.main' },
                          '&.Mui-completed': { color: '#4caf50' },
                        }
                      }}
                    >
                      <Typography variant="h6">{step}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {index === 0 && 'Reviewing uploaded documents and information'}
                        {index === 1 && 'Conducting background verification checks'}
                        {index === 2 && 'Verifying professional credentials and registrations'}
                        {index === 3 && 'Final review and approval process'}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              {verificationStatus === 'pending' && (
                <Box sx={{ mt: 4, p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
                  <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
                    <Schedule sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Verification in progress... This may take a few minutes.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* What happens next */}
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                What Happens Next?
              </Typography>
              
              <List>
                <ListItem sx={{ px: 0 }}>
                  <CheckCircle sx={{ color: '#4caf50', mr: 2 }} />
                  <ListItemText
                    primary="Profile Review"
                    secondary="Our team will review your profile and documents within 24-48 hours"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <CheckCircle sx={{ color: '#4caf50', mr: 2 }} />
                  <ListItemText
                    primary="Email Notification"
                    secondary="You'll receive an email notification once verification is complete"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <CheckCircle sx={{ color: '#4caf50', mr: 2 }} />
                  <ListItemText
                    primary="Dashboard Access"
                    secondary="Upon approval, you'll get access to your expert dashboard and can start accepting clients"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <CheckCircle sx={{ color: '#4caf50', mr: 2 }} />
                  <ListItemText
                    primary="Profile Goes Live"
                    secondary="Your profile will be visible to clients on the Lex & Ledger platform"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              <strong>Note:</strong> If additional information is required, our team will contact you via email or phone. 
              Please ensure your contact details are accurate.
            </Typography>
          </Alert>
        </motion.div>
      </Container>

      {/* Verification Result Dialog */}
      <Dialog
        open={showDialog}
        onClose={() => {}}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
          <Box sx={{ mb: 2 }}>
            {React.cloneElement(getStatusIcon(verificationStatus), { 
              sx: { fontSize: 64, color: `${getStatusColor(verificationStatus)}.main` } 
            })}
          </Box>
          {verificationStatus === 'successful' && 'Verification Successful!'}
          {verificationStatus === 'unsuccessful' && 'Verification Unsuccessful'}
          {verificationStatus === 'query' && 'Additional Information Required'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            {verificationStatus === 'successful' && (
              <>
                <Typography variant="h6" gutterBottom sx={{ color: '#4caf50' }}>
                  Welcome to Lex & Ledger!
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  Your profile has been successfully verified and is now live on our platform. 
                  You can start accepting clients and building your practice.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  You'll receive a welcome email with next steps and dashboard access details.
                </Typography>
              </>
            )}
            
            {verificationStatus === 'unsuccessful' && (
              <>
                <Typography variant="h6" gutterBottom sx={{ color: 'error.main' }}>
                  Verification Could Not Be Completed
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  Unfortunately, we couldn't verify your profile at this time. This could be due to 
                  incomplete documentation or information that doesn't match our records.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  You can retry the verification process or contact our support team for assistance.
                </Typography>
              </>
            )}
            
            {verificationStatus === 'query' && (
              <>
                <Typography variant="h6" gutterBottom sx={{ color: 'warning.main' }}>
                  Additional Information Needed
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  We need some additional information to complete your verification. 
                  Our team will contact you within 24 hours with specific requirements.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Please check your email and phone for updates from our verification team.
                </Typography>
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
          {verificationStatus === 'successful' && (
            <Button
              variant="contained"
              onClick={() => handleDialogAction('dashboard')}
              startIcon={<Person />}
              size="large"
            >
              Go to Dashboard
            </Button>
          )}
          
          {verificationStatus === 'unsuccessful' && (
            <>
              <Button
                variant="outlined"
                onClick={() => handleDialogAction('home')}
                startIcon={<Home />}
              >
                Back to Home
              </Button>
              <Button
                variant="contained"
                onClick={() => handleDialogAction('retry')}
                startIcon={<Refresh />}
              >
                Retry Verification
              </Button>
            </>
          )}
          
          {verificationStatus === 'query' && (
            <Button
              variant="contained"
              onClick={() => handleDialogAction('home')}
              startIcon={<Home />}
              size="large"
            >
              Back to Home
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileVerification;

