import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
 
  root: {
    flexGrow: 1,
  },
  main: {
    width: "100%",
  },
  wrapper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },

  productsAndFilter: {
    display: "flex",
    justifyContent: "space-between",
  },

  header: {
    fontFamily: "Roseritta",
    fontSize: "20px",
    paddingBottom: theme.spacing(3),
  },
}));
