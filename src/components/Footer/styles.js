import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: "#131c25",
  },
  logoDiv: {
    display: "flex",
    flexDirection: "column",
  },

  footerText: {
    fontSize: "16px",
    fontFamily: "Jost",
    color: "#D0DAE3",
  },

  footerLogo: {
    fontFamily: "Roseritta",
    color: "#D0DAE3",
    fontSize: "30px",
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
  li: {
    paddingBottom: "10px",
  },
}));
