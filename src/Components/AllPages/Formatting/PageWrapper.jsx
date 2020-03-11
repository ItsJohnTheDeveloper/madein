import React from "react";
import Grid from "@material-ui/core/grid";

function PageWrapper({ flex, children }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        paddingBottom: 111,
        backgroundColor: "#F0F0F0",
        paddingLeft: "14px",
        paddingRight: "14px"
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        lg={8}
        xl={6}
        style={
          flex
            ? {
                display: "flex",
                justifyContent: "space-around",
                flexFlow: "wrap"
              }
            : {}
        }
      >
        {children}
      </Grid>
    </Grid>
  );
}
export default PageWrapper;
