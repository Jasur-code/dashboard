import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AccountCircleOutlined,
  Dashboard,
  Key,
  LiveHelpOutlined,
} from "@mui/icons-material";
import { BiCubeAlt } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerLeft({ children }) {
  const [open, setOpen] = React.useState(false);
  const listStyle = {
    display: "block",
    color: "#9197B3",
    "&:hover": {
      backgroundColor: " #5932EA",
      borderRadius: "10px",
      color: "#ffff",

    },
    
  };



  const handleDrawerOpen = () => {
    if (open === true) {
      setOpen(false);
    } else setOpen(true);
  };

  const pages = [
    {
      page: "Dashboard",
      icon: <Key />,
      path:""
    },
    {
      page: "Guruhlar",
      icon: <BiCubeAlt />,
      path:"/guruhlar"
    },
    {
      page: "O'quvchilar",
      icon: <AccountCircleOutlined />,
      path:"/o'quvchilar"
    },
    {
      page: "Dars jadvali",
      icon: <GiWallet />,
    },
    {
      page: "Sozlamalar",
      icon: <AiOutlineSetting />,
    },
    {
      page: "Yordam",
      icon: <LiveHelpOutlined />,
    },
  ];

  const navigate = useNavigate()
  return (
    <Box sx={{backgroundColor:"#FAFBFF", display:"flex", height:"100vh"}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ListItem>
            <IconButton
              sx={{
                color: "black",
                minWidth: 0,
                mr: open ? 1 : "auto",
                justifyContent: "center",
                fontSize: "30px",
              }}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <AiOutlineSetting />
            </IconButton>
            <Typography
              sx={{
                opacity: open ? 1 : 0,
                color: "black",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Typography>
          </ListItem>
        </DrawerHeader>

        <List sx={{ padding: "20px 10px" }}>
          {pages.map((text, index) => (
            <ListItem key={index} disablePadding sx={listStyle} onClick={() => navigate(text.path) }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "10px",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    border: "1px solid #9197B3",
                    padding: "1px 3px",
                    borderRadius: "8px",
                    fontSize: "24px",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.page}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY:"auto" }}>
       
        {children}
      </Box>
    </Box>
  );
}
