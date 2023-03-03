import {
  Menu as MenuIcon
} from "@mui/icons-material";

import {
  AppBar,
  Box, Drawer as MuiDrawer,
  IconButton, Toolbar, Typography, useTheme
} from "@mui/material";

import {
  useContext,
  useState
} from "react";

import { Outlet } from "react-router-dom";
import { ColorModeContext } from "../../context/theme";
import { useRouting } from "../../routes/useRouting";
import { DarkmodeSwitch } from "./DarkmodeSwitch";

import { Drawer } from "./Drawer";


const drawerWidth = 240;


export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleIsDrawerOpen = () =>
    setIsDrawerOpen(!isDrawerOpen);

  const { routeTitle } = useRouting();

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          // backgroundColor: "transparent",
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
              marginLeft: 12,
              borderRadius: 10, padding: 5
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
          >
            {routeTitle}
          </Typography>

          {/* // TODO: Create go back logic  */}
          <IconButton
            onClick={colorMode?.toggleColorMode}
            color="inherit"
            sx={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "row",
              marginRight: 3
            }}
          >
            {/* {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />} */}
            <DarkmodeSwitch defaultChecked={false} />
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          marginTop: 6,
          p: 3
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );

}