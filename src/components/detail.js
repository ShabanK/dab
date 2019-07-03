import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import N from "./navbar";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("23232232", "puk", 6.0, 24, 4.0),
  createData("42424", "asad", 9.0, 37, 4.3),
  createData("45555t", "shaban", 16.0, 24, 6.0),
  createData("32334e", "ali", 17, 4.3)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <>
      <N />
      <Grid
        style={{
          marginTop: "20em"
        }}
      >
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Details </TableCell>
                <TableCell align="right">Name #</TableCell>
                <TableCell align="right">Account</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </>
  );
}
