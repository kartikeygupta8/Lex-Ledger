import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Alert,
  LinearProgress,
  Grid,
  InputAdornment,
} from '@mui/material';
import {
  ArrowBack,
  Sms,
  Timer,
  CheckCircle,
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

const OTPAuthentication = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [canResend, setCanResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
  const maskedPhone = userData.phoneNumber ? 
    `${userData.phoneNumber.slice(0, 2)}****${userData.phoneNumber.slice(-2)}` : 
    'your registered number';

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index, value) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleKeyDown = (index, event) => {
    // Handle backspace
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text').replace(/\D/g, '');
    
    if (pastedData.length === 6) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      setError('');
    }
  };

  const validateOtp = () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter the complete 6-digit OTP');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateOtp()) return;

    setLoading(true);
    setError('');

    // Simulate OTP verification
    setTimeout(() => {
      const otpString = otp.join('');
      
      // For demo purposes, accept any 6-digit OTP
      if (otpString === '123456' || otpString.length === 6) {
        setSuccess(true);
        setTimeout(() => {
          setLoading(false);
          navigate('/revenue-model');
        }, 1500);
      } else {
        setLoading(false);
        setError('Invalid OTP. Please try again.');
      }
    }, 2000);
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    setError('');
    
    // Simulate resend OTP
    setTimeout(() => {
      setResendLoading(false);
      setTimeLeft(300);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      // Focus first input
      const firstInput = document.getElementById('otp-0');
      if (firstInput) firstInput.focus();
    }, 1000);
  };

  const handleBack = () => {
    navigate('/expert-registration');
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
            OTP Verification
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 2 of 8
          </Typography>
        </Toolbar>
        {loading && <LinearProgress color="secondary" />}
      </AppBar> */}

      <Container maxWidth="sm" sx={{ py: 4 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Sms sx={{ fontSize: 64, color: 'primary.main' }} />
                </Box>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Verify Your Phone Number
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  We've sent a 6-digit verification code to
                </Typography>
                <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  +91 {maskedPhone}
                </Typography>
              </Box>

              {success ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <CheckCircle sx={{ fontSize: 80, color: "success.main", mb: 2 }} />
                    <Typography variant="h5" sx={{ color: '#4caf50', fontWeight: 600 }}>
                      Verification Successful!
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
                      Redirecting to next step...
                    </Typography>
                  </Box>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body2" sx={{ mb: 2, textAlign: 'center', color: 'text.secondary' }}>
                      Enter the 6-digit code
                    </Typography>
                    
                    <Grid container spacing={1} justifyContent="center">
                      {otp.map((digit, index) => (
                        <Grid item key={index}>
                          <TextField
                            id={`otp-${index}`}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            inputProps={{
                              maxLength: 1,
                              style: {
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                width: '40px',
                                height: '40px',
                                padding: '8px',
                              },
                            }}
                            sx={{
                              width: '56px',
                              '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                  borderColor: 'primary.main',
                                  borderWidth: 2,
                                },
                              },
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  )}

                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <Timer sx={{ color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Time remaining: {formatTime(timeLeft)}
                      </Typography>
                    </Box>
                    
                    {canResend ? (
                      <Button
                        variant="text"
                        onClick={handleResendOtp}
                        disabled={resendLoading}
                        sx={{ textTransform: 'none' }}
                      >
                        {resendLoading ? 'Sending...' : 'Resend OTP'}
                      </Button>
                    ) : (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Didn't receive the code? You can resend in {formatTime(timeLeft)}
                      </Typography>
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                      variant="outlined"
                      onClick={handleBack}
                      disabled={loading}
                    >
                      Back
                    </Button>
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading || otp.join('').length !== 6}
                      sx={{ minWidth: 200 }}
                    >
                      {loading ? 'Verifying...' : 'Verify & Continue'}
                    </Button>
                  </Box>
                </form>
              )}
            </CardContent>
          </Card>

          <Alert severity="info">
            <Typography variant="body2">
              <strong>Demo Note:</strong> For testing purposes, you can use any 6-digit number as OTP, 
              or use <strong>123456</strong> for instant verification.
            </Typography>
          </Alert>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OTPAuthentication;

