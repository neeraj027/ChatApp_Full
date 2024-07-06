import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { lazy } from "react";

const SearchDialog = lazy(() => import("../specific/Search"));
const NewGroup = lazy(() => import("../specific/NewGroup"));
const Notifications = lazy(() => import("../specific/Notifications"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearchDialog = () => {
    setSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotifications = () => {
    setIsNotifications((prev) => !prev);
  };

  const navigateToGroups = () => navigate("/groups");

  const logoutHandler = () => {
    console.log("Logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar sx={{ bgcolor: "orange" }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              ChatApp
            </Typography>
            <Box
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={handleMobile}
            >
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Tooltip title="New Group">
                <IconButton size="large" color="inherit" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Groups">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={navigateToGroups}
                >
                  <GroupIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Notifications">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={openNotifications}
                >
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Search">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={openSearchDialog}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={logoutHandler}
                >
                  <Logout />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<div>...Loading</div>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotifications && (
        <Suspense fallback={<div>...Loading</div>}>
          <Notifications />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<div>...Loading</div>}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

export default Header;
