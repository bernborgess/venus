import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box, FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Switch,
  Toolbar,
  Typography
} from "@mui/material";
import {
  ChangeEvent,
  MouseEvent,
  useState
} from "react";
import { Outlet } from "react-router-dom";
import { useRouting } from "../../routes";

interface PageChip {
  title: string,
  navigateTo: () => void
}

function Header() {
  const { navigateToAllArtists, navigateToAllAlbums } = useRouting();

  const pageChips: PageChip[] = [
    { title: "artists", navigateTo: () => navigateToAllArtists() },
    { title: "albums", navigateTo: () => navigateToAllAlbums() }
  ];

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login-switch"

            />
          }
          label={auth ? "Logout" : "Login"}

        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" }
            }}
          >
            {pageChips.map(({ title, navigateTo }) => (
              <MenuItem key={title} onClick={navigateTo}>
                <Typography textAlign="center">{title}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Venus
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function NavBar() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1
        }}
      >
        <Paper
          sx={{ padding: 2, minHeight: "75vh" }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
}