import React from "react";
import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import N from "./navbar";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "0",
    message: "Welcome to Bank Management system! All agents offline now",
    trigger: "2"
  },
  {
    id: "2",
    message: "Please contact our toll free number 023330222",
    end: false,
    trigger: "3"
  },
  {
    id: "3",
    message: "Or come back again on working hours",
    end: true
  }
];

const Chat = () => {
  return (
    <Grid
      container
      item
      justify="center"
      style={{ marginTop: "14em" }}
      alignItems="center"
    >
      <ChatBot steps={steps} />
    </Grid>
  );
};

const index = () => {
  return (
    <>
      <N />
      <Grid container item justify="center" style={{ marginTop: "20em" }}>
        <Tooltip title="reverse a transaction by entering TRIX ID">
          <Button href="/reverse" variant="contained" color="primary">
            Reverse
          </Button>
        </Tooltip>

        <Tooltip title="Chat with live support">
          <Button href="/support" variant="contained" color="primary">
            Chat
          </Button>
        </Tooltip>

        <Tooltip title="Fetch records of all the records in the bank">
          <Button href="/r" variant="contained" color="primary">
            Details
          </Button>
        </Tooltip>
      </Grid>
    </>
  );
};

export default index;
