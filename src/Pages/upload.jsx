import React from "react";
import Data from "../Services/firestore_db";
import CreateItem from "../Components/Upload/CreateItem";
import { ItemCreateObject } from "../display_info_classes";
import history from "../Router/history";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";

function Upload() {
  async function handleCreateItem(
    text,
    manufacturer,
    region,
    category,
    imageFile
  ) {
    try {
      console.log("attempting to create item...");
      const newItem = new ItemCreateObject(
        text,
        manufacturer,
        region,
        category
      );
      await Data.addItem(newItem, imageFile);
      return history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PageWrapper>
      <CreateItem handleSubmit={handleCreateItem} />
    </PageWrapper>
  );
}
export default Upload;
