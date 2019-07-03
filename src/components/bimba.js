import React from "react";
import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import N from "./navbar";
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

  const handleSignup = e => {
    console.log(state1, state2);
    e.preventDefault();
    if (state1 && state2 && state3) {
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
      <N />
      <Grid
        direction="column"
        container
        justify="center"
        style={{ marginTop: " 15em" }}
      >
        <Grid item style={{ textAlign: "center" }}>
          <div>
            <FormControl>
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                onChange={e => setState1(e.target.value)}
                id="input-with-icon-adornment"
                startAdornment={<InputAdornment position="start" />}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="input-with-icon-adornment">
                Employee ID
              </InputLabel>
              <Input
                onChange={e => setState2(e.target.value)}
                id="input-with-icon-adornment"
                startAdornment={<InputAdornment position="start" />}
              />
            </FormControl>
            <TextField
              onChange={e => setState3(e.target.value)}
              id="input-with-icon-textfield"
              label="Password"
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
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
