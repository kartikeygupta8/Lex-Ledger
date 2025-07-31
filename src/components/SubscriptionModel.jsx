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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  Star,
  TrendingUp,
  Business,
  Diamond,
  Schedule,
  Support,
  Analytics,
  Verified,
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

// Subscription plans for Track A (Commission-based)
const trackAPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    commission: '25%',
    color: 'primary',
    icon: <TrendingUp />,
    features: [
      'Basic profile listing',
      '25% commission on earnings',
      'Standard customer support',
      'Basic analytics',
      'Mobile app access',
    ],
    limitations: [
      'Limited profile visibility',
      'No priority support',
      'Basic reporting only',
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 999,
    commission: '20%',
    color: 'secondary',
    icon: <Business />,
    popular: true,
    features: [
      'Enhanced profile visibility',
      '20% commission on earnings',
      'Priority customer support',
      'Advanced analytics dashboard',
      'Marketing support',
      'Client management tools',
    ],
    limitations: [
      'Monthly subscription required',
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1999,
    commission: '15%',
    color: 'success',
    icon: <Diamond />,
    features: [
      'Maximum profile visibility',
      '15% commission on earnings',
      'Dedicated account manager',
      'Comprehensive analytics',
      'Priority marketing support',
      'Advanced client tools',
      'Custom branding options',
    ],
    limitations: []
  },
];

// Subscription plans for Track B (Subscription-based)
const trackBPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 2999,
    color: 'primary',
    icon: <TrendingUp />,
    features: [
      'Basic profile listing',
      'Up to 50 client interactions/month',
      'Standard support',
      'Basic analytics',
      'Mobile app access',
    ],
    limitations: [
      'Limited client interactions',
      'Basic features only',
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 5999,
    color: 'secondary',
    icon: <Business />,
    popular: true,
    features: [
      'Enhanced profile visibility',
      'Up to 200 client interactions/month',
      'Priority support',
      'Advanced analytics',
      'Marketing support',
      'Client management tools',
      'Custom profile themes',
    ],
    limitations: [
      'Interaction limits apply',
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 9999,
    color: 'success',
    icon: <Diamond />,
    features: [
      'Maximum visibility & priority listing',
      'Unlimited client interactions',
      'Dedicated account manager',
      'Comprehensive analytics & reports',
      'Full marketing support',
      'Advanced client management',
      'Custom branding & white-label options',
      'API access for integrations',
    ],
    limitations: []
  },
];

const SubscriptionModel = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [revenueModel, setRevenueModel] = useState('');

  useEffect(() => {
    // Get revenue model from localStorage
    const userData = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
    setRevenueModel(userData.revenueModel || '');
  }, []);

  const plans = revenueModel === 'trackA' ? trackAPlans : trackBPlans;

  const handlePlanSelection = (planId) => {
    setSelectedPlan(planId);
  };

  const handleContinue = () => {
    if (!selectedPlan) return;

    setLoading(true);
    
    // Store selected plan
    const existingData = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
    const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
    const updatedData = {
      ...existingData,
      subscriptionPlan: selectedPlanData,
    };
    localStorage.setItem('expertRegistrationData', JSON.stringify(updatedData));

    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      navigate('/aadhar-pan-verification');
    }, 1500);
  };

  const handleBack = () => {
    navigate('/revenue-model');
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
            Select Subscription Plan
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 4 of 8
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
              Choose Your Subscription Plan
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              {revenueModel === 'trackA' 
                ? 'Select a plan that complements your commission-based revenue model'
                : 'Choose a subscription plan that fits your business needs and client volume'
              }
            </Typography>
            <Chip 
              label={revenueModel === 'trackA' ? 'Track A - Commission Based' : 'Track B - Subscription Based'}
              color={revenueModel === 'trackA' ? 'primary' : 'secondary'}
              sx={{ mt: 2, fontWeight: 600 }}
            />
          </Box>

          <Grid container spacing={4} sx={{ mb: 4 ,justifyContent:"space-evenly"}}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={3} key={plan.id}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      border: selectedPlan === plan.id ? 3 : 1,
                      borderColor: selectedPlan === plan.id ? `${plan.color}.main` : 'divider',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                      },
                      overflow:"visible",
                      width:"300px"
                      // maxWidth:"450px"
                    }}
                    onClick={() => handlePlanSelection(plan.id)}
                  >
                        {selectedPlan === plan.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{position:"absolute",right:0}}
                        >
                          <Box sx={{ textAlign: 'end' }}>
                            <CheckCircle sx={{ color: '#4caf50', fontSize: 32 }} />
                    
                          </Box>
                        </motion.div>
                      )}
                    {plan.popular && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          zIndex: 1,
                        }}
                      >
                        <Chip
                          label="Most Popular"
                          color="secondary"
                          size="small"
                          sx={{ fontWeight: 600 }}
                          icon={<Star />}
                        />
                      </Box>
                    )}

                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Box sx={{ color: `${plan.color}.main`, mb: 1 }}>
                          {React.cloneElement(plan.icon, { sx: { fontSize: 48 } })}
                        </Box>
                        <Typography variant="h5" gutterBottom sx={{ color: `${plan.color}.main`, fontWeight: 600 }}>
                          {plan.name}
                        </Typography>
                      
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                            {plan.price === 0 ? 'Free' : `₹${plan.price.toLocaleString()}`}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {plan.price === 0 ? 'No monthly fee' : 'per month'}
                          </Typography>
                          {plan.commission && (
                            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, mt: 1 }}>
                              + {plan.commission} commission
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                          Features Included:
                        </Typography>
                        <List dense>
                          {plan.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 28 }}>
                                <CheckCircle sx={{ color: '#4caf50', fontSize: 18 }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={feature}
                                sx={{ '& .MuiListItemText-primary': { fontSize: '0.85rem' } }}
                              />
                            </ListItem>
                          ))}
                        </List>

                        {plan.limitations.length > 0 && (
                          <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}>
                              Limitations:
                            </Typography>
                            <List dense>
                              {plan.limitations.map((limitation, idx) => (
                                <ListItem key={idx} sx={{ px: 0, py: 0.25 }}>
                                  <ListItemText 
                                    primary={`• ${limitation}`}
                                    sx={{ 
                                      '& .MuiListItemText-primary': { 
                                        fontSize: '0.8rem',
                                        color: 'text.secondary'
                                      } 
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}
                      </Box>

                    
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Plan Comparison */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600, textAlign: 'center' }}>
                  What's Included
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Verified sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Profile Verification</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        All plans include professional profile verification
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Support sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Customer Support</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        24/7 support with varying response times
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Analytics sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Analytics</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Track your performance and earnings
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Schedule sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>Flexible Billing</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Change or cancel your plan anytime
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
              disabled={!selectedPlan || loading}
              sx={{ minWidth: 200 }}
            >
              {loading ? 'Processing...' : 'Continue to Verification'}
            </Button>
          </Box>

          <Alert severity="info" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Note:</strong> You can upgrade or downgrade your plan at any time from your dashboard. 
              {revenueModel === 'trackA' && ' Commission rates are fixed per plan and cannot be changed separately.'}
            </Typography>
          </Alert>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SubscriptionModel;

