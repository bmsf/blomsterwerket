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
    width: "100%",
    height: "70vh",
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
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightTopSection: {
    width: "60%",
    height: "100%",
    backgroundColor: "rgb(37, 68, 55)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  //Bottom section

  bottomSection: {
    display: "flex",
    width: "100%",
    backgroundColor: "#AFCECC",
    margin: "0",
  },

  bottomSectionHeader: {
    paddingTop: theme.spacing(10),
    fontFamily: "Playfair Display",
    color: "#435E53",
    position: "relative",
    textTransform: "uppercase",
    fontSize: "45px",
    width: "100%",
    selfAlign: "flex-start",
    right: "50%",
    margin: "0",
  },
  lowerBottomSectionHeader: {
    fontFamily: "Playfair Display",
    color: "#435E53",
    position: "relative",
    textTransform: "uppercase",
    fontSize: "45px",
    width: "100%",
    selfAlign: "flex-start",
    margin: "0",
    right: "30%",
  },

  pBottom: {
    position: "relative",
    fontFamily: "Lato",
    color: "#435E53",
    width: "60%",
    fontSize: "18px",
    left: "1%",
  },

  rightBottomSection: {
    width: "40%",
    height: "70%",
    objectFit: "contain",
  },
  leftBottomSection: {
    height: "100%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
}));
