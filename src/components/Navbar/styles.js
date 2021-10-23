import { makeStyles } from "@material-ui/core/styles";

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
    width: "60%",
    color: "#0A1F11",
    textDecoration: "none",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: theme.shape.borderRadius,
      position: "relative",
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

  containerMobileMenu: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    paddingTop: "45px",
    width: "100%",
    backgroundColor: "#666666",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "35px",
    },
  },
  openMobileMenu: {
    position: "fixed",
    zIndex: 1,
    width: "400px",
    height: "100%",
    textDecoration: "none",
    listStyle: "none",
    fontFamily: "Jost",
    fontSize: "1.1rem",
    color: "black",
    overflowX: "hidden",
    backgroundColor: "#f5fafd",
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(5),

    [theme.breakpoints.up("lg")]: { display: "none" },
    "& li": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      "& hover": {},
    },
  },
  container: {
    display: "flex",
    paddingLeft: theme.spacing(5),
    fontFamily: "Jost",
    fontSize: "1.2rem",
    alignItems: "center",
  },
}));
