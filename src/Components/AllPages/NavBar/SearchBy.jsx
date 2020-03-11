import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: 70,
    display: "flex",
    justifyContent: "center"
  },
  SearchByBtn: {
    justifyContent: "center",
    boxShadow: "0px 1px 2px #D3D3D3",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    color: "#606060",
    display: "flex",
    height: "100%",
    width: "100%",
    textDecoration: "none",
    outline: "none !important",
    cursor: "pointer",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    "&:active": {
      backgroundColor: "#FFFFFF",
      opacity: 0.7
    }
  },
  title: {
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    fontWeight: "500",
    alignSelf: "center"
  },
  borderRight: {
    borderRight: "1px solid #DEDEDE"
  }
}));

function SearchBy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link
        to="/region"
        className={classes.SearchByBtn + " " + classes.borderRight}
      >
        <div className={classes.title}>By Region</div>
      </Link>
      <Link to="/category" className={classes.SearchByBtn}>
        <div className={classes.title}>By Category</div>
      </Link>
    </div>
  );
}

export default SearchBy;
