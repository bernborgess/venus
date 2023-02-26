import {
  ExitToApp as ExitToAppIcon,
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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";

import {
  navbarDrawerData,
  UserRole
} from "./navbarDrawerData";

import {
  UserAvatar,
  UserDataCard,
  UserDataList,
  UserLabel, UserModalButton,
  UserModalContainer,
  UserModalLabel, UserSettingsButton
} from "./styles";

import {
  useState
} from "react";

import {
  Link, Outlet
} from "react-router-dom";


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
          src="https://www.logodesign.net/images/home-page-logo-03.png"
          style={{
            height: 100
          }}
          alt="Logo"
        />
      </Box>
      <List>

        {false && navbarDrawerData
          .filter((item) => item.userRoles.includes(currentUser.role))
          .map((item, index) => (
            <Link
              to={item.path}
              key={index}
              style={{ textDecoration: "none", color: "gray" }}
            >
              <ListItem >
                <ListItemButton />
                <ListItemIcon
                  style={{ marginLeft: 18 }}
                >
                  {item.icon({})}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
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
              onClick={toggleIsUserModalOpen}
            >
              <SettingsIcon />
            </UserSettingsButton>

            <UserModalContainer
              style={isUserModalOpen ? {} : { display: "none" }}
            >
              <UserModalButton
                onClick={() => alert("navigating to user profile")}
              >
                <MenuIcon />
                <UserModalLabel>
                  My Profile
                </UserModalLabel>
              </UserModalButton>

              <UserModalButton
                onClick={() => alert("logout!")}
              >
                <ExitToAppIcon />
                <UserModalLabel>
                  Exit
                </UserModalLabel>
              </UserModalButton>

            </UserModalContainer>

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