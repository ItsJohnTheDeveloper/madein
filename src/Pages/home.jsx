import React, { useState, useEffect } from "react";
import Data from "../Services/firestore_db";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";

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
      {items.map((item, i) => (
        <div>
          {`Item # ${i}`}
          <div>Text: {item.text}</div>
          <div>Manugacturer: {item.manufacturer}</div>
          <div>Region: {item.region}</div>
          <div>Category: {item.category}</div>
        </div>
      ))}
      {console.log(items)}
    </PageWrapper>
  );
}
export default Home;
