import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import { Outlet } from "react-router-dom";



export function NavBar() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Box
        sx={{ flexGrow: 1 }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Venus
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
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