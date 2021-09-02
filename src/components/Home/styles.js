import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  root: {
    flexGrow: 1,
  },
  main: {
    backgroundColor: "#feefe9",
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100vh",
  },

  wrapper: {
    maxWidth: "2000px",
    paddingTop: "20px",
    [theme.breakpoints.up("md")]: {
      padding: "50px",
    },
  },

  topTextDiv: {
    top: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    [theme.breakpoints.down("md")]: {},
  },

  topCategoryHeader: {
    margin: "5px",
    paddingLeft: theme.spacing(5),
    alignSelf: "flex-start",
    fontFamily: "Playfair Display",
    color: "rgb(226, 226, 226)",
    fontSize: "1.5rem",
    position: "relative",
    textTransform: "uppercase",
  },
  topSubHeader: {
    margin: "5px",
    paddingLeft: theme.spacing(5),
    paddingBottom: theme.spacing(1),
    fontFamily: "Lato",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "rgb(226, 226, 226)",
    fontWeight: "300",
    alignSelf: "flex-start",
    [theme.breakpoints.down("md")]: {},
  },
  topButton: {
    right: "14%",
    backgroundColor: "#FFFFFF",
    fontFamily: "Lato",
  },
  // Cards

  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  },

  sectionParagraph: {
    fontFamily: "Lato",
    fontSize: "1.2vw",
    lineHeight: "1.5",
    color: "rgb(226, 226, 226)",
    fontWeight: "300",
  },

  binderi: { position: "relative" },
  binderiImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
  },

  textDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    [theme.breakpoints.down("md")]: {},
  },

  topLandscapeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    paddingBottom: "20px",
    maxHeight: "174px",
    [theme.breakpoints.up("lg")]: {
      minHeight: "165px",
    },
  },

  landscapeImgOverlay: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: theme.spacing(5),
  },

  //Big card on front page
  mainCategoryHeader: {
    margin: "0",
    fontFamily: "Playfair Display",
    color: "rgb(226, 226, 226)",
    fontSize: "1.5rem",
    position: "relative",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  subHeader: {
    paddingTop: "10px",
    paddingBottom: theme.spacing(2),
    fontFamily: "Lato",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "rgb(226, 226, 226)",
    fontWeight: "300",
    [theme.breakpoints.down("md")]: {},
  },

  buttonMain: {
    bottom: "15%",
    backgroundColor: "#FFFFFF",
    fontFamily: "Lato",
  },

  largeCategoryContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.up("xs")]: {
      maxHeight: "207px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
      minHeight: "453px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(2),
      maxHeight: "537px",
    },
  },
  weddingImg: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  weddingImgOverlay: {
    top: "0",
    position: "absolute",
    width: "98%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      // minWidth: "95%",
    },
  },

  //Small card on frontpage
  smallCardHeader: {
    fontFamily: "Lato",
    fontSize: "16px",
    textTransform: "uppercase",
    paddingTop: "20px",
  },
  smallMainHeader: {
    fontFamily: "Playfair Display",
    fontSize: "40px",
    fontWeight: "bold",
    flexWrap: "wrap",
    [theme.breakpoints.up("lg")]: {},
  },
  smallCardParagraph: {
    fontFamily: "Lato",
    [theme.breakpoints.up("lg")]: {},
  },

  smallCategoriesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "20px",
      maxHeight: "227px",
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: "381px",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  smallCategoriesImg: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    // filter: "blur(2px)",
  },

  smallImgOverlayLeft: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "97%",
    height: "95%",
    background: "rgba(0, 0, 0, 0.3)",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "91%",
      minWidth: "96%",
    },
    [theme.breakpoints.down("sm")]: {
      // minWidth: "93%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "96%",
    },
  },
  smallImgOverlayRight: {
    position: "absolute",
    top: "0",
    width: "97%",
    height: "95%",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "91%",
      minWidth: "97%",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "96%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "94%",
    },
  },

  //Bottom section

  bottomSection: {
    display: "flex",
    width: "100%",
    backgroundColor: "#AFCECC",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  bottomSectionHeader: {
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(5),
    fontFamily: "Playfair Display",
    color: "#435E53",
    position: "relative",
    textTransform: "uppercase",
    fontSize: "45px",
    width: "100%",
    selfAlign: "flex-start",
    margin: "0",
  },
  lowerBottomSectionHeader: {
    paddingLeft: theme.spacing(8),
    fontFamily: "Playfair Display",
    color: "#435E53",
    position: "relative",
    textTransform: "uppercase",
    fontSize: "45px",
    width: "100%",
    selfAlign: "flex-start",
    margin: "0",
  },

  pBottom: {
    paddingLeft: theme.spacing(8),
    position: "relative",
    fontFamily: "Lato",
    color: "#435E53",
    width: "90%",
    fontSize: "18px",
  },

  rightBottomSection: {
    width: "40%",
    height: "70%",
    objectFit: "contain",
  },
  leftBottomSection: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
}));
