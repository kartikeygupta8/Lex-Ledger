import React, { useState } from 'react';
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
  LinearProgress,
} from '@mui/material';
import {
  ArrowBack,
  TrendingUp,
  AccountBalance,
  CheckCircle,
  Star,
  Schedule,
  Payment,
  Support,
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

const trackAFeatures = [
  'Commission-based earnings',
  'No upfront subscription fees',
  'Pay only when you earn',
  'Flexible payment structure',
  'Ideal for new professionals',
  'Lower initial investment',
];

const trackBFeatures = [
  'Fixed subscription model',
  'Higher profit margins',
  'Predictable monthly costs',
  'Premium profile visibility',
  'Priority customer support',
  'Advanced analytics dashboard',
];

const RevenueModelSelection = () => {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTrackSelection = (track) => {
    setSelectedTrack(track);
  };

  const handleContinue = () => {
    if (!selectedTrack) return;

    setLoading(true);
    
    // Store selected track
    const existingData = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
    const updatedData = {
      ...existingData,
      revenueModel: selectedTrack,
    };
    localStorage.setItem('expertRegistrationData', JSON.stringify(updatedData));

    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      navigate('/subscription-model');
    }, 1500);
  };

  const handleBack = () => {
    navigate('/otp-authentication');
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
            disabled={loading}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Select Revenue Model
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 3 of 8
          </Typography>
        </Toolbar>
        {loading && <LinearProgress color="secondary" />}
      </AppBar> */}

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
              Choose Your Revenue Model
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Select the revenue model that best suits your practice and business goals. 
              You can change this later based on your experience.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 4 ,justifyContent:"space-evenly"}}>
            {/* Track A - Commission Based */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
              
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    border: selectedTrack === 'trackA' ? 3 : 1,
                    borderColor: selectedTrack === 'trackA' ? 'primary.success' : 'divider',
                    transition: 'all 0.3s ease',
                    // position:"relative",
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 51, 102, 0.15)',
                    },
                  }}
                  onClick={() => handleTrackSelection('trackA')}
                >
                   
                  <CardContent sx={{ p: 4 }}>

                       {selectedTrack === 'trackA' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                    // position:"absolute",

                        }}
                      >
                        <Box sx={{ mt: 2, textAlign: 'end' }}>
                          <CheckCircle sx={{ color: '#4caf50', fontSize: 40 }} />
                         
                        </Box>
                      </motion.div>
                    )}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <TrendingUp sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                        Track A
                      </Typography>
                      <Chip 
                        label="Commission Based" 
                        color="primary" 
                        sx={{ mb: 2, fontWeight: 600 }}
                      />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        Pay as You Earn
                      </Typography>
                    </Box>
   
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
                        15-25% Commission
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                        on each successful transaction
                      </Typography>
                    </Box>

                    <List>
                      {trackAFeatures.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ color: '#4caf50', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature}
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'white', textAlign: 'center', fontWeight: 500 }}>
                        <Star sx={{ fontSize: 16, mr: 1 }} />
                        Perfect for beginners and those starting their practice
                      </Typography>
                    </Box>

                 
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Track B - Subscription Based */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    border: selectedTrack === 'trackB' ? 3 : 1,
                    borderColor: selectedTrack === 'trackB' ? 'primary.success' : 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(255, 162, 41, 0.15)',
                    },
                  }}
                  onClick={() => handleTrackSelection('trackB')}
                >
                  <CardContent sx={{ p: 4 }}>

                    {selectedTrack === 'trackB' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box sx={{ mt: 2, textAlign: 'end' }}>
                          <CheckCircle sx={{ color: '#4caf50', fontSize: 32 }} />
                      
                        </Box>
                      </motion.div>
                    )}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <AccountBalance sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                        Track B
                      </Typography>
                      <Chip 
                        label="Subscription Based" 
                        color="primary" 
                        sx={{ mb: 2, fontWeight: 600 }}
                      />
                      <Typography variant="h6" sx={{ color: 'text.primary' }}>
                        Fixed Monthly Fee
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
                        ₹2,999 - ₹9,999
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', textAlign: 'center' }}>
                        per month (based on plan)
                      </Typography>
                    </Box>

                    <List>
                      {trackBFeatures.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ color: '#4caf50', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature}
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.light', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'white', textAlign: 'center', fontWeight: 500 }}>
                        <Star sx={{ fontSize: 16, mr: 1 }} />
                        Ideal for established professionals with regular clients
                      </Typography>
                    </Box>

                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Comparison Table */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600, textAlign: 'center' }}>
                  Quick Comparison
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 2 ,justifyContent:"space-evenly"}}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Schedule sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Setup Time</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Track A: Immediate<br />
                        Track B: 24-48 hours
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Payment sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Payment Structure</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Track A: Per transaction<br />
                        Track B: Monthly subscription
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Support sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Support Level</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Track A: Standard<br />
                        Track B: Priority
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={loading}
              size="large"
            >
              Back
            </Button>
            
            <Button
              variant="contained"
              size="large"
              onClick={handleContinue}
              disabled={!selectedTrack || loading}
              sx={{ minWidth: 200 }}
            >
              {loading ? 'Processing...' : 'Continue to Subscription'}
            </Button>
          </Box>

          <Alert severity="info" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Note:</strong> You can switch between revenue models later from your dashboard. 
              The choice you make now will determine your initial setup process.
            </Typography>
          </Alert>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RevenueModelSelection;

