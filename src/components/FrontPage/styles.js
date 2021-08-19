import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },

  container: {
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    height: "100vh",
  },

  frontPageHeader: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      fontFamily: "Montserrat",
      letterSpacing: "0.2em",
      color: "rgb(226, 226, 226)",
      fontSize: "7rem",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
  },

  two: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    paddingRight: "15rem",
    lineHeight: "-3px",
  },

  img: {
    height: "300px",
    width: "200px",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
  },

  sectionHeader: {
    fontFamily: "Frank ruhl Libre",
    color: "rgb(226, 226, 226)",
    fontSize: "25px",
    fontWeight: "bold",
  },

  sectionParagraph: {
    fontFamily: "Frank ruhl Libre",
    color: "rgb(226, 226, 226)",
    fontWeight: "300",
  },
}));
