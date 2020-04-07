import React, { useState, useEffect } from "react";
import RegionDisplay from "./RegionDisplay";
import { Grid } from "@material-ui/core";

function RegionList({ regions }) {
  let countryCodes = [];
  let countryNames = [];
  Object.keys(regions).forEach((key) => {
    countryCodes.push(key);
    countryNames.push(regions[key]);
  });
  return (
    <Grid container spacing={1} style={{ marginTop: 8 }}>
      {countryNames.map((region, i) => (
        <RegionDisplay region={region} photo={countryCodes[i]} />
      ))}
    </Grid>
  );
}
export default RegionList;
