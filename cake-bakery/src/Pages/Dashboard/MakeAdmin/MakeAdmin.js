import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlAdminSubmit = (e) => {
    const user = { email };
    fetch("https://mighty-thicket-14562.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);

          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div className="bg-info p-5 m-5">
      <h3 className="text-white p-3"> Make Admin</h3>
      <form onSubmit={handlAdminSubmit}>
        <TextField
          label="Make Admin"
          variant="outlined"
          type="email"
          onBlur={handleOnBlur}
        />
        <Button className="m-3" variant="contained" type="submit">
          {" "}
          Make Admin{" "}
        </Button>
      </form>

      {success && (
        <Alert sx={{ width: "100%", m: 1 }} severity="success">
          {" "}
          Successfully Promoted to Admin
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
