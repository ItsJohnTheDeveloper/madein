import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import PaddingTop from "../Common/PaddingTop";

const useStyles = makeStyles(theme => ({
  root: {
    "@media only screen and (max-width: 539px)": {
      minWidth: "100%"
    },
    "@media only screen and (min-width: 540px)": {
      minWidth: "45%"
    },
    "@media only screen and (min-width: 960px)": {
      minWidth: "30%"
    },
    display: "flex",
    maxWidth: 300,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    marginTop: 14,
    alignItems: "center",
    flexFlow: "column",
    boxShadow: "0px 2px 2px #CACACA",
    cursor: "pointer",
    "&:active": {
      outline: "none !important",
      opacity: 0.8
    },
    "&:hover": {
      boxShadow: "0px 4px 6px #CACACA"
    }
  },
  text: {
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    fontWeight: "bold",
    color: "#363636",
    maxWidth: 270
  },
  img: {
    width: 150,
    "-webkit-user-drag": "none",
    "-khtml-user-drag": "none",
    "-moz-user-drag": "none",
    "-o-user-drag": "none",
    "user-drag": "none"
  }
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

  return (
    <div className={classes.root} key={region}>
      <PaddingTop paddingTop={10} />
      <div className={classes.text}>Made In {region}</div>
      {getFlags()}
    </div>
  );
}
export default RegionDisplay;
