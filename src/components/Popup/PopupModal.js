import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";

import Header from "./Header";
import Body from "./Body/Body";
import Footer from "./Footer";

function getModalStyle() {
  const top = 5;
  return {
    top: `${top}%`,
    margin: "auto",
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    minWidth: "350px",
    width: "60%",
    maxWidth: "600px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 0, 3),
    borderRadius: "10px",
  },
}));

export default function PopupModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: "100vh" }}
    >
      <Button variant='contained' color='primary' onClick={handleOpen}>
        View Popup
      </Button>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Slide direction='down' in={open} mountOnEnter unmountOnExit>
          <Box style={modalStyle} className={classes.paper}>
            <Header handleClose={handleClose} />
            <hr />
            <Body />
            <hr />
            <Footer />
          </Box>
        </Slide>
      </Modal>
    </Grid>
  );
}
