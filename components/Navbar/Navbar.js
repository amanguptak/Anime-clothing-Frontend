import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import logo from "../../public/images/logo-no-background.svg";
import Link from "next/link";
import logo1 from "../../public/images/logo-color.svg";
import styles from "./navbar.module.scss";
import Search1 from "../Search/Search";
import toast from "react-hot-toast";

import {clearInfo} from "@/features/checkoutSlice"
import { useDispatch, useSelector } from "react-redux";
import {TotalQuantity} from "@/features/cartSlice"
import {
  loginUser,
  selectLoading,
  selectError,
  selectUser,
  clearError,
  logoutUser
} from "@/features/userSlice";

import { useRouter } from "next/router";
import Custoast from "../CustomizeToast/Custoast";
import { getTotals } from "@/features/cartSlice";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function PrimarySearchAppBar(props) {
 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter()
  const cartData = useSelector((state) => state.cart);
  
  React.useEffect(() => {
    dispatch(getTotals());
  }, [cartData]);
 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cartQuantity = useSelector(TotalQuantity)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
const Logout =()=>{
 dispatch(logoutUser())
dispatch(clearInfo())
 toast('Logged Out',
  {
    icon: '🥹',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
setTimeout(() => {
  router.push("/login")
}, "1000");
 
}

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/">
          <Image width={70} height={70}  style={{borderRadius:"50%"}} src={logo1} />
        </Link>
      </Typography>
      <Divider />
 
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
 
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}> <Link href="/myaccount" className={styles.accountLink}>My Account</Link> </MenuItem>

    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Link href="/cart" style={{textDecoration:"none", color:"black"}}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={cartQuantity} color="error">
            <ShoppingBagTwoToneIcon />
          </Badge>
        </IconButton>
       Cart
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="false"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background:
            "linear-gradient(to right, #ED2647,#ED2647,#f24c69,#ED2647)",
        }}
      >
        <Toolbar>
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
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link href="/">
              <Image width={70} height={70} src={logo} />
            </Link>
          </Typography>
          <div className={styles.SearchD}>   <Search1/></div>
       
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>

          
          
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cartQuantity} color="error">
              <Link href="/cart" className={styles.cartIcon}> <ShoppingBagTwoToneIcon /></Link>
               
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

       
          </Box>

          {
            user === null ?<>
            <Box sx={{ display: "flex", mt: 1, mx: 2 }}>
              <Link className="nav-link" href="/login">
                <button className={`${styles.button2} mb-3` } >Login</button>
              </Link>
              <Link className="nav-link" href="/register">
                <button className={`${styles.button2} mb-3` } >Register</button>
              </Link>
            </Box>
            </>:<>
            <Box sx={{ display: "flex", mt: 1, mx: 2 }}>
           
                <button className={`${styles.button2} mb-3` } onClick={Logout}>LogOut</button>
           
            
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className="mx-1 mb-1"
            >
              <AccountCircle />
            </IconButton>
            </Box>
            </>
          }




          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <Box component="nav">
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
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

PrimarySearchAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
