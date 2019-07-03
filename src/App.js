import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import notFunds from "./components/funds";
import bill from "./components/bill";
import support from "./components/support";
import Landing from "./components/landing";
import Login from "./components/Login";
import Signup from "./components/signup";
import User from "./components/user";
import Admin from "./components/admin";
import Employee from "./components/employee";
import Navrbar from "./components/navbar";
import Password from "./components/three";
import Table from "./components/table";
import ChatBot from "react-simple-chatbot";
import TimePickers from "./components/booking";
import Reverse from "./components/reverse";
import Bill from "./components/detail";
import Bimba from "./components/bimba";
import N from "./components/navbar";
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

const Funds = () => {
  return (
    <>
      <N />
      <Grid
        container
        style={{ marginTop: "20em" }}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" component="h1">
            Funds: 0
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact component={Landing} path="/" />
          <Route exact component={Login} path="/login" />
          <Route exact component={Signup} path="/signup" />
          <Route exact component={Admin} path="/admin" />
          <Route exact component={Employee} path="/employee" />
          <Route exact component={User} path="/user" />

          <Route exact component={Funds} path="/en" />
          <Route exact component={notFunds} path="/funds" />
          <Route exact component={Table} path="/statement" />
          <Route exact component={bill} path="/bill" />
          <Route exact component={Password} path="/change" />
          <Route exact component={TimePickers} path="/ticket" />
          <Route exact component={Chat} path="/support" />
          <Route exact component={Bill} path="/r" />
          <Route exact component={Reverse} path="/reverse" />
          <Route exact component={Bimba} path="/bimba" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
