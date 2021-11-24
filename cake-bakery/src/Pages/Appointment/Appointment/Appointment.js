import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";

import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AvailableAppointments></AvailableAppointments>
    </div>
  );
};
export default Appointment;
