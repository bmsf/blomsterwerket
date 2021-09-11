import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#F5FAFD",
    color: "#0A1F11",
    zIndex: 1,
    boxShadow: "none",
    borderBottom: "none",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  root: {
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },

  // desktop Navbar
  desktopNav: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
      alignItems: "center",
    },
  },

  logoDiv: { display: "flex" },

  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    color: "#0A1F11",
    textDecoration: "none",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: theme.shape.borderRadius,
    },
  },
  aTags: {
    color: "#282B31",
    fontFamily: "Jost",
  },

  cartButton: {
    position: "relative",
    right: "10%",
    [theme.breakpoints.down("md")]: {
      right: "0",
      position: "none",
    },
  },

  //Mobile

  menuButton: {
    display: "flex",
    [theme.breakpoints.up("lg")]: { display: "none" },
  },
  logoDivMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: { display: "none" },
  },
}));
