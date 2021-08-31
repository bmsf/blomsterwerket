import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#fce5ce",
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingTop: theme.spacing(3),
    },
  },
  root: {
    flexGrow: 1,
  },
  main: {
    width: "100%",
  },
  wrapper: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));
