import { AppBar, Box, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export const NavBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ border: "2px; solid; red" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              KCB - CVS
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
