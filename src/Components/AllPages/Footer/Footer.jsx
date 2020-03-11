import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    borderTop: "2px solid #FF1010"
  },
  btnAndtextDiv: {
    backgroundColor: "#FFFFFF",
    bottom: 0,
    width: "100%",
    textAlign: "center"
  },
  loginBtn: {
    padding: "20px 14px",
    fontSize: "0.750em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    fontWeight: "bold",
    color: "#FF0000"
  },
  text: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 15,
    fontSize: "0.750em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    color: "#454545"
  },
  logoLink: {
    display: "flex",
    textDecoration: "none",
    outline: "none !important",
    justifyContent: "center",
    height: "fit-content",
    WebkitTapHighlightColor: "rgba(0,0,0,0)"
  }
}));

function Footer() {
  const classes = useStyles();

  const text =
    "© 2020 MadeIn. All rights reserved. All other trademarks are the property of their respective owners";

  const AdminBtn = () => {
    return (
      <Link className={classes.logoLink} to="/upload">
        <div className={classes.loginBtn}>Admin login</div>
      </Link>
    );
  };

  return (
    <div className={classes.footer}>
      <div className={classes.btnAndtextDiv}>
        <AdminBtn />
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  );
}
export default Footer;
