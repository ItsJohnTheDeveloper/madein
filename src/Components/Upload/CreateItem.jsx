import React, { useState } from "react";
import InputTextBar from "../Common/InputTextBar";
import ClickButtom from "../Common/ClickButton";
import Selector from "../Common/Selector";
import PaddingTop from "../Common/PaddingTop";
import UploadFileButton from "../Common/UploadFileButton";

function CreateItem({ handleSubmit }) {
  const [text, setText] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [imageFile, setImageFile] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "text":
        setText(value);
        break;
      case "manufacturer":
        setManufacturer(value);
        break;
      default:
        break;
    }
  };

  const handleCreateItem = () => {
    handleSubmit(text, manufacturer, region, category, imageFile);
  };

  function changeRegion(e) {
    setRegion(e.value);
  }
  function changeCategory(e) {
    setCategory(e.value);
  }

  return (
    <div>
      <PaddingTop paddingTop={30} />
      <InputTextBar
        name={"text"}
        placeholder={"Text"}
        onChange={handleChange}
      />
      <PaddingTop paddingTop={13} />
      <InputTextBar
        name={"manufacturer"}
        placeholder={"Manufacturer"}
        onChange={handleChange}
      />
      <PaddingTop paddingTop={13} />
      <Selector
        onChange={changeRegion}
        title={"Select Region"}
        isRegion={true}
      />
      <PaddingTop paddingTop={14} />
      <Selector onChange={changeCategory} title={"Select Category"} />
      <PaddingTop paddingTop={30} />
      <UploadFileButton updateFile={e => setImageFile(e.target.files[0])} />
      <PaddingTop paddingTop={50} />
      <ClickButtom text={"Create"} width={165} onClick={handleCreateItem} />
    </div>
  );
}
export default CreateItem;
