import React from "react";

function PaddingTop({ paddingTop, children }) {
  return <div style={{ paddingTop: paddingTop }}>{children}</div>;
}

export default PaddingTop;
