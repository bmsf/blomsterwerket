import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "space-around",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    width: "100%",
    backgroundColor: "#131c25",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  logoDiv: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {},
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

  footerLogo: {
    fontFamily: "Roseritta",
    color: "#F8F8F9",
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  footerList: {
    padding: "0",

    "& li": {
      listStyle: "none",
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer",
    },
    socialButtonsFooter: {
      display: "none",
    },
  },
}));
