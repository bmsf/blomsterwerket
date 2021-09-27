import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
    zIndex: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  div: {
    width: "100%",
    backgroundColor: "#131c25",
    display: "flex",
  },
  text: {
    marginLeft: theme.spacing(5),
    color: "#f5fafd",
    padding: theme.spacing(1),
    fontFamily: "Jost",
  },
  phone: {
    height: "20px",
    width: "20px",
    backGroundcolor: "white",
  },
}));

export default useStyles;
