import {
  Menu as MenuIcon,
  PersonOutline as PersonOutlineIcon,
  Settings as SettingsIcon
} from "@mui/icons-material";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer as MuiDrawer,
  IconButton,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar
} from "@mui/material";

import {
  navbarDrawerData,
  UserRole
} from "./navbarDrawerData";

import {
  UserAvatar,
  UserDataCard,
  UserDataList,
  UserLabel, UserSettingsButton
} from "./styles";

import {
  MouseEvent,
  useState
} from "react";

import { Outlet } from "react-router-dom";
import { useNotification } from "../../context/notification";


const drawerWidth = 240;

function Drawer() {
  const [isUserModalOpen, setIsUserModalOpen] =
    useState(false);
  const toggleIsUserModalOpen = () =>
    setIsUserModalOpen(!isUserModalOpen);

  // TODO: Fetch User Data
  const currentUser: {
    role: UserRole,
    name: string
  } = {
    role: "admin",
    name: "User Name"
  };

  const { inform, notify } = useNotification();

  const [userModalAnchorEl, setUserModalAnchorEl] =
    useState<HTMLElement | null>(null);

  const handleOpenUserModal = (event: MouseEvent<HTMLElement>) => {
    setUserModalAnchorEl(event.currentTarget);
  };

  const handleCloseUserModal = () => {
    setUserModalAnchorEl(null);
  };

  function provoke() {
    try {
      throw new Error("You asked for it...");
    } catch (err: unknown) {
      notify(err);
    }
  }

  return (
    <div>
      <Box
        style={{
          marginTop: 50,
          marginBottom: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="logo"
          src="/venus.svg"
          style={{
            height: 75
          }}
          alt="Logo"
        />
      </Box>
      <List>

        {navbarDrawerData()
          .filter(({ userRoles }) => userRoles.includes(currentUser.role))
          .map(({ navigate, title, Icon }, index) => (
            <ListItem
              key={index}
              onClick={navigate}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}

        <UserDataList>
          <UserDataCard>

            <UserAvatar>
              <PersonOutlineIcon />
            </UserAvatar>

            <UserLabel>
              {currentUser.name}
            </UserLabel>

            <UserSettingsButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserModal}
              color="inherit"
            >
              <SettingsIcon />
            </UserSettingsButton>

            <Menu
              id="menu-appbar"
              anchorEl={userModalAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userModalAnchorEl)}
              onClose={handleCloseUserModal}
            >
              <MenuItem
                onClick={() => inform("Not implemented")}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={provoke}
              >
                Exit
              </MenuItem>

            </Menu>

          </UserDataCard>
        </UserDataList>
      </List>
    </div>
  );
}




export function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleIsDrawerOpen = () =>
    setIsDrawerOpen(!isDrawerOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "transparent",
          boxShadow: "none"
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
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
            },
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

      <Outlet />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      />

    </Box>
  );
}     