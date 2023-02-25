import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box, IconButton,
  Menu,
  MenuItem,
  Paper, Toolbar,
  Typography
} from "@mui/material";
import {
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
  const { navigateToHome,
    navigateToAllArtists,
    navigateToAllAlbums,
    navigateToFeed } = useRouting();

  const pageChips: PageChip[] = [
    { title: "artists", navigateTo: navigateToAllArtists },
    { title: "albums", navigateTo: navigateToAllAlbums },
    { title: "feed", navigateTo: navigateToFeed }
  ];

  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

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
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer"
            }}
            onClick={navigateToHome}
          >
            Venus
          </Typography>
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