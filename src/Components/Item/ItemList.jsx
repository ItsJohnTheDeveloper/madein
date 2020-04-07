import React from "react";
import ItemDisplay from "../Item/ItemDisplay";
import { Grid } from "@material-ui/core";

function ItemList({ itemList, region }) {
  const noItemsStyle = {
    display: "flex",
    "justify-content": "center",
    "margin-top": 14,
  };

  return itemList.length !== 0 ? (
    <Grid container spacing={1} style={{ marginTop: 8 }}>
      {itemList.map((item) => (
        <ItemDisplay key={item.key} item={item} />
      ))}
    </Grid>
  ) : region ? (
    <div style={noItemsStyle}>{`There are no items made in ${region}`}</div>
  ) : null;
}
export default ItemList;
