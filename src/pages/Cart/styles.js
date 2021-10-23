import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontFamily: "Roseritta",
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
    fontFamily: "Jost",
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
    fontFamily: "Jost",
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
    fontFamily: "Jost",
    fontWeight: "bold",
  },
  emptyButton: {
    textDecoration: "underline",
    cursor: "pointer",
    fontFamily: "Jost",
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
    fontFamily: "Jost",
    fontSize: "14px",
    paddingLeft: "50px",
    paddingRight: "315px",
  },

  subHeaderTextPris: {
    fontFamily: "Jost",
    fontSize: "14px",
    paddingLeft: "50px",
    paddingRight: "70px",
  },
  subHeaderText: {
    fontFamily: "Jost",
    fontSize: "14px",
    paddingLeft: "50px",
    paddingRight: "30px",
  },
  totalSum: {
    fontFamily: "Roseritta",
    fontSize: "24px",
    alignSelf: "flex-end",
    padding: theme.spacing(3),
  },

  // New Cart
  columnContainerOrders: {
    display: "flex",
    flexDirection: "column",
    width: "55%",
    marginRight: theme.spacing(2),
  },

  columnContainerSummary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D0DAE3",
    borderRadius: "5px",
    minHeight: "400px",
    padding: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  rows: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
}));
