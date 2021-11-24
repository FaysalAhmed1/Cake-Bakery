import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Orders = () => {
  const { user } = useAuth();
  const [cakes, setCakes] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://mighty-thicket-14562.herokuapp.com/appointments?email=${user.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Sure to delete the order ?");

    if (proceed) {
      const url = `https://mighty-thicket-14562.herokuapp.com/appointments/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Order was Removed");
            const remaining = cakes.filter((cake) => cake._id !== id);
            setCakes(remaining);
          }
        });
    }
  };

  return (
    <>
      <div>
        <h3 className="text-white"> Total Orders : {orders.length} </h3>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Order table">
            <TableHead>
              <TableRow>
                <TableCell> User Name </TableCell>
                <TableCell align="right"> Email Address </TableCell>
                <TableCell align="right"> Phone Number </TableCell>
                <TableCell align="right"> Name Of the Oven </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.patientName}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.serviceName}</TableCell>
                  <button
                    className={"btn btn-danger"}
                    onClick={() => handleDelete(row._id)}
                  >
                    Delete
                  </button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h3 className="text-white pt-5">
          {" "}
          Refresh if the table isnt updating after Deletion
        </h3>
      </div>
    </>
  );
};

export default Orders;
