import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Product", "Services", "Contact"];

const navItems = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/product", text: "Product" },
  { path: "/services", text: "Services" },
  { path: "/contact", text: "Contact" },
];

const Navbar = ({ window, show }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  let activeStyle = {
    backgroundColor: "#FF5E14",
    color: "#fff",
    padding: "5px 10px",
    clipPath: `polygon(25 % 0 %, 100 % 0 %, 75 % 100 %, 0 % 100 %)`,
    width: "100%",
  };


  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "black" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((route) => (
          // <ListItem key={item} disablePadding>
          //     <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
          //         <ListItemText primary={item} />
          //     </ListItemButton>
          // </ListItem>
          <ListItem button key={route.path}>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <NavLink
                to={route.path}
                exact={true}
                className={"text-center"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName={classes.activeLink}
              // className={classes.link}
              >
                {route.text}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }} style={{}}>
        <CssBaseline />
        <AppBar
          component="nav"
          style={{ background: "white", width: "100%", boxShadow: "none" }}
          className={`${!show ? "fixed top-0 duration-200 " : "md:mt-[50px] duration-200"
            }`}
        >
          <Toolbar className="w-11/12 lg:w-3/4 mx-auto text-black">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
              style={{ color: "#FF5E14", fontSize: "24px", fontWeight: "bold" }}
            >
              Logo
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <nav>
                <NavLink
                  to={"/"}
                  className={`text-lg font-medium mx-3 text-secondary`}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home{" "}
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={"text-lg font-medium mx-3 text-secondary"}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About{" "}
                </NavLink>
                <NavLink
                  to={"/product"}
                  className={"text-lg font-medium mx-3 text-secondary"}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Product{" "}
                </NavLink>
                <NavLink
                  to={"/services"}
                  className={"text-lg font-medium mx-3 text-secondary"}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Services{" "}
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={`text-lg font-medium mx-3 text-secondary`}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact{" "}
                </NavLink>
                <NavLink
                  to={"/project"}
                  className={`text-lg font-medium mx-3 text-secondary `}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Project{" "}
                </NavLink>
              </nav>
              {/* {navItems.map((item) => (
                                <Button key={item} sx={{
                                    color: 'black',

                                }}>
                                    {item}
                                </Button>
                            ))} */}
            </Box>
          </Toolbar>
        </AppBar>

        {/* For Mobile Devices  */}

        <Box component="nav" style={{ color: "black" }}>
          <Drawer
            container={container}
            variant="primary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              color: "black",
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            style={{ color: "black" }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
