import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/a1.jpg';

const navItems = ['Home', 'Best Deal', 'Food Menu', 'Blog & News'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle} role="presentation">
      <List>
        {navItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          gap: 1,
        }}
      >
        <ShoppingCartIcon sx={{ color: '#000' }} />
        <Box>
          <Typography sx={{ fontSize: '0.75rem', color: '#ff9800' }}>
            Get Free Delivery
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#000' }}>
            +12 123 4567 891
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white'}}>
        <Toolbar className="navbar-toolbar">
          {/* Logo and Branding */}
          <Box className="logo-container">
            <Box className="logo-flex">
              <img src={logo} alt="Food Fire Logo" className="logo-img" />
              <Box>
                <Typography variant="h6" className="logo-text">
                 Jus Friez
                </Typography>
                <Typography variant="caption" className="logo-subtext">
                  Fresh Food Ever
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Desktop Nav Links and Delivery Info */}
          <Box className="nav-links-container">
            <Box className="nav-links">
              {navItems.map((item) => (
                <Button key={item} className="nav-button">
                  {item}
                </Button>
              ))}
            </Box>
            <Box className="delivery-box">
              <ShoppingCartIcon sx={{ color: '#000', mr: 1 }} />
              <Box>
                <Typography className="delivery-text">Get Free Delivery</Typography>
                <Typography className="phone-number">+12 123 4567 891</Typography>
              </Box>
            </Box>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ color: '#000' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
