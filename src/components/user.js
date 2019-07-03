import React from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";

import Navbar from "./navbar";
const index = () => {
  return (
    <>
      <Navbar />
      <Grid
        style={{ marginTop: "20em" }}
        spacing={3}
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item>
          <Tooltip title="The user inquires about his balance">
            <Button variant="contained" color="primary" size="large" href="/en">
              Balance Enquiry
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="The user can transfer funds by entering amount and account number">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/funds"
            >
              Funds transfer
            </Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title="Pay your bills by entering the bill ID">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/bill"
            >
              Bill payments
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Book a ticket for different modes of transport">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/ticket"
            >
              Ticket booking
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Fetch your bank statement">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/statement"
            >
              Bank statement
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Change your account credentials">
            <Button
              title="Change password"
              variant="contained"
              color="primary"
              size="large"
              href="change"
            >
              Change password
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Talk to customer suppport">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="support"
            >
              Customer support
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
