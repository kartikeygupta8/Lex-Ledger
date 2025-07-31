import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  Gavel,
  AccountBalance,
  Business,
  TrendingUp,
  People,
  Star,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const benefits = [
  'Connect with thousands of potential clients',
  'Flexible revenue models to suit your practice',
  'Professional profile verification',
  'Secure payment processing',
  'Marketing support and visibility',
  'Professional development resources',
];

const expertTypes = [
  {
    icon: <Gavel sx={{ fontSize: 48, color: '#003366' }} />,
    title: 'Legal Experts',
    description: 'Lawyers, Legal Consultants, and Legal Advisors',
    specialties: ['Corporate Law', 'Criminal Law', 'Family Law', 'Property Law']
  },
  {
    icon: <AccountBalance sx={{ fontSize: 48, color: '#003366' }} />,
    title: 'Financial Experts',
    description: 'Chartered Accountants and Financial Advisors',
    specialties: ['Tax Planning', 'Audit Services', 'Financial Consulting', 'GST Services']
  },
  {
    icon: <Business sx={{ fontSize: 48, color: '#003366' }} />,
    title: 'Business Consultants',
    description: 'Business Setup and Compliance Experts',
    specialties: ['Company Registration', 'License Procurement', 'Compliance Management', 'Startup Consulting']
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoinAsExpert = () => {
    navigate('/expert-registration');
  };

  return (
    <Box>
      {/* Header */}
      {/* <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Lex & Ledger
          </Typography>
          <Button color="inherit" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            sx={{ 
              borderColor: 'white',
              '&:hover': { 
                borderColor: 'secondary.main',
                backgroundColor: 'secondary.main',
                color: 'primary.main'
              }
            }}
          >
            Find Experts
          </Button>
        </Toolbar>
      </AppBar> */}

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #003366 0%, #164760 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Typography variant="h1" gutterBottom>
                  Join Lex & Ledger as an Expert
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Connect with clients seeking professional legal and financial services. 
                  Build your practice with our comprehensive platform.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleJoinAsExpert}
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'primary.main',
                      fontWeight: 700,
                      '&:hover': { bgcolor: 'secondary.light' }
                    }}
                    endIcon={<ArrowForward />}
                  >
                    Start Registration
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <Card sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                      Why Join Our Platform?
                    </Typography>
                    <List>
                      {benefits.map((benefit, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={benefit} 
                            sx={{ '& .MuiListItemText-primary': { color: 'white', fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Expert Types Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
            Who Can Join?
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
            We welcome qualified professionals from various fields
          </Typography>
          
          <Grid container spacing={4}>
            {expertTypes.map((type, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        {type.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                        {type.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        {type.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                        Specialties:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {type.specialties.map((specialty, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              px: 2,
                              py: 0.5,
                              borderRadius: 20,
                              fontSize: '0.75rem',
                            }}
                          >
                            {specialty}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            <Grid item xs={12} sm={3}>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
                1000+
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Active Experts
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
                50K+
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Clients Served
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
                4.8
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                <Star sx={{ color: 'secondary.main' }} />
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  Rating
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700 }}>
                24/7
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Support
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" gutterBottom>
                Ready to Start Your Journey?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join thousands of professionals who have grown their practice with Lex & Ledger
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleJoinAsExpert}
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'primary.main',
                  fontWeight: 700,
                  px: 4,
                  py: 2,
                  '&:hover': { bgcolor: 'secondary.light' }
                }}
                endIcon={<ArrowForward />}
              >
                Begin Expert Registration
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#001122', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                Lex & Ledger
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Connecting clients with expert legal and financial professionals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                © 2024 Lex & Ledger. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;

