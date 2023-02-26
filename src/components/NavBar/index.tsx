import {
  Menu as MenuIcon
} from "@mui/icons-material";

import {
  AppBar,
  Box, Drawer as MuiDrawer,
  IconButton, Toolbar
} from "@mui/material";

import {
  useState
} from "react";

import { Outlet } from "react-router-dom";
import { Drawer } from "./Drawer";


const drawerWidth = 240;


export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleIsDrawerOpen = () =>
    setIsDrawerOpen(!isDrawerOpen);

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleIsDrawerOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
            style={{
              color: "orange",
              backgroundColor: "white",
              marginLeft: 12,
              borderRadius: 10, padding: 5
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: {
            sm: drawerWidth
          },
          flexShrink: { sm: 0 },
        }}
      >
        <MuiDrawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={toggleIsDrawerOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          <Drawer />
        </MuiDrawer>

        <MuiDrawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            },
          }}
          open
        >
          <Drawer />
        </MuiDrawer>

      </Box>


      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // backgroundColor: "white"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}     