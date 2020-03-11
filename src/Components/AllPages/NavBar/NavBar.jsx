import React from "react";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../../../Resources/madeinlogo.png";

const useStyles = makeStyles(theme => ({
  navbarRoot: {
    backgroundColor: "#ffffff",
    height: 45,
    paddingLeft: 14,
    paddingRight: 14,
    borderBottom: "1px solid #DEDEDE",
    display: "flex",
    justifyContent: "space-between"
  },
  icon: {
    color: "#606060",
    fontSize: "xx-large"
  },

  link: {
    display: "flex",
    textDecoration: "none",
    outline: "none !important",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    height: "fit-content",
    alignSelf: "center",
    "&:active": {
      opacity: 0.7
    }
  },
  logoLink: {
    display: "flex",
    textDecoration: "none",
    outline: "none !important",
    alignSelf: "center",
    height: "fit-content",
    WebkitTapHighlightColor: "rgba(0,0,0,0)"
  }
}));

function NavBar() {
  const classes = useStyles();

  const NavBarLeft = () => {
    return (
      <Link className={classes.link} to="/">
        <Home className={classes.icon} />
      </Link>
    );
  };

  const LogoBtn = () => {
    return (
      <Link className={classes.logoLink} to="/">
        <img src={Logo} style={{ height: 35 }} />
      </Link>
    );
  };

  return (
    <div className={classes.navbarRoot}>
      <LogoBtn />
      <NavBarLeft />
    </div>
  );
}
export default NavBar;
