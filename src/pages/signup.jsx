import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userType, setUserType] = useState("user");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    expertise: "",
  });
const navigate=useNavigate()
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const validate = (values) => {
    let newErrors = {};
    if (!values.firstName) newErrors.firstName = "First name is required";
    if (!values.lastName) newErrors.lastName = "Last name is required";
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!values.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(values.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (userType === "expert" && !values.expertise) {
      newErrors.expertise = "Expertise ID is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      console.log("Form Submitted", formData);
      navigate("/otp")
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
        background: "linear-gradient(to right, #F4F4F4, #D9D9D9)",

        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={6} sx={{ borderRadius: 4 }}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                background: "#0b0e2a",
                color: "white",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Welcome!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Join our community and explore new opportunities.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Sign up to get started and gain access to exclusive features.
              </Typography>
            </Grid>

            <Grid item xs={12} md={7} sx={{ padding: 4 }}>
              <Typography variant="h4" fontWeight="bold" color="#333" gutterBottom>
                Create Account
              </Typography>

              {/* <FormControl component="fieldset" sx={{ mb: 2 }}>
                <FormLabel component="legend" sx={{ fontWeight: "bold", color: "#0b0e2a" }}>
                  Select Account Type
                </FormLabel>
                <RadioGroup row value={userType} onChange={handleUserTypeChange}>
                  <FormControlLabel
                    value="user"
                    control={<Radio sx={{ color: "#0b0e2a" }} />}
                    label="User"
                  />
                  <FormControlLabel
                    value="expert"
                    control={<Radio sx={{ color: "#0b0e2a" }} />}
                    label="Expert"
                  />
                </RadioGroup>
              </FormControl> */}

              <Box display="grid" gap={2}>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                {userType === "expert" && (
                  <TextField
                    label="Expertise ID"
                    name="expertise"
                    fullWidth
                    onChange={handleChange}
                    error={!!errors.expertise}
                    helperText={errors.expertise}
                  />
                )}
                <TextField
                  label="Mobile Number"
                  name="mobile"
                  fullWidth
                  onChange={handleChange}
                  error={!!errors.mobile}
                  helperText={errors.mobile}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, bgcolor: "#FF8C00" }}
                  onClick={handleSubmit}
                  disabled={Object.keys(errors).length > 0 || !formData.firstName || !formData.lastName || !formData.email || !formData.mobile || (userType === "expert" && !formData.expertise)}
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
