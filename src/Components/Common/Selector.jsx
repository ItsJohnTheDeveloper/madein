import React from "react";
import Select from "react-select";
import RegionList from "../../Services/region_list";

function Selector({ onChange, title, isRegion }) {
  let regionNames = [];
  Object.keys(RegionList).forEach(key => {
    regionNames.push(RegionList[key]);
  });
  const loadCountries = () => {
    return regionNames.map(region => {
      return { value: region.toString(), label: region.toString() };
    });
  };

  const loadCategories = () => {
    const categories = [
      "tools",
      "home",
      "equipment",
      "appliances",
      "automotive"
    ];

    return categories.map(category => {
      return { value: category.toString(), label: category.toString() };
    });
  };

  return (
    <Select
      onChange={onChange}
      cacheOptions={true}
      options={isRegion ? loadCountries() : loadCategories()}
      defaultOptions
      isClearable={false}
      placeholder={title}
    />
  );
}

export default Selector;
