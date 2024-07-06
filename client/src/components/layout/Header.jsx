import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              ChatApp
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton>
                <MenuIcon color="primary" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
