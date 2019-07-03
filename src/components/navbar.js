import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {console.log(window.location.pathname)}
      <AppBar color="inherit">
        <Toolbar>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                style={{ marginRight: "1em" }}
                variant="contained"
                color="secondary"
                size="large"
                href={window.location.pathname == "/user" ? "/" : "/user"}
              >
                <Typography variant="button" color="inherit">
                  Go back
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="/"
              >
                <Typography variant="button" color="inherit">
                  Logout
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
