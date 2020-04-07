import React from "react";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../../../Resources/madeinlogo.png";

const useStyles = makeStyles((theme) => ({
  navbarRoot: {
    backgroundColor: "#ffffff",
    height: 45,
    paddingLeft: 14,
    paddingRight: 14,
    borderBottom: "1px solid #DEDEDE",
    display: "flex",
    //justifyContent: "space-between"
  },
  icon: {
    color: "#606060",
    fontSize: "xx-large",
  },

  link: {
    display: "flex",
    textDecoration: "none",
    outline: "none !important",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    height: "fit-content",
    alignSelf: "center",
    "&:active": {
      opacity: 0.7,
    },
  },
  logoLink: {
    display: "flex",
    textDecoration: "none",
    outline: "none !important",
    alignSelf: "center",
    height: "fit-content",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  },
  searchByRoot: {
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  searchByBtn: {
    justifyContent: "center",
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
      backgroundColor: "#FCFCFC",
    },
  },
  homeIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    color: "#606060",
    display: "flex",
    height: "100%",
    width: 75,
    textDecoration: "none",
    outline: "none !important",
    cursor: "pointer",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    borderRight: "1px solid #DEDEDE",
    borderLeft: "1px solid #DEDEDE",
    padding: "0px 12px",
    "&:active": {
      backgroundColor: "#FCFCFC",
    },
  },
  title: {
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    fontWeight: "500",
    alignSelf: "center",
  },
  sticky: {
    position: "fixed",
    width: "100%",
    width: "-moz-available" /* WebKit-based browsers will ignore this. */,
    width:
      "-webkit-fill-available" /* Mozilla-based browsers will ignore this. */,
    width: "fill-available",
    boxShadow: "0px 2px 10px #D3D3D3",
    zIndex: 999,
  },
}));

function NavBar() {
  const classes = useStyles();

  const LogoBtn = () => {
    return (
      <Link
        className={classes.logoLink}
        to="/"
        onDragStart={preventDragHandler}
      >
        <img src={Logo} style={{ height: 35 }} />
      </Link>
    );
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.sticky}>
      <div className={classes.navbarRoot}>
        <LogoBtn />
      </div>
      <div className={classes.searchByRoot}>
        <Link
          to="/region"
          className={classes.searchByBtn}
          onDragStart={preventDragHandler}
        >
          <div className={classes.title}>By Region</div>
        </Link>
        <Link
          className={classes.homeIcon}
          to="/"
          onDragStart={preventDragHandler}
        >
          <Home className={classes.icon} />
        </Link>
        <Link
          to="/category"
          className={classes.searchByBtn}
          onDragStart={preventDragHandler}
        >
          <div className={classes.title}>By Category</div>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
