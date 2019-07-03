import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Button } from "@material-ui/core";
import CircularIntegration from "./loading";
import Tooltip from "@material-ui/core/Tooltip";
import N from "./navbar";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

function TimePickers() {
  const handleSignup = e => {
    console.log(state1, state2);
    e.preventDefault();
    if (state1 && state2) {
      setLoading(true);
    } else {
      setLoading(false);
      alert("Input required fields");
    }
  };
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) {
    setTimeout(() => {
      window.location.replace("/");
    }, 7000);
  }
  const classes = useStyles();

  return loading ? (
    <Grid
      style={{ marginTop: "20em" }}
      container
      direction="row"
      item
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <CircularIntegration size={200} color="secondary" />
    </Grid>
  ) : (
    <>
      <N />
      <Grid container item justify="center">
        <form
          style={{ marginTop: "20em" }}
          className={classes.container}
          noValidate
        >
          <TextField
            onChange={e => setState1(e.target.value)}
            id="time"
            label="Destination"
            type="text"
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
        </form>
        <form
          style={{ marginTop: "20em" }}
          className={classes.container}
          noValidate
        >
          <TextField
            onChange={e => setState2(e.target.value)}
            id="text"
            label="Seats"
            type="text"
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
        </form>
        <form
          style={{ marginTop: "20em" }}
          className={classes.container}
          noValidate
        >
          <TextField
            onChange={e => setState3(e.target.value)}
            id="time"
            label="Time"
            type="time"
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
          <Grid
            item
            container
            alignContent="center"
            justify="center"
            alignItems="center"
            direction="row"
          >
            <Button
              style={{ marginTop: "1em", marginLeft: "2em" }}
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Cancel
            </Button>
            <Button
              style={{ marginTop: "1em" }}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSignup}
            >
              Book
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
export default TimePickers;
