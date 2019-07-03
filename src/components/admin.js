import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Grid, Input, Button } from "@material-ui/core";
import N from "./navbar";
const index = () => {
  return (
    <>
      <N />
      <Grid container justify="center">
        <Grid item style={{ marginTop: "20em" }}>
          <Tooltip title="Click to add employees">
            <Button href="/bimba" variant="contained" color="primary">
              Add Employee
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
