import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    width: "100%",
    "@supports not( width: 100% )": {
      width: "-moz-available" /* For Mozzila */,
    },
    marginTop: 8,
    marginBottom: 8,
  },
  inputBarDiv: {
    height: 38,
    backgroundColor: "#FFFFFF",
    width: "100%",
    "@supports not( width: 100% )": {
      width: "-moz-available" /* For Mozzila */,
    },
    border: "none !important",
  },
  inputBar: {
    backgroundColor: "#FFFFFF",
    fontSize: "0.875em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    color: "#292929",
    padding: 0,
    width: "100%",
    height: "100%",
    textIndent: 14,
    border: "none !important",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    "&:focus": {
      outline: "none !important",
      "&::placeholder": {
        opacity: 0.7,
      },
    },
    "&::placeholder": {
      color: "#808080",
    },
  },
  SearchBtn: {
    justifyContent: "center",
    backgroundColor: "#FF5A5A",
    border: "none !important",
    height: 38,
    width: 60,
    boxShadow: "0px 2px 2px #CACACA",
    display: "flex",
    cursor: "pointer",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    "&:active": {
      opacity: 0.7,
    },
  },
  SearchIcon: {
    color: "#FFFFFF",
    alignSelf: "center",
  },
}));

function SearchBar({ searchText }) {
  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    searchText(event.target.value);
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <div className={classes.inputBarDiv}>
        <input
          onChange={onChange}
          className={classes.inputBar}
          placeholder="Search"
        />
      </div>
      <button type="submit" className={classes.SearchBtn}>
        <div className={classes.SearchIcon}>
          <Search style={{ fontSize: "x-large" }} />
        </div>
      </button>
    </form>
  );
}
export default SearchBar;
