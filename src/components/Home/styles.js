import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  root: {
    flexGrow: 1,
  },
  main: {
    backgroundColor: "#F5FAFD",
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

  //Frontpage top section

  frontPageDiv: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(3),
    },
  },

  socialButtons: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  socialButton: {
    fill: "#121c25",
  },

  roundedImgFrontpage: {
    width: "22%",
    objectFit: "contain",
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      minWidth: "35%",
      paddingBottom: theme.spacing(5),
    },
  },
  textDivFrontpage: {
    width: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingRight: theme.spacing(20),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingRight: "0",
    },
  },
  headerFrontpageTop: {
    display: "flex",
    fontSize: "8vw",
    fontFamily: "Roseritta",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "14vw",
      justifyContent: "center",
      margin: "0",
    },
  },
  headerFrontpage: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "8vw",
    fontFamily: "Roseritta",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      fontSize: "14vw",
      position: "relative",
      left: "15%",
    },
  },

  shopNow: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingRight: theme.spacing(5),
      paddingTop: theme.spacing(5),
    },
  },

  shopNowText: {
    fontFamily: "Jost",
  },

  //About us

  aboutUsSection: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
    },
  },
  utsidebutikk: {
    objectFit: "contain",
    borderTopLeftRadius: "150px",
    borderBottomLeftRadius: "150px",
    width: "30%",
    shapeOutside: "circle()",
    [theme.breakpoints.down("xs")]: {
      width: "40%",
      // marginLeft: "2rem",
    },
  },
  aboutUsTextContainer: {
    position: "relative",
    left: "15%",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      left: "8%",
    },
  },
  aboutUsHeader: {
    fontSize: "5vw",
    fontFamily: "Roseritta",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10vw",
    },
  },
  aboutParagraph: {
    fontFamily: "Jost",
  },

  //Best sellers
  gridContainer: {
    maxWidth: "70%",
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },

  // root: {
  //   maxWidth: "100%",
  //   backgroundColor: "#F5FAFD",
  //   cursor: "pointer",
  // },
  media: {
    height: "330px",
    // 16:9
    width: "100%",
    borderTopLeftRadius: "150px",
    borderTopRightRadius: "150px",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },

  bestSellerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: "5px",
    paddingLeft: "0",
    paddingRight: "0",
  },

  bodyText: {
    fontFamily: "Jost",
    fontSize: "12px",
  },
  shopNowBestSellers: {
    display: "flex",
    justifyContent: "flex-end",
    width: "70%",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingRight: theme.spacing(3),
    },
  },

  contentStyle: {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  },

  //Abonnement

  sub: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },

  category: {
    fontFamily: "Jost",
    fontSize: "2vw",
    borderBottom: "1px solid #121c25",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5vw",
    },
  },
  deliveryPrize: {
    paddingTop: theme.spacing(2),
    fontFamily: "Jost",
    fontSize: "1vw",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
    },
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  //Newsletter
  newsletter: {
    display: "flex",
    backgroundColor: "#D0DAE3",
    height: "300px",
    padding: theme.spacing(5),
  },
  textDiv: {
    width: "50%",
    paddingLeft: theme.spacing(10),
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    alignContent: "center",
    paddingLeft: theme.spacing(20),
  },
  input: {
    height: "40px",
    paddingLeft: theme.spacing(2),
    width: "70%",
  },
  submitButton: {
    width: "70%",
  },
  //Footer

  footer: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: "#121c25",
  },

  footerText: {
    fontSize: "14px",
    fontFamily: "Lato",
    paddingBottom: theme.spacing(3),
    color: "#D0DAE3",
  },
  nyhetsbrevField: {
    fontSize: "16px",
    fontFamily: "Lato",
    paddingTop: theme.spacing(2),
  },
  logoDiv: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(5),
  },
  footerLogo: {
    fontFamily: "Roseritta",
    color: "#F8F8F9",
    fontSize: "30px",
  },
  footerList: {
    "& li": {
      listStyle: "none",
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer",
    },
    socialsButtonFooter: {
      color: "#D0DAE3",
    },
  },
}));
