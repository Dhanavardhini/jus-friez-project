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
import logo from '../assets/Jus Friez logo.jpg';
import dlogo from '../assets/Deliverylogo1.png';

const navItems = ['Home', 'Best Deal', 'Food Menu', 'Blog & News'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
  const handleNavClick = (item) => {
    const id = item.toLowerCase().replace(/[^a-z]/g, '');
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(id);
    setMobileOpen(false);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    setActiveNav('');
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item, index) => {
          const id = item.toLowerCase().replace(/[^a-z]/g, '');
          const isActive = activeNav === id;
          return (
            <ListItem button key={item} onClick={() => handleNavClick(item)}>
              <ListItemText
                primary={item}
                className={isActive ? 'drawer-active' : (index === 0 ? 'drawer-home' : 'drawer-other')}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          gap: 1,
          cursor: 'pointer',
          backgroundColor:' #d32f2f',
          color: 'white',
          marginTop: 'auto',
        }}
        onClick={scrollToFooter}
      >
        <ShoppingCartIcon sx={{ color: 'white' }} />
        <Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Free Delivery
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
            +12 123 4567 891
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          <Box className="left-side">
            <Box className="logo-flex">
              <img src={logo} alt="Logo" className="logo-img" />
              <Box>
                <Typography variant="h6" className="logo-text">
                  Jus Friez
                </Typography>
                <Typography variant="caption" className="logo-subtext">
                  {/* Fresh Food Ever */}Fresh, Crispy & Delicious
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="right-side">
            <Box className="nav-links">
              {navItems.map((item, index) => {
                const id = item.toLowerCase().replace(/[^a-z]/g, '');
                const isActive = activeNav === id;
                return (
                  <Button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={
                      isActive ? 'nav-button-active' : (index === 0 ? 'nav-button-home' : 'nav-button-other')
                    }
                  >
                    {item}
                  </Button>
                );
              })}
            </Box>

            <Box className="delivery-box" onClick={scrollToFooter}>
              <img src={dlogo} alt="Delivery" className="delivery-logo" />
              <Box>
                <Typography className="delivery-text">Get Free Delivery</Typography>
                <Typography className="phone-number">+12 123 4567 891</Typography>
              </Box>
            </Box>
          </Box>

          <IconButton edge="end" className="menu-icon" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
