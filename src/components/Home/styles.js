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
    display: "flex",
    fontFamily: "Playfair Display",
    letterSpacing: "0.2em",
    color: "rgb(226, 226, 226)",
    fontSize: "7vw",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    textTransform: "uppercase",
  },

  one: { display: "flex", flexDirection: "column" },

  two: {
    display: "flex",
    flexWrap: "nowrap",

    maxWidth: "80%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "center",
    paddingLeft: "5rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingLeft: "2rem",
      alignItems: "center",
    },
  },

  sectionHeader: {
    fontFamily: "Playfair display",
    color: "rgb(226, 226, 226)",
    fontSize: "2vw",
    fontWeight: "bold",
  },

  sectionParagraph: {
    fontFamily: "Lato",
    fontSize: "1.2vw",
    lineHeight: "1.5",
    color: "rgb(226, 226, 226)",
    fontWeight: "300",
  },
}));
