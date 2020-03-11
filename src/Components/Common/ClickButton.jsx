import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  btnWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  btnRoot: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
    backgroundColor: "#FF1010",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    outline: "none !important",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7
    },
    border: "2px solid #FFB1B1",
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    fontWeight: "bold",
    color: "#FFFFFF"
  }
}));

function ClickButton({ text, width, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.btnWrapper}>
      <button
        type={"button"}
        onClick={onClick}
        className={classes.btnRoot}
        style={{ width: width }}
      >
        {text}
      </button>
    </div>
  );
}
export default ClickButton;
