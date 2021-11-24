import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";

const AvailableAppointments = ({}) => {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch("https://mighty-thicket-14562.herokuapp.com/cakes")
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);

  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        {" "}
        Click Order To Order an Oven !
      </Typography>

      {bookingSuccess && (
        <Alert sx={{ width: "100%", m: 1 }} severity="success">
          {" "}
          Order was Successfull
        </Alert>
      )}

      <Grid container spacing={2}>
        {cakes.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
