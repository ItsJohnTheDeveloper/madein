import React from "react";
import ItemDisplay from "../Item/ItemDisplay";

function ItemList({ itemList, region }) {
  return itemList.length !== 0 ? (
    itemList.map(item => <ItemDisplay item={item} />)
  ) : (
    <div>{`There are no items made in ${region}`}</div>
  );
}
export default ItemList;
