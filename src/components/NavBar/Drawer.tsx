import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useTheme
} from "@mui/material";

import { MouseEvent, useState } from "react";
import { useNotification } from "../../context/notification";
import { navbarDrawerData, UserRole } from "./navbarDrawerData";
import {
  UserAvatar,
  UserDataCard,
  UserDataList,
  UserLabel,
  UserSettingsButton
} from "./styles";

import {
  PersonOutline as PersonOutlineIcon,
  Settings as SettingsIcon
} from "@mui/icons-material";




export function Drawer() {

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

  const theme = useTheme();

  return (
    <Container
      style={{
        // background: theme.palette.primary.main,
        color: theme.palette.grey[500],
        height: "100%"
      }}
    >
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
    </Container>
  );
}
