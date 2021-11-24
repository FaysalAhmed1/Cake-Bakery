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
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.passwordRechek) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <>
      <Navigation></Navigation>
      <Container className="bg-info mt-5">
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 12 }} xs={12} md={12}>
            <Typography variant="body1" gutterBottom>
              Register
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Re Type Password"
                  type="password"
                  name="passwordRechek"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>

                <Typography variant="body1" gutterBottom>
                  If already register, Login :
                </Typography>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button sx={{ width: "75%", m: 1 }} variant="outlined">
                    Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}

            {user?.email && (
              <Alert severity="success"> Resistered Successfully!</Alert>
            )}
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default Register;
