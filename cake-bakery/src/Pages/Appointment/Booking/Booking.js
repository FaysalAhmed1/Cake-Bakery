import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, setBookingSuccess }) => {
  const { img, name, description, price } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <img style={{ width: "250px", height: "200px" }} src={img} alt="" />
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {description}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Price: $ {price}
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            Order This Oven
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
