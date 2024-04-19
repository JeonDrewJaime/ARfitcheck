import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Drawer,
  List,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HoverableListItem } from '../../Components/UI/Buttons';
import SearchBar from '../../Components/SearchBar';
import PreLoader from '../../Components/PreLoader';
import MyOrders from './MyOrders';
import OrderHistory from './OrderHistory';
import AccountSettings from './AccountSettings';
import ShippingDetails from './ShippingDetails';

const User = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
    setDrawerOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" sx={{ color: 'green' }} aria-label="show 4 new mails">
          <Badge badgeContent={4} color="error">
            <MailIcon style={{ color: 'green' }} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="black">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon sx={{ color: 'black' }} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>My Orders</p>
      </MenuItem>
    </Menu>
  );

  const drawerContent = (
    <List
    sx={{
      backgroundColor: 'black',
      position: 'fixed',
      width: '35vmin',
      height: { xs: '100vh', lg: 'auto' } // Set height to 100vh for xs breakpoint (mobile)
    }}
  >
   
      <HoverableListItem
        label="My Orders"
        isSelected={selectedItem === 'My Orders'}
        onClick={() => handleListItemClick('My Orders')}
      />
      <HoverableListItem
        label="Order History"
        isSelected={selectedItem === 'Order History'}
        onClick={() => handleListItemClick('Order History')}
      />
      <HoverableListItem
        label="Shipping Details"
        isSelected={selectedItem === 'Shipping Details'}
        onClick={() => handleListItemClick('Shipping Details')}
      />
      <HoverableListItem
        label="Account Settings"
        isSelected={selectedItem === 'Account Settings'}
        onClick={() => handleListItemClick('Account Settings')}
      />
    </List>
  );

  let content;
  switch (selectedItem) {
    case 'My Orders':
      content = <MyOrders/>
      break;
    case 'Order History':
      content = <OrderHistory/>
      break;
    case 'Shipping Details':
      content = <ShippingDetails/>
      break;
    case 'Account Settings':
      content = <AccountSettings/>
      break;
    default:
      content = <div>Please select an item</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F4F4F4' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="../src/assets/Logo.jpg"
                width={100}
                height={40}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, alignItems: 'center' }}
              />
            </div>
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="black">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="black"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx = {{width: "100%"}}
      >
        {drawerContent}
      </Drawer>

      <Box display="flex" sx={{maxHeight: '100%'}}>
        {!isMobile && (
          <Box flex="1" maxWidth="35vmin" >
            {drawerContent},
          </Box>
        )}
      
      <Box flex="1" sx={{ backgroundColor: '#E4E4E4',height: '100%', pb: "30%"}}> {content
          }
  </Box>
           
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default User;