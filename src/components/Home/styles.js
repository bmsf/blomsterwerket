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

  scrollWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato",
    color: "rgb(226, 226, 226)",
    fontSize: "25px",
    paddingTop: "5rem",
    cursor: "pointer",
  },

  scrollArrow: {
    animation: "pulse 2s infinite",
    fontSize: "large",
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
      fontFamily: "Playfair Display",
      letterSpacing: "0.2em",
      color: "rgb(226, 226, 226)",
      fontSize: "6rem",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      textTransform: "uppercase",
    },
  },

  one: { display: "flex", flexDirection: "column" },

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
    fontFamily: "Playfair display",
    color: "rgb(226, 226, 226)",
    fontSize: "25px",
    fontWeight: "bold",
  },

  sectionParagraph: {
    fontFamily: "Lato",
    fontSize: "19px",
    lineHeight: "30px",
    color: "rgb(226, 226, 226)",
    fontWeight: "300",
  },
}));
