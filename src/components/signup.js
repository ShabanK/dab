import React from "react";
import { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Input,
  FormControl,
  InputLabel,
  InputAdornment
} from "@material-ui/core";
import CircularIntegration from "./loading";
import Tooltip from "@material-ui/core/Tooltip";
const Index = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    setTimeout(() => {
      window.location.replace("/");
    }, 7000);
  }

  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [state4, setState4] = useState(null);

  const handleSignup = e => {
    console.log(state1, state2, state3, state4);
    e.preventDefault();
    if (state1 && state2 && state3 && state4) {
      setLoading(true);
    } else {
      setLoading(false);
      alert("Input required fields");
    }
  };

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
      <Grid
        direction="column"
        container
        justify="center"
        style={{ marginTop: " 15em" }}
      >
        <Grid item style={{ textAlign: "center" }}>
          <div>
            <FormControl>
              <InputLabel htmlFor="input-with-icon-adornment">
                Account number
              </InputLabel>
              <Input
                onChange={e => setState1(e.target.value)}
                id="input-with-icon-adornment"
                startAdornment={<InputAdornment position="start" />}
              />
            </FormControl>
            <TextField
              onChange={e => setState2(e.target.value)}
              id="input-with-icon-textfield"
              label="Email"
              InputProps={{
                startAdornment: <InputAdornment position="start" />
              }}
            />
            <div />
          </div>
          <div style={{ paddingTop: "1.5em" }}>
            <FormControl>
              <InputLabel htmlFor="input-with-icon-adornment">
                Password
              </InputLabel>
              <Input
                onChange={e => setState3(e.target.value)}
                id="input-with-icon-adornment"
                startAdornment={<InputAdornment position="start" />}
              />
            </FormControl>
            <TextField
              onChange={e => setState4(e.target.value)}
              id="input-with-icon-textfield"
              label="Confirm Password"
              InputProps={{
                startAdornment: <InputAdornment position="start" />
              }}
            />
            <div />
          </div>
          <Grid
            item
            container
            alignContent="center"
            justify="flex-end"
            alignItems="center"
            direction="column"
          >
            <Button
              style={{ marginTop: "1em" }}
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
              Signup
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
