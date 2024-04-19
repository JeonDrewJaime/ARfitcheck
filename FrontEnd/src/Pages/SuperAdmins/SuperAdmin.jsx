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
  PersonAdd as AddUserIcon,
  Settings as SettingsIcon,
  SupervisorAccount as SuperAdminIcon,
} from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HoverableListItem } from '../../Components/UI/Buttons';
import SearchBar from '../../Components/SearchBar';
import PreLoader from '../../Components/PreLoader';
import AnalyticsAndReports from './AnalyticsAndReports';
import Staffs from './Staffs';
import ProductInventory from './ProductInventory';
import Orders from './Orders';
import TransactionHistory from './TransactionHistory';

//Pages


const SuperAdmin = () => {
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
        <p>Super Admin Settings</p>
      </MenuItem>
    </Menu>
  );

  const drawerContent = (
    <List sx={{ backgroundColor: 'black' }}>
      <HoverableListItem
        label="Analitycs And Reports"
        isSelected={selectedItem === 'Analitycs And Reports'}
        onClick={() => handleListItemClick('Analitycs And Reports')}
      />
      <HoverableListItem
        label="Staffs"
        isSelected={selectedItem === 'Staffs'}
        onClick={() => handleListItemClick('Staffs')}
      />
            <HoverableListItem
        label="Product Inventory"
        isSelected={selectedItem === 'Product Inventory'}
        onClick={() => handleListItemClick('Product Inventory')}
      />
            <HoverableListItem
        label="Orders"
        isSelected={selectedItem === 'Orders'}
        onClick={() => handleListItemClick('Orders')}
      />

       <HoverableListItem
        label="Transaction History"
        isSelected={selectedItem === 'Transaction History'}
        onClick={() => handleListItemClick('Transaction History')}
      />
    </List>
  );

  let content;
  switch (selectedItem) {
    case 'Analitycs And Reports':
      content = <AnalyticsAndReports/>
      break;
    case 'Staffs':
      content = <Staffs/>
      break;
  case 'Product Inventory':
      content = <ProductInventory/>
      break;
  case 'Orders':
      content = <Orders/>
      break;
  case 'Transaction History':
      content = <TransactionHistory/>
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
            <IconButton size="large" aria-label="add user" color="black">
              <AddUserIcon />
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
              aria-label="super admin settings"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="black"
            >
              <SuperAdminIcon />
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
      >
        {drawerContent}
      </Drawer>

      <Box display="flex">
        {!isMobile && (
          <Box flex="1" maxWidth="15vw" sx={{ backgroundColor: 'black', height: '100%', pb: '80vh' }}>
            {drawerContent}
          </Box>
        )}
        <Box flex="1" sx={{ backgroundColor: '#E4E4E4' }}>
          {isLoading ? (
            <PreLoader />
          ) : (
            content
          )}
        </Box>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default SuperAdmin;
