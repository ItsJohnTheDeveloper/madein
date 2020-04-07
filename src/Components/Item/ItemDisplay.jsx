import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import PaddingTop from "../Common/PaddingTop";
import Data from "../../Services/firestore_db";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imgAndTextDiv: {
    display: "flex",
    padding: 10,
  },
  bottomBar: {
    display: "flex",
    backgroundColor: "#F2F2F2",
    width: "100%",
  },
  bottomBarText: {
    fontSize: "1.000em",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    padding: "10px 14px 10px 14px",
  },
  img: {
    "-webkit-user-drag": "none",
    "-khtml-user-drag": "none",
    "-moz-user-drag": "none",
    "-o-user-drag": "none",
    "user-drag": "none",

    display: "block",
    maxHeight: 100,
    minHeight: 100,
    minWidth: "25%",
    width: "25%",
    height: "auto",
    objectFit: "cover",
  },
}));

function ItemDisplay({ item }) {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getItemImage();
  }, []);

  async function getItemImage() {
    try {
      const url = await Data.getImageByUrl(item.url);
      setImageUrl(url);
    } catch (err) {
      console.log(`An error occured grabbing image ${err}`);
    }
  }

  const ImageDisplay = () => {
    return imageUrl ? (
      <img src={imageUrl} className={classes.img} />
    ) : (
      <div className={classes.img}>No image preview</div>
    );
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
      <Paper>
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
      </Paper>
    </Grid>
  );
}
export default ItemDisplay;
