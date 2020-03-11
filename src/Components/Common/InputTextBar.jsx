import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: 36
  },
  inputBar: {
    fontSize: "0.875em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#363636",
    width: "100%",
    height: "100%",
    border: "1px solid #DCDCDC",
    paddingLeft: 12,
    paddingRight: 12,
    boxSizing: "border-box",
    boxShadow: "0px 2px 2px #DCDCDC",
    "&:focus": {
      outline: "none !important",
      "&::placeholder": {
        opacity: 0.7
      }
    },
    "&::placeholder": {
      color: "#808080"
    }
  }
}));

function InputTextBar({ name, placeholder, onChange }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        className={classes.inputBar}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default InputTextBar;
