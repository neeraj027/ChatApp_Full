import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => {
  const AppFunc = (WrappedComponent) => {
    return (props) => (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            lg={3}
          >
            One
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} sx={{ bgcolor: "white" }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            sm={8}
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
  return AppFunc;
};
export default AppLayout;
