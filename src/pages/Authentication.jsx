import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Password, Reviews as ReviewsIcon } from "@mui/icons-material";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const { colors,navigate,setHistoryTitles,historyTitles } = useContext(AppContext);

  const toggleHandler = () => {
    setIsLogin((prev) => !prev);
  };

  //Registration
  const [registrationFormData, setRegistrationFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegistrationFormSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm(registrationFormData);
    if (Object.keys(validationError).length === 0) {
        console.log("The object is empty");
    } else{
        console.log(registrationFormData);
        setErrors(validationError);
    }
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationFormData({ ...registrationFormData, [name]: value });
  };

  //login
  const [loginFormData, setLoginFormData] = useState({
    email: "example@gmail.com",
    password: "12345",
  });

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    setHistoryTitles((prev) => [
      {
        chatTitle: `chat title ${prev.length + 1}`,
        to: `/chat/${prev.length + 1}`,
      },
      ...prev, // Add new chat at the beginning
    ]);
    
    navigate(`chat/${historyTitles.length+1}`);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  //Form validation
  const validateForm = (data) => {
    const errors = {};

    // Full Name Validation
    if (!data.fullname.trim()) {
      errors.fullname = "Full name is required";
    } else if (!/^[a-zA-Z\s]{3,}$/.test(data.fullname)) {
      errors.fullname =
        "Full name must be at least 3 characters and contain only letters";
    }

    // Email Validation
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    // Password Validation
    if (!data.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        data.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character";
    }

    // Confirm Password Validation: Must match password
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <main
      style={{
        backgroundColor: colors?.customPrimaryColor || "#f0f0f0", // Add a fallback color
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={2}
          sx={{
            padding: "40px",
            borderRadius: ".8rem",
          }}
        >
          <Stack
            color={colors.customPrimaryColor}
            direction={"row"}
            alignItems={"center"}
            marginBottom={"2rem"}
            justifyContent={"center"}
            gap={"1rem"}
          >
            <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
              EchoGPT
            </Typography>
            <ReviewsIcon fontSize={"large"} />
          </Stack>
          {isLogin ? (
            <>
              <Typography variant="h5">Sign In</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLoginFormSubmit}
              >
                <TextField
                  required
                  fullWidth
                  size="small"
                  name="email"
                  label="Email"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  value={loginFormData.email}
                  onChange={handleLoginInputChange}
                />
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={loginFormData.password}
                  onChange={handleLoginInputChange}
                />
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button fullWidth variant="text" onClick={toggleHandler}>
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleRegistrationFormSubmit}
              >
                <Typography
                  m={"1rem auto"}
                  width={"fit-content"}
                  display={"block"}
                  color="error"
                  variant="caption"
                ></Typography>

                <TextField
                  size="small"
                  fullWidth
                  label="Full Name"
                  name="fullname"
                  margin="normal"
                  variant="outlined"
                  value={registrationFormData.fullname}
                  onChange={handleRegistrationInputChange}
                />
                {errors.fullname && (
                  <Typography color="error" variant="caption">
                    {errors.fullname}
                  </Typography>
                )}
                <TextField
                  size="small"
                  fullWidth
                  name="email"
                  label="Email"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  value={registrationFormData.email}
                  onChange={handleRegistrationInputChange}
                />
                {errors.email && (
                  <Typography color="error" variant="caption">
                    {errors.email}
                  </Typography>
                )}

                <TextField
                  size="small"
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="password"
                  value={registrationFormData.password}
                  onChange={handleRegistrationInputChange}
                />
                {errors.password && (
                  <Typography color="error" variant="caption">
                    {errors.password}
                  </Typography>
                )}
                <TextField
                  size="small"
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="confirmPassword"
                  value={registrationFormData.confirmPassword}
                  onChange={handleRegistrationInputChange}
                />
                {errors.confirmPassword && (
                  <Typography color="error" variant="caption">
                    {errors.confirmPassword}
                  </Typography>
                )}
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button fullWidth variant="text" onClick={toggleHandler}>
                  Sign in Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </main>
  );
};

export default Authentication;