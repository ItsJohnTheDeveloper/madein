import React, { useState, useEffect } from "react";
import Data from "../Services/firestore_db";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";
import ItemDisplay from "../Components/Item/ItemDisplay";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const allItems = await Data.getAllItems();
      setItems(allItems);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PageWrapper flex={true}>
      {items.map(item => (
        <ItemDisplay key={item.key} item={item} />
      ))}
      {console.log(items)}
    </PageWrapper>
  );
}
export default Home;
