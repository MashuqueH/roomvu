import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Typography, Button, Link } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";

const useStyles = makeStyles(() => ({
  root: {
    margin: "5%",
  },
  avatarTextArea: {
    display: "flex",
    width: "100%",
  },
  textArea: {
    margin: "0 3%",
  },
  topText: {
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: 14,
  },
  bottomText: {
    fontWeight: "700",
    fontSize: 18,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  button: {
    borderRadius: "5px",
    width: "85%",
  },
  buttonText: {
    margin: "2% 0",
  },
  learnMore: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
    fontWeight: "500",
  },
}));

function Body() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.avatarTextArea}>
        <Avatar alt='Avatar' src='/avatar.jpeg' />
        <Box className={classes.textArea}>
          <Typography className={classes.topText}>
            Hi, Gabby here from your customer success team!
          </Typography>
          <Typography className={classes.bottomText}>
            Upgrade to Platinum to stand out with your uniquely branded video
            template!
          </Typography>
        </Box>
      </Box>
      <VideoPlayer />
      <Box className={classes.buttonContainer}>
        <Button
          color='primary'
          variant='contained'
          size='large'
          className={classes.button}
        >
          <Typography className={classes.buttonText}>
            Get your own template for $109.99/mo (Billed Yearly)
          </Typography>
        </Button>
      </Box>
      <Box className={classes.learnMore}>
        <Typography>
          <Link>Learn More</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Body;
