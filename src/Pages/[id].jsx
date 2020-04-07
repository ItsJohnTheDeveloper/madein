import React, { useState, useEffect } from "react";
import Data from "../Services/firestore_db";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";
import ItemList from "../Components/Item/ItemList";
import { useParams } from "react-router-dom";
import LoadingIcon from "../Components/Common/LoadingIcon";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const region = id.substring(1);

  useEffect(() => {
    loadItemsBy();
  }, []);

  async function loadItemsBy() {
    try {
      const itemsByRegion = await Data.getItemsByRegion(region);
      setItems(itemsByRegion);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  return (
    <PageWrapper flex={true}>
      <LoadingIcon isLoading={isLoading} />
      {!isLoading && items ? (
        <ItemList itemList={items} region={region} />
      ) : null}
    </PageWrapper>
  );
}
export default Items;
