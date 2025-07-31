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
  Divider,
  Alert,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import {
  ArrowBack,
  Payment,
  CheckCircle,
  CreditCard,
  AccountBalance,
  Security,
  Receipt,
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

const PaySubscription = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDialog, setPaymentDialog] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const data = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
    setUserData(data);
  }, []);

  const subscriptionPlan = userData.subscriptionPlan || {};
  const revenueModel = userData.revenueModel || '';
  const isTrackA = revenueModel === 'trackA';

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setPaymentDialog(true);
  };

  const handlePayment = async () => {
    setPaymentProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      
      // Update user data with payment info
      const updatedData = {
        ...userData,
        payment: {
          method: paymentMethod,
          amount: subscriptionPlan.price || 0,
          status: 'completed',
          transactionId: `TXN${Date.now()}`,
          paidAt: new Date().toISOString(),
        },
        registrationStatus: 'payment_completed',
      };
      localStorage.setItem('expertRegistrationData', JSON.stringify(updatedData));
      
      setTimeout(() => {
        setPaymentDialog(false);
        navigate('/profile-verification');
      }, 2000);
    }, 3000);
  };

  const handleSkipPayment = () => {
    // For free plans or Track A basic
    const updatedData = {
      ...userData,
      payment: {
        method: 'none',
        amount: 0,
        status: 'skipped',
        paidAt: new Date().toISOString(),
      },
      registrationStatus: 'payment_skipped',
    };
    localStorage.setItem('expertRegistrationData', JSON.stringify(updatedData));
    navigate('/profile-verification');
  };

  const handleBack = () => {
    navigate('/bank-details');
  };

  const shouldShowPayment = subscriptionPlan.price > 0;

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
            Payment & Subscription
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 7 of 8
          </Typography>
        </Toolbar>
        {loading && <LinearProgress color="secondary" />}
      </AppBar> */}

      <Container maxWidth="md" sx={{ py: 4 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Payment sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
              Complete Your Subscription
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Review your selected plan and complete the payment to activate your expert profile.
            </Typography>
          </Box>

          {/* Plan Summary */}
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                Plan Summary
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {subscriptionPlan.name} Plan
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {isTrackA ? 'Commission-based Revenue Model' : 'Subscription-based Revenue Model'}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                      <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {subscriptionPlan.price === 0 ? 'Free' : `₹${subscriptionPlan.price?.toLocaleString()}`}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                        {subscriptionPlan.price === 0 ? '' : '/month'}
                      </Typography>
                    </Box>
                    
                    {subscriptionPlan.commission && (
                      <Chip
                        label={`${subscriptionPlan.commission} Commission`}
                        color="secondary"
                        size="small"
                        sx={{ mb: 2 }}
                      />
                    )}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                    Plan Features:
                  </Typography>
                  <List dense>
                    {subscriptionPlan.features?.slice(0, 5).map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <CheckCircle sx={{ color: '#4caf50', fontSize: 16, mr: 1 }} />
                        <ListItemText 
                          primary={feature}
                          sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Payment Section */}
          {shouldShowPayment ? (
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Choose Payment Method
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        cursor: 'pointer',
                        border: 2,
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                      }}
                      onClick={() => handlePaymentMethodSelect('card')}
                    >
                      <CardContent sx={{ textAlign: 'center', py: 3 }}>
                        <CreditCard sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                          Credit/Debit Card
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Pay securely with your card
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        cursor: 'pointer',
                        border: 2,
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                      }}
                      onClick={() => handlePaymentMethodSelect('netbanking')}
                    >
                      <CardContent sx={{ textAlign: 'center', py: 3 }}>
                        <AccountBalance sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                          Net Banking
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Pay through your bank account
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, p: 3,  borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Security sx={{ color: '#4caf50', mr: 1 }} />
                    <Typography variant="h6" sx={{ color: '#4caf50', fontWeight: 600 }}>
                      Secure Payment
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#4caf50' }}>
                    Your payment information is encrypted and processed securely. 
                    We use industry-standard security measures to protect your financial data.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ) : (
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <CheckCircle sx={{ fontSize: 64, color: '#4caf50', mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ color: '#4caf50', fontWeight: 600 }}>
                  No Payment Required
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  You've selected a free plan. You can proceed directly to profile verification.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSkipPayment}
                  sx={{ minWidth: 200 }}
                >
                  Continue to Verification
                </Button>
              </CardContent>
            </Card>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={loading}
              size="large"
            >
              Back
            </Button>
            
            {!shouldShowPayment && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                No payment required for this plan
              </Typography>
            )}
          </Box>

          <Alert severity="info" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Note:</strong> You can change your subscription plan at any time from your dashboard. 
              Refunds are available as per our refund policy.
            </Typography>
          </Alert>
        </motion.div>
      </Container>

      {/* Payment Dialog */}
      <Dialog
        open={paymentDialog}
        onClose={() => !paymentProcessing && setPaymentDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
          {paymentSuccess ? 'Payment Successful!' : 'Complete Payment'}
        </DialogTitle>
        <DialogContent>
          {paymentProcessing ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CircularProgress size={60} sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Processing Payment...
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Please wait while we process your payment securely.
              </Typography>
            </Box>
          ) : paymentSuccess ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CheckCircle sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ color: '#4caf50' }}>
                Payment Completed Successfully!
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Transaction ID: TXN{Date.now()}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Redirecting to profile verification...
              </Typography>
            </Box>
          ) : (
            <Box sx={{ py: 2 }}>
              <Typography variant="h6" gutterBottom>
                Payment Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Plan:</Typography>
                <Typography fontWeight={600}>{subscriptionPlan.name}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Amount:</Typography>
                <Typography fontWeight={600}>₹{subscriptionPlan.price?.toLocaleString()}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Payment Method:</Typography>
                <Typography fontWeight={600}>
                  {paymentMethod === 'card' ? 'Credit/Debit Card' : 'Net Banking'}
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary.main">
                  ₹{subscriptionPlan.price?.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        {!paymentProcessing && !paymentSuccess && (
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setPaymentDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handlePayment}
              startIcon={<Payment />}
            >
              Pay Now
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </Box>
  );
};

export default PaySubscription;

