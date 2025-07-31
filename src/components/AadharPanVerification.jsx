import React, { useState } from 'react';
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
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  LinearProgress,
  Chip,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import {
  ArrowBack,
  CreditCard,
  AccountBox,
  CloudUpload,
  CheckCircle,
  Warning,
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

const steps = ['Document Upload', 'Verification', 'Approval'];

const AadharPanVerification = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    aadharNumber: '',
    panNumber: '',
    aadharFile: null,
    panFile: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({
    aadhar: '',
    pan: '',
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  const handleFileUpload = (field) => (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors({
          ...errors,
          [field]: 'Please upload a valid image (JPG, PNG) or PDF file',
        });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          [field]: 'File size should be less than 5MB',
        });
        return;
      }

      setFormData({
        ...formData,
        [`${field}File`]: file,
      });

      setUploadStatus({
        ...uploadStatus,
        [field]: 'uploaded',
      });

      // Clear error
      if (errors[field]) {
        setErrors({
          ...errors,
          [field]: '',
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Aadhar validation
    const aadharRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
    if (!formData.aadharNumber) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!aadharRegex.test(formData.aadharNumber.replace(/\s/g, ''))) {
      newErrors.aadharNumber = 'Please enter a valid 12-digit Aadhar number';
    }

    // PAN validation
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!formData.panNumber) {
      newErrors.panNumber = 'PAN number is required';
    } else if (!panRegex.test(formData.panNumber.toUpperCase())) {
      newErrors.panNumber = 'Please enter a valid PAN number (e.g., ABCDE1234F)';
    }

    // File validation
    if (!formData.aadharFile) {
      newErrors.aadharFile = 'Please upload Aadhar card document';
    }

    if (!formData.panFile) {
      newErrors.panFile = 'Please upload PAN card document';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setActiveStep(1);
    
    // Simulate document verification process
    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        // Store verification data
        const existingData = JSON.parse(localStorage.getItem('expertRegistrationData') || '{}');
        const updatedData = {
          ...existingData,
          verification: {
            aadharNumber: formData.aadharNumber,
            panNumber: formData.panNumber.toUpperCase(),
            status: 'verified',
            verifiedAt: new Date().toISOString(),
          },
        };
        localStorage.setItem('expertRegistrationData', JSON.stringify(updatedData));
        
        setLoading(false);
        navigate('/bank-details');
      }, 2000);
    }, 3000);
  };

  const handleBack = () => {
    navigate('/subscription-model');
  };

  const formatAadhar = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
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
            Document Verification
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 5 of 8
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
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
              Aadhar & PAN Verification
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Please provide your Aadhar and PAN details for identity verification. 
              This information is required for compliance and security purposes.
            </Typography>
          </Box>

          {/* Progress Stepper */}
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconProps={{
                        sx: {
                          '&.Mui-active': { color: 'primary.main' },
                          '&.Mui-completed': { color: '#4caf50' },
                        }
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>

          {activeStep === 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    {/* Aadhar Section */}
                    <div style={{flex:1}}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <AccountBox sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                          Aadhar Card Details
                        </Typography>
                      </Box>
                    </div>

                    <div style={{flex:1}}>
                      <TextField
                        fullWidth
                        label="Aadhar Number"
                        value={formData.aadharNumber}
                        onChange={(e) => {
                          const formatted = formatAadhar(e.target.value);
                          if (formatted.replace(/\s/g, '').length <= 12) {
                            handleInputChange('aadharNumber')({ target: { value: formatted } });
                          }
                        }}
                        error={!!errors.aadharNumber}
                        helperText={errors.aadharNumber}
                        placeholder="1234 5678 9012"
                        required
                      />
                    </div>

                    <div style={{flex:1}}>
                      <Box>
                        <input
                          accept="image/*,.pdf"
                          style={{ display: 'none' }}
                          id="aadhar-upload"
                          type="file"
                          onChange={handleFileUpload('aadhar')}
                        />
                        <label htmlFor="aadhar-upload">
                          <Button
                            variant="outlined"
                            component="span"
                            fullWidth
                            startIcon={uploadStatus.aadhar === 'uploaded' ? <CheckCircle /> : <CloudUpload />}
                            sx={{ 
                              height: 56,
                              color: uploadStatus.aadhar === 'uploaded' ? '#4caf50' : 'primary.main',
                              borderColor: uploadStatus.aadhar === 'uploaded' ? '#4caf50' : 'primary.main',
                            }}
                          >
                            {uploadStatus.aadhar === 'uploaded' ? 'Aadhar Uploaded' : 'Upload Aadhar Card'}
                          </Button>
                        </label>
                        {errors.aadharFile && (
                          <Typography variant="caption" color="error" sx={{ mt: 0.5, display: 'block' }}>
                            {errors.aadharFile}
                          </Typography>
                        )}
                      </Box>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px'}}>
                    {/* PAN Section */}
                    <div style={{flex:1}}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }}>
                        <CreditCard sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                          PAN Card Details
                        </Typography>
                      </Box>
                    </div>

                    <div style={{flex:1}}>
                      <TextField
                        fullWidth
                        label="PAN Number"
                        value={formData.panNumber}
                        onChange={(e) => {
                          const value = e.target.value.toUpperCase();
                          if (value.length <= 10) {
                            handleInputChange('panNumber')({ target: { value } });
                          }
                        }}
                        error={!!errors.panNumber}
                        helperText={errors.panNumber}
                        placeholder="ABCDE1234F"
                        required
                      />
                    </div>

                    <div style={{flex:1}}>
                      <Box>
                        <input
                          accept="image/*,.pdf"
                          style={{ display: 'none' }}
                          id="pan-upload"
                          type="file"
                          onChange={handleFileUpload('pan')}
                        />
                        <label htmlFor="pan-upload">
                          <Button
                            variant="outlined"
                            component="span"
                            fullWidth
                            startIcon={uploadStatus.pan === 'uploaded' ? <CheckCircle /> : <CloudUpload />}
                            sx={{ 
                              height: 56,
                              color: uploadStatus.pan === 'uploaded' ? '#4caf50' : 'primary.main',
                              borderColor: uploadStatus.pan === 'uploaded' ? '#4caf50' : 'primary.main',
                            }}
                          >
                            {uploadStatus.pan === 'uploaded' ? 'PAN Uploaded' : 'Upload PAN Card'}
                          </Button>
                        </label>
                        {errors.panFile && (
                          <Typography variant="caption" color="error" sx={{ mt: 0.5, display: 'block' }}>
                            {errors.panFile}
                          </Typography>
                        )}
                      </Box>
                    </div>
                  </div>

                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                      variant="outlined"
                      onClick={handleBack}
                      disabled={loading}
                      size="large"
                    >
                      Back
                    </Button>
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      sx={{ minWidth: 200 }}
                    >
                      Verify Documents
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          )}

          {activeStep === 1 && (
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ py: 4 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Warning sx={{ fontSize: 80, color: 'warning.main', mb: 2 }} />
                  </motion.div>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                    Verifying Your Documents
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Please wait while we verify your Aadhar and PAN details. This may take a few moments.
                  </Typography>
                  <LinearProgress sx={{ width: '60%', mx: 'auto' }} />
                </Box>
              </CardContent>
            </Card>
          )}

          {activeStep === 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ mb: 4 }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ py: 4 }}>
                    <CheckCircle sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
                    <Typography variant="h5" gutterBottom sx={{ color: '#4caf50', fontWeight: 600 }}>
                      Documents Verified Successfully!
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      Your Aadhar and PAN details have been verified. Proceeding to bank details...
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Chip
                        icon={<CheckCircle />}
                        label="Aadhar Verified"
                        color="success"
                        variant="outlined"
                      />
                      <Chip
                        icon={<CheckCircle />}
                        label="PAN Verified"
                        color="success"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              <strong>Security Note:</strong> Your documents are encrypted and stored securely. 
              We use bank-level security measures to protect your personal information.
            </Typography>
          </Alert>

          <Alert severity="warning">
            <Typography variant="body2">
              <strong>Important:</strong> Ensure that the documents you upload are clear and readable. 
              Blurry or unclear documents may cause verification delays.
            </Typography>
          </Alert>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AadharPanVerification;

