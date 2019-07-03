import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Grid,
  Paper,
  Typography,
  Button,
  AppBar,
  Toolbar
} from "@material-ui/core";

const Index = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid direction="row" container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper style={{ height: "24vh", textAlign: "center" }}>
            <Typography variant="h1" component="h1" style={{ padding: "20px" }}>
              Bank Account Management System
            </Typography>
            <Typography component="p">Where you come first</Typography>
            <Typography component="p">
              Project by: BSEF17M505, BSEF17M520,BSEF17M546
            </Typography>
          </Paper>
        </Grid>
        <Grid item style={{ marginTop: "15em" }}>
          <Tooltip title="Login with your account">
            <Button
              href="/login"
              style={{ height: "5em", width: "30em" }}
              color="primary"
              variant="contained"
              size="large"
            >
              Login
            </Button>
          </Tooltip>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          item
          style={{ marginTop: "20px" }}
        >
          <Tooltip title="Register your account">
            <Button
              href="/signup"
              style={{ height: "5em", width: "30em" }}
              color="primary"
              variant="contained"
              size="large"
            >
              Sign up
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
