import React from "react";
import { CircularProgress } from "@material-ui/core";

function LoadingIcon({ isLoading, marginTop, marginBottom }) {
  return isLoading ? (
    <div
      style={{
        textAlign: "center",
        marginTop: { marginTop },
        marginBottom: { marginBottom }
      }}
    >
      <CircularProgress style={{ color: "#363636" }} />
    </div>
  ) : null;
}
export default LoadingIcon;
