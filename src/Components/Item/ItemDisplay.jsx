import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import PaddingTop from "../Common/PaddingTop";
import Data from "../../Services/firestore_db";
import LoadingIcon from "../Common/LoadingIcon";

const useStyles = makeStyles(theme => ({
  root: {
    "@media only screen and (max-width: 539px)": {
      minWidth: "100%",
      maxWidth: 400
    },
    "@media only screen and (min-width: 600px)": {
      minWidth: "49%",
      maxWidth: 282
    },
    "@media only screen and (min-width: 960px)": {
      minWidth: "33%",
      maxWidth: 256
    },
    display: "flex",

    backgroundColor: "#FFFFFF",
    marginTop: 14,
    alignItems: "center",
    flexFlow: "column",
    boxShadow: "0px 2px 2px #CACACA",
    "&:hover": {
      boxShadow: "0px 4px 6px #CACACA"
    }
  },
  imgAndTextDiv: {
    display: "flex",
    padding: 10
  },
  bottomBar: {
    display: "flex",
    backgroundColor: "#F2F2F2",
    width: "100%"
  },
  bottomBarText: {
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    fontWeight: "bold",
    padding: "10px 14px 10px 14px"
  },
  img: {
    maxWidth: "25%",
    "-webkit-user-drag": "none",
    "-khtml-user-drag": "none",
    "-moz-user-drag": "none",
    "-o-user-drag": "none",
    "user-drag": "none"
  }
}));

function ItemDisplay({ item }) {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    getItemImage();
  }, []);

  async function getItemImage() {
    try {
      setLoadingImage(true);
      const url = await Data.getImageByUrl(item.url);
      setImageUrl(url);
      setLoadingImage(false);
    } catch (err) {
      setLoadingImage(false);
      console.log(`An error occured grabbing image ${err}`);
    }
  }

  const ImageDisplay = () => {
    return loadingImage ? (
      <LoadingIcon isLoading={loadingImage} marginBottom={40} marginTop={40} />
    ) : imageUrl ? (
      <img src={imageUrl} className={classes.img} />
    ) : (
      <div className={classes.img}>No image preview</div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.imgAndTextDiv}>
        {ImageDisplay()}
        <div style={{ paddingLeft: 10 }}>
          <div>{`${item.manufacturer} ${item.text}`}</div>
          <PaddingTop paddingTop={4} />
          <div style={{ color: "#747474" }}>{item.category}</div>
        </div>
      </div>
      <div className={classes.bottomBar}>
        <div className={classes.bottomBarText}>Made In {item.region}</div>
      </div>
    </div>
  );
}
export default ItemDisplay;
