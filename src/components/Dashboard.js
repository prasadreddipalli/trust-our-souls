
import React, { useContext, useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Logout } from '@mui/icons-material'; 
import Tooltip from '@mui/material/Tooltip';

import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth'
import Login from '../components/auth/login';
import HomePage from '../pages/HomePage';
import { AboutUs } from '../pages/AboutUs';
import Profile from '../pages/profile/Profile';
import LandingPage from "./LandingPage";
import SearchPage from "../pages/profile/search/SearchPage";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);



const Layout = ({ children }) => (
  <div>{children}</div>
);

const defaultTheme = createTheme();


const  Dashboard=()=> {
  const [open, setOpen] = React.useState(true);
  const [activeLink, setActiveLink] = useState('');
 
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleLogout = () => {
    doSignOut().then(() => {
        navigate('/dashboard/login');
    });
};

  const mainMenuListItems = (
    <>
      <React.Fragment>
        <ListItemButton
          selected={activeLink === '/home'}
          onClick={() => handleLinkClick('/home')}

          button="true" component={Link} to="/dashboard/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          selected={activeLink === '/profile'}
          onClick={() => handleLinkClick('/profile')}

          button="true" component={Link} to="/dashboard/profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton  selected={activeLink === '/search'}
          onClick={() => handleLinkClick('/search')}

          button="true" component={Link} to="/dashboard/search">
          <ListItemIcon>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>

      </React.Fragment>
    </>
  );

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { userLoggedIn } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      {!userLoggedIn ?
       

       <LandingPage/>
        :
        <ThemeProvider theme={defaultTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
              <Toolbar
                sx={{
                  pr: '24px', // keep right padding when drawer closed
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  Trust Our Souls
                </Typography>
                <Tooltip title="Logout">
                <IconButton color="inherit" onClick={handleLogout} title="Logout">
                  <Badge color="secondary">
                    <Logout /> {/* Use the logout icon component */}
                  </Badge>
                </IconButton>
                </Tooltip>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>
              <Divider />
              <List component="nav">
                {mainMenuListItems}

                {/*
             <Divider sx={{ my: 1 }} />
             {secondaryListItems} 
             */ }
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                overflow: 'hidden', // Set overflow to 'hidden' to prevent scrolling
                padding: 2, // Add some padding to the content
                width: '100%',
              }}
            >
              <Toolbar />
            
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
             
                        
            </Box>
          </Box>
        </ThemeProvider>

      }
    </>
  );
}
export default  Dashboard ;


