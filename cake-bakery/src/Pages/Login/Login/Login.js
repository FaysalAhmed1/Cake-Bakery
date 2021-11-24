import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <>
      <Navigation></Navigation>
      <Container className="bg-info mt-5">
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={12}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>

              <Typography variant="body1" gutterBottom>
                New user ? Register Here :
              </Typography>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button sx={{ width: "75%", m: 1 }} variant="outlined">
                  Register
                </Button>
              </NavLink>

              {isLoading && <CircularProgress />}

              {user?.email && (
                <Alert sx={{ width: "100%", m: 1 }} severity="success">
                  {" "}
                  Login Successfully
                </Alert>
              )}
            </form>
            <Button
              onClick={handleGoogleSignIn}
              sx={{ width: "75%", m: 1 }}
              variant="outlined"
            >
              Google Sign In
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Login;
