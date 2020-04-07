import React from "react";
import RegionList from "../Components/Region/RegionList";
import RegionListObject from "../Services/region_list";
import PageWrapper from "../Components/AllPages/Formatting/PageWrapper";

function Region() {
  return (
    <PageWrapper>
      <RegionList regions={RegionListObject} />
    </PageWrapper>
  );
}
export default Region;
