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
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Alert,
  LinearProgress,
} from '@mui/material';
import {
  ArrowBack,
  Person,
  Email,
  Phone,
  Work,
  Business,
  Description,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import RegistrationStepper from './stepper';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const professions = [
  'Lawyer',
  'Chartered Accountant',
  'Legal Consultant',
  'Tax Advisor',
  'Business Consultant',
  'Financial Advisor',
  'Company Secretary',
  'Legal Advisor',
];

const servicesOffered = [
  'Corporate Law',
  'Criminal Law',
  'Family Law',
  'Property Law',
  'Tax Planning',
  'Audit Services',
  'GST Services',
  'Company Registration',
  'License Procurement',
  'Compliance Management',
  'Financial Consulting',
  'Investment Advisory',
  'Trademark Registration',
  'Patent Filing',
  'Contract Drafting',
  'Legal Documentation',
];

const ExpertRegistration = ({activeStep, setActiveStep}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    profession: 'Lawyer',
    professionalRegistrationNumber: '',
    servicesOffered: ["Corporate Law"],
    gstNumber: '09AAACH7409R1ZZ',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  const handleServicesChange = (event) => {
    setFormData({
      ...formData,
      servicesOffered: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    // Profession validation
    if (!formData.profession) {
      newErrors.profession = 'Profession is required';
    }

    // Professional registration number validation
    if (!formData.professionalRegistrationNumber) {
      newErrors.professionalRegistrationNumber = 'Professional registration number is required';
    }

    // Services validation
    if (formData.servicesOffered.length === 0) {
      newErrors.servicesOffered = 'Please select at least one service';
    }

    // GST validation (optional but if provided should be valid)
    if (formData.gstNumber) {
      const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      if (!gstRegex.test(formData.gstNumber)) {
        newErrors.gstNumber = 'Please enter a valid GST number';
      }
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
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Store form data in localStorage for demo purposes
      localStorage.setItem('expertRegistrationData', JSON.stringify(formData));
      navigate('/otp-authentication');
    }, 2000);
  };

  const handleBack = () => {
    navigate('/');
  };
//09AAACH7409R1ZZ
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
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Expert Registration
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Step 1 of 8
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
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Expert Registration
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Please provide your professional details to get started
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Box container spacing={3} display={"flex"} gap={3} flexDirection={"column"}>
                  {/* Email */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: <Email sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                      required
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange('phoneNumber')}
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber}
                      InputProps={{
                        startAdornment: <Phone sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                      placeholder="10-digit mobile number"
                      required
                    />
                  </Grid>

                  {/* Profession */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.profession}>
                      <InputLabel>Profession</InputLabel>
                      <Select
                        value={formData.profession}
                        onChange={handleInputChange('profession')}
                        label="Profession"
                        startAdornment={<Work sx={{ color: 'text.secondary', mr: 1 }} />}
                      >
                        {professions.map((profession) => (
                          <MenuItem key={profession} value={profession}>
                            {profession}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.profession && (
                        <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 2 }}>
                          {errors.profession}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>

                  {/* Professional Registration Number */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Professional Registration Number"
                      value={formData.professionalRegistrationNumber}
                      onChange={handleInputChange('professionalRegistrationNumber')}
                      error={!!errors.professionalRegistrationNumber}
                      helperText={errors.professionalRegistrationNumber}
                      InputProps={{
                        startAdornment: <Business sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                      placeholder="e.g., Bar Council No., CA Registration No."
                      required
                    />
                  </Grid>

                  {/* Services Offered */}
                  <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.servicesOffered}>
                      <InputLabel>Services Offered</InputLabel>
                      <Select
                        multiple
                        value={formData.servicesOffered}
                        onChange={handleServicesChange}
                        label="Services Offered"
                        renderValue={(selected) => (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} size="small" />
                            ))}
                          </Box>
                        )}
                      >
                        {servicesOffered.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.servicesOffered && (
                        <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 2 }}>
                          {errors.servicesOffered}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>

                  {/* GST Number (Optional) */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="GST Number (Optional)"
                      value={formData.gstNumber}
                      onChange={handleInputChange('gstNumber')}
                      error={!!errors.gstNumber}
                      helperText={errors.gstNumber || 'Leave blank if not applicable'}
                      InputProps={{
                        startAdornment: <Description sx={{ color: 'text.secondary', mr: 1 }} />,
                      }}
                      placeholder="15-digit GST number"
                    />
                  </Grid>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    disabled={loading}
                  >
                    Back to Landing
                  </Button>
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{ minWidth: 200 }}
                  >
                    {loading ? 'Processing...' : 'Continue to OTP Verification'}
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>

          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              <strong>Note:</strong> All information provided will be verified during the profile verification process. 
              Please ensure accuracy to avoid delays in approval.
            </Typography>
          </Alert>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExpertRegistration;

