import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#fce5ce",
  },
  root: {
    flexGrow: 1,
  },
  main: {
    backgroundColor: "#fce5ce",
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },

  //Top section

  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "stretch",
    alignItems: "stretch",
    width: "100%",
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  topCategoryHeader: {
    fontFamily: "Playfair Display",
    fontSize: "20gitpx",
    color: "rgb(226, 226, 226)",
    position: "relative",
    textTransform: "uppercase",
  },

  p: {
    fontFamily: "Lato",
    color: "rgb(226, 226, 226)",
    paddingLeft: theme.spacing(1),
  },

  leftTopSection: {
    height: "100%",
    width: "50%",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightTopSection: {
    width: "80%",
    height: "100%",
    backgroundColor: "rgb(37, 68, 55)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: theme.spacing(1),
    },
  },

  //Bottom section

  
}));
