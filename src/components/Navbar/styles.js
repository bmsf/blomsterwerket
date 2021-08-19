import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FCAD53",
    color: "rgb(226, 226, 226)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      borderBottom: "none",
      color: "#E5DAC3",
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    fontFamily: "STIX Two Math",
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  socialButton: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
      color: "rgb(226, 226, 226)",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },

    // desktop:
    screenSize: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  },

  // desktop Navbar:
  desktopNav: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "8vh",
      width: "50%",
      paddingRight: "5em",
    },
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    color: "rgb(226, 226, 226)",
    textDecoration: "none",
    "& li": {
      listStyle: "none",
      textDecoration: "none",
      letterSpacing: "5px",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer",
    },
  },
}));
