import * as React from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const drawerWidth = 240;
const navItems = [
  { text: "Home", to: "home", offset: -50 },
  { text: "About", to: "about", offset: -50 },
  { text: "Portfolio", to: "portfolio", offset: -50 },
  { text: "Experience", to: "experience", offset: -50 },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h1" sx={{ my: 2 }} style={{ color: "white" }}>
        My Portfolio
      </Typography>
      <Divider color="white" />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton key={item.text} sx={{ textAlign: "center" }}>
              <Link
                key={`link-${item.text}`}
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={handleDrawerToggle}
                style={{ color: "white" }}
              >
                {item.text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "rgba(0,0,0,0.8)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              activeClass="active"
              to={"home"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              My Portfolio
            </Link>
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              justifyContent: "space-between",
              "& > *": {
                margin: "0 8px",
              },
            }}
          >
            {navItems.map((item) => (
              <Button variant="text" size="medium" sx={{ color: "white" }}>
                <Link
                  key={`link-${item.text}`}
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  {item.text}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "rgba(0,0,0,0.8)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Navbar;
