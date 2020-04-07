import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import PaddingTop from "../Common/PaddingTop";
import history from "../../Router/history";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexFlow: "column",
    boxShadow: "0px 2px 2px #CACACA",
    cursor: "pointer",
    "&:active": {
      outline: "none !important",
      opacity: 0.8,
    },
    "&:hover": {
      boxShadow: "0px 4px 6px #CACACA",
      opacity: 0.9,
    },
  },
  text: {
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    color: "#363636",
    maxWidth: 270,
  },
  img: {
    width: 150,
    "-webkit-user-drag": "none",
    "-khtml-user-drag": "none",
    "-moz-user-drag": "none",
    "-o-user-drag": "none",
    "user-drag": "none",
  },
}));

function RegionDisplay({ region, photo }) {
  const classes = useStyles();
  useEffect(() => {
    getFlags();
  }, []);

  function getFlags() {
    let img = `https://www.countryflags.io/${photo}/flat/64.png`;
    return <img src={img} className={classes.img} />;
  }

  const redirectToRegion = () => history.push(`/region:${region}`);

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
      <Paper
        className={classes.root}
        key={region}
        onClick={() => redirectToRegion()}
      >
        <PaddingTop paddingTop={10} />
        <div className={classes.text}>Made In {region}</div>
        {getFlags()}
      </Paper>
    </Grid>
  );
}
export default RegionDisplay;
