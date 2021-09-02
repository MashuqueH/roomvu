import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 5%",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          onClick={props.handleClose}
          color='primary'
        >
          <Typography>Back</Typography>
        </Button>
      </Box>
      <Box>
        <Typography className={classes.titleText}>
          Get Your Own Video Template
        </Typography>
      </Box>
      <Box>
        <Button startIcon={<CloseIcon />} onClick={props.handleClose} />
      </Box>
    </Box>
  );
}

export default Header;
