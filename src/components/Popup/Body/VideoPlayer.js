import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  videoContainer: {
    borderRadius: "20px",
    width: "100%",
    overflow: "hidden",
    margin: "2% 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Body() {
  const classes = useStyles();

  return (
    <Box className={classes.videoContainer}>
      <iframe
        title='Video player'
        id='video'
        width='100%'
        height='305px'
        src='https://static.roomvu.com//storage/market_update/videos/to-monthly-update_video.mp4'
        frameBorder='0'
        allow='accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Box>
  );
}

export default Body;
