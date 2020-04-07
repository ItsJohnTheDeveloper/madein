import React, { useState, useEffect } from "react";
import Data from "../Services/firestore_db";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";
import ItemList from "../Components/Item/ItemList";
import SearchBar from "../Components/Common/SearchBar";

function Home() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const allItems = await Data.getAllItems();
      setItems(allItems);
      console.log(allItems);
    } catch (err) {
      console.log(err);
    }
  }

  const filterItems = (items) => {
    if (searchText === "") return items;
    else
      return items.filter((item) => {
        return (
          item.text.toLowerCase().includes(searchText) ||
          item.manufacturer.toLowerCase().includes(searchText) ||
          item.category.toLowerCase().includes(searchText)
        );
      });
  };

  return (
    <PageWrapper>
      <SearchBar searchText={(text) => setSearchText(text.toLowerCase())} />
      <ItemList itemList={filterItems(items)} />
    </PageWrapper>
  );
}
export default Home;
