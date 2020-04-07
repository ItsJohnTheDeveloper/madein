import React from "react";
import { LinearProgress } from "@material-ui/core";

function LoadingIcon({ isLoading }) {
  return isLoading ? (
    <div style={{ width: "100%" }}>
      <LinearProgress color={"secondary"} />
    </div>
  ) : null;
}
export default LoadingIcon;
