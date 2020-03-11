import React, { useState, useEffect } from "react";
import Data from "../Services/firestore_db";
import RegionList from "../Components/Region/RegionList";
import RegionListObject from "../Services/region_list";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";

function Region() {
  return (
    <PageWrapper flex={true}>
      <RegionList regions={RegionListObject} />
    </PageWrapper>
  );
}
export default Region;
