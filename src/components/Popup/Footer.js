import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: "2%",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>See All Plans</Typography>
    </Box>
  );
}

export default Header;
