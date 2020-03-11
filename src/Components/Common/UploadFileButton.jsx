import React, { useState } from "react";
import { makeStyles, Input } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  uploadBtnWrapper: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    color: "#363636",
    alignItems: "center",
    flexFlow: "column"
  },
  uploadBtnRoot: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    outline: "none !important",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7
    }
  }
}));

function UploadFileButton({ updateFile }) {
  const classes = useStyles();
  return (
    <div className={classes.uploadBtnWrapper}>
      Upload Image:
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        className={classes.uploadBtnWrapper}
        onChange={updateFile}
      />
    </div>
  );
}
export default UploadFileButton;
