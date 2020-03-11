import React, { useState, useEffect } from "react";
import RegionDisplay from "./RegionDisplay";

function RegionList({ regions }) {
  let countryCodes = [];
  let countryNames = [];
  Object.keys(regions).forEach(key => {
    countryCodes.push(key);
    countryNames.push(regions[key]);
  });
  return countryNames.map((region, i) => {
    return <RegionDisplay region={region} photo={countryCodes[i]} />;
  });
}
export default RegionList;
