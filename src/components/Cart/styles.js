import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontFamily: "Playfair display",
    fontSize: "24px",
    paddingLeft: "10px",
  },

  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  infoTitle: {
    fontFamily: "Lato",
  },

  cartButtonRow: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  cartHeader: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  keepShoppingButton: {
    backgroundColor: "#F9F9F9",
    fontFamily: "Lato",
    fontWeight: "bold",
    minWidth: "200px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "200px",
    backgroundColor: "#A28767",
    fontFamily: "Lato",
    fontWeight: "bold",
  },
  emptyButton: {
    textDecoration: "underline",
    cursor: "pointer",
    fontFamily: "Lato",
  },
  cardDetails: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3%",
    width: "100%",
    justifyContent: "space-between",
  },
  subHeader: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
  },

  subHeaderTextAntall: {
    fontFamily: "Lato",
    fontSize: "14px",
    paddingLeft: "50px",
    paddingRight: "315px",
  },

  subHeaderTextPris: {
    fontFamily: "Lato",
    fontSize: "14px",
    paddingLeft: "50px",
    paddingRight: "70px",
  },
  subHeaderText: {
    fontFamily: "Lato",
    fontSize: "14px",
    paddingLeft: "50px",
    paddingRight: "30px",
  },
  totalSum: {
    fontFamily: "Playfair display",
    fontSize: "24px",
    alignSelf: "flex-end",
    padding: theme.spacing(3),
  },
}));
